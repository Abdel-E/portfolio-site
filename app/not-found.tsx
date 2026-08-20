import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="page-enter flex min-h-[50vh] flex-col items-start justify-center">
      <Pyramid />
      <h1 className="mt-6 font-serif text-2xl text-ink dark:text-papyrus">This chamber is empty.</h1>
      <p className="mt-2 text-sm text-muted">
        The page you wanted is not here. It may never have been.
      </p>
      <Link href="/" className="mt-6 text-sm text-nile hover:text-gold">
        Return to the entrance
      </Link>
    </main>
  )
}

function Pyramid() {
  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      aria-hidden="true"
      className="text-gold"
    >
      <path
        d="M24 2.5 45.5 30.5H2.5L24 2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M24 2.5 16 30.5M24 2.5 32 30.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  )
}
