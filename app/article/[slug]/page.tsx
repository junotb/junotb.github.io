

const Page = ({
  params
}: {
  params: {
    slug: string
  }
}) => {
  return (
    <article>
      <div className="px-6 py-8">
        <header className="px-2 py-4">
          This is an Article Header
        </header>
        <section className="border-t-2 border-[rgb(var(--foreground-rgb))] px-2 py-4">
          This is an Article Content
        </section>
      </div>
    </article>
  )
};

export default Page;