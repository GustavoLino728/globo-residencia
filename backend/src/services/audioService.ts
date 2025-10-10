import * as fs from 'fs';
import * as path from 'path';
const ffmpeg: any = require('fluent-ffmpeg');

const TMP_DIR = path.join(process.cwd(), 'tmp_audio');
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

// Salva um arquivo a partir de uma string base64
export async function saveBase64ToFile(base64: string, filename = 'input.mxf') {
  const buffer = Buffer.from(base64, 'base64');
  const filePath = path.join(TMP_DIR, filename);
  await fs.promises.writeFile(filePath, buffer);
  return filePath;
}

// Converte um arquivo MXF para WAV (mono, 16kHz, PCM 16)
export function convertMxfToWav(inputPath: string, outputName = 'converted.wav') {
  const outputPath = path.join(TMP_DIR, outputName);
  return new Promise<string>((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions(['-acodec pcm_s16le', '-ac 1', '-ar 16000'])
      .on('end', () => resolve(outputPath))
      .on('error', (err: any) => reject(err))
      .save(outputPath);
  });
}

// Divide um WAV em segmentos de `segmentSeconds` segundos
export function splitWav(inputWav: string, segmentSeconds = 20) {
  const outPattern = path.join(TMP_DIR, 'segment-%03d.wav');
  return new Promise<string[]>((resolve, reject) => {
    ffmpeg(inputWav)
      .outputOptions(['-f segment', `-segment_time ${segmentSeconds}`, '-c copy'])
    .on('end', async () => {
      // listar arquivos gerados
        const files = (await fs.promises.readdir(TMP_DIR))
          .filter((f: string) => f.startsWith('segment-') && f.endsWith('.wav'))
          .map((f: string) => path.join(TMP_DIR, f))
          .sort();
        resolve(files);
      })
      .on('error', (err: any) => reject(err))
      .save(outPattern);
  });
}

export function concatWavs(parts: string[], outName = 'combined.wav') {
  const listFile = path.join(TMP_DIR, 'concat-list.txt');
  const outPath = path.join(TMP_DIR, outName);
  const content = parts.map((p) => `file '${p.replace(/\\/g, '/')}'`).join('\n');
  return fs.promises.writeFile(listFile, content).then(() =>
    new Promise<string>((resolve, reject) => {
      ffmpeg()
        .input(listFile)
        .inputOptions(['-f concat', '-safe 0'])
        .outputOptions(['-c copy'])
        .on('end', () => resolve(outPath))
        .on('error', (err: any) => reject(err))
        .save(outPath);
    })
  );
}

export function clearTmp() {
  const files = fs.readdirSync(TMP_DIR);
  for (const f of files) {
    try { fs.unlinkSync(path.join(TMP_DIR, f)); } catch {}
  }
}
