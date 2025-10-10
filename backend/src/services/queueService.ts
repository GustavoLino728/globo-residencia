import PQueue from 'p-queue';

// Configurar concorrência para requisições de saída ao audd.io
export const queue = new PQueue({ concurrency: 2 });

export function enqueue<T>(fn: () => Promise<T>) {
  return queue.add(fn);
}
