export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <article
      className="px-6 py-4"
    >{children}</article>
  )
}