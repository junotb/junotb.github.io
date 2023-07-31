import Link from "next/link";

const Home = () => {
  const fromYear = 2016;
  const toYear = new Date().getFullYear();
  const skipYear = 1;

  return (
    <div className="px-6">
      <section className="border-dashed border-b-2 border-[rgb(var(--foreground-rgb))] py-8">
        <h3 className="px-2 py-4 font-bold">Articles</h3>
        <ul>
          <li className="border-t-2 border-[rgb(var(--foreground-rgb))] px-2 py-4">
            <Link href={"/articles"} className="text-sm">제목1</Link>
          </li>
          <li className="border-t-2 border-[rgb(var(--foreground-rgb))] px-2 py-4">
            <Link href={"/articles"} className="text-sm">제목2</Link>
          </li>
        </ul>
      </section>
      <section className="py-8 space-y-4">
        <p className="font-bold text-center">Hello! I&apos;m Juno</p>
        <p className="text-sm">
          문화 & 교육 분야에서 일하고 있는 {toYear - fromYear - skipYear + 1}년차 개발자입니다.
          시스템 개발/운영 업무를 담당하고 있습니다.
        </p>
      </section>
    </div>
  )
};

export default Home;
