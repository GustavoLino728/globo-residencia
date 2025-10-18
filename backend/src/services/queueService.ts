// Configurar concorrência para requisições de saída ao audd.io
let queue: any;

(async () => {
  const PQueue = (await import('p-queue')).default;
  queue = new PQueue({ concurrency: 2 });
})();

export function enqueue<T>(fn: () => Promise<T>) {
  return queue.add(fn);
}
