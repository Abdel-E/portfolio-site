const GLYPHS = [
  '𓂀',
  '𓃭',
  '𓆣',
  '𓇳',
  '𓈖',
  '𓉴',
  '𓊹',
  '𓋹',
  '𓌻',
  '𓍑',
  '𓎛',
  '𓏏',
  '𓀭',
  '𓁰',
  '𓂓',
  '𓃾',
  '𓅓',
  '𓆑',
  '𓇋',
  '𓈎',
  '𓉐',
  '𓊪',
  '𓋴',
  '𓌃',
]

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seedRow(seed: number, count: number) {
  const random = mulberry32(seed)
  return Array.from(
    { length: count },
    () => GLYPHS[Math.floor(random() * GLYPHS.length)],
  )
}

const ROW_COUNT = 36
const GLYPHS_PER_ROW = 48

const ROWS = Array.from({ length: ROW_COUNT }, (_, index) => ({
  seed: 11 + index * 17,
  dir: (index % 2 === 0 ? 'left' : 'right') as 'left' | 'right',
  duration: `${56 + (index % 6) * 8}s`,
  glyphs: seedRow(11 + index * 17, GLYPHS_PER_ROW),
}))

function GlyphTrack({ glyphs }: { glyphs: string[] }) {
  return (
    <span className="inline-flex h-full shrink-0 items-center">
      {glyphs.map((glyph, index) => (
        <span
          key={index}
          className="inline-flex w-12 shrink-0 items-center justify-center"
        >
          {glyph}
        </span>
      ))}
    </span>
  )
}

function GlyphRow({
  glyphs,
  dir,
  duration,
}: {
  glyphs: string[]
  dir: 'left' | 'right'
  duration: string
}) {
  return (
    <div className="h-14 shrink-0 overflow-hidden">
      <div
        className={dir === 'left' ? 'glyph-row-left' : 'glyph-row-right'}
        style={{ animationDuration: duration }}
      >
        <GlyphTrack glyphs={glyphs} />
        <GlyphTrack glyphs={glyphs} />
      </div>
    </div>
  )
}

export function GlyphField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden font-[family-name:var(--font-hiero)] text-2xl leading-none text-ink/[0.16] dark:text-papyrus/[0.08]"
    >
      <div className="flex min-h-full flex-col">
        {ROWS.map((row) => (
          <GlyphRow
            key={row.seed}
            glyphs={row.glyphs}
            dir={row.dir}
            duration={row.duration}
          />
        ))}
      </div>
    </div>
  )
}
