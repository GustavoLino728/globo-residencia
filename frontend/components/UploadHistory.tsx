import Image from "next/image"

type Thumb = {
  id: string
  src: string
  alt?: string
}

const sampleThumbs: Thumb[] = [
  { id: '1', src: '/Home.png', alt: 'thumb 1' },
  { id: '2', src: '/logoGlobo.png', alt: 'thumb 2' },
  { id: '3', src: '/logoGlobo.svg', alt: 'thumb 3' },
  { id: '4', src: '/next.svg', alt: 'thumb 4' },
  { id: '5', src: '/vercel.svg', alt: 'thumb 5' },
]

export default function UploadHistory({ thumbs = sampleThumbs }: { thumbs?: Thumb[] }) {
  return (
    <section className="mt-8 relative">
      <h3 className="text-white text-lg font-semibold mb-3">Histórico</h3>

      <div className="flex gap-3 overflow-x-auto py-2">
        {thumbs.map((t) => (
          <div
            key={t.id}
            className="relative flex-shrink-0 w-36 h-20 rounded-xl overflow-hidden shadow-lg bg-gray-800 ring-1 ring-white/10"
          >
            <Image src={t.src} alt={t.alt || ''} fill sizes="(max-width: 768px) 25vw, 200px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}