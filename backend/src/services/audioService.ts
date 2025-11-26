import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
const ffmpeg: any = require('fluent-ffmpeg');

// Usar diretório temporário do sistema operacional
const TMP_DIR = path.join(os.tmpdir(), 'globo-residencia-audio');
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

// Converter buffer diretamente para arquivo temporário
export async function bufferToTempFile(buffer: Buffer, filename: string): Promise<string> {
  const tempPath = path.join(TMP_DIR, `${Date.now()}-${filename}`);
  await fs.promises.writeFile(tempPath, buffer);
  return tempPath;
}

// Converte um arquivo MXF para WAV (mono, 16kHz, PCM 16)
export function convertMxfToWav(inputPath: string, outputName = 'converted.wav') {
  const outputPath = path.join(TMP_DIR, `${Date.now()}-${outputName}`);
  console.log(`🎬 Iniciando conversão MXF → WAV`);
  
  return new Promise<string>((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions(['-acodec pcm_s16le', '-ac 2', '-ar 44100'])
      .on('start', (cmd: string) => {
        console.log(`🔧 FFmpeg iniciado`);
      })
      .on('progress', (progress: any) => {
        if (progress.percent) {
          console.log(`⏳ Conversão: ${Math.floor(progress.percent)}%`);
        }
      })
      .on('end', () => {
        console.log(`✅ Conversão concluída`);
        // Deletar arquivo original após conversão
        try { fs.unlinkSync(inputPath); } catch {}
        resolve(outputPath);
      })
      .on('error', (err: any) => {
        console.error(`❌ Erro na conversão FFmpeg:`, err);
        // Deletar arquivo original mesmo em caso de erro
        try { fs.unlinkSync(inputPath); } catch {}
        reject(err);
      })
      .save(outputPath);
  });
}

// Divide um WAV em segmentos de `segmentSeconds` segundos
export function splitWav(inputWav: string, segmentSeconds = 20) {
  const timestamp = Date.now();
  const outPattern = path.join(TMP_DIR, `${timestamp}-segment-%03d.wav`);
  
  return new Promise<string[]>((resolve, reject) => {
    ffmpeg(inputWav)
      .outputOptions(['-f segment', `-segment_time ${segmentSeconds}`, '-c copy'])
      .on('end', async () => {
        // Listar apenas os arquivos gerados agora
        const files = (await fs.promises.readdir(TMP_DIR))
          .filter((f: string) => f.startsWith(`${timestamp}-segment-`) && f.endsWith('.wav'))
          .map((f: string) => path.join(TMP_DIR, f))
          .sort();
        
        // Deletar arquivo WAV original após split
        try { fs.unlinkSync(inputWav); } catch {}
        
        resolve(files);
      })
      .on('error', (err: any) => {
        // Deletar arquivo WAV original mesmo em caso de erro
        try { fs.unlinkSync(inputWav); } catch {}
        reject(err);
      })
      .save(outPattern);
  });
}

export function concatWavs(parts: string[], outName = 'combined.wav') {
  const timestamp = Date.now();
  const listFile = path.join(TMP_DIR, `${timestamp}-concat-list.txt`);
  const outPath = path.join(TMP_DIR, `${timestamp}-${outName}`);
  const content = parts.map((p) => `file '${p.replace(/\\/g, '/')}'`).join('\n');
  
  return fs.promises.writeFile(listFile, content).then(() =>
    new Promise<string>((resolve, reject) => {
      ffmpeg()
        .input(listFile)
        .inputOptions(['-f concat', '-safe 0'])
        .outputOptions(['-c copy'])
        .on('end', () => {
          // Limpar arquivos usados
          try { fs.unlinkSync(listFile); } catch {}
          parts.forEach(p => { try { fs.unlinkSync(p); } catch {} });
          resolve(outPath);
        })
        .on('error', (err: any) => {
          // Limpar arquivos mesmo em caso de erro
          try { fs.unlinkSync(listFile); } catch {}
          parts.forEach(p => { try { fs.unlinkSync(p); } catch {} });
          reject(err);
        })
        .save(outPath);
    })
  );
}

export function clearTmp() {
  try {
    const files = fs.readdirSync(TMP_DIR);
    for (const f of files) {
      try { fs.unlinkSync(path.join(TMP_DIR, f)); } catch {}
    }
    console.log('🧹 Arquivos temporários limpos');
  } catch (e) {
    // Diretório não existe ou está vazio
  }
}
