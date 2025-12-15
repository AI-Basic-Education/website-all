import PhenomenaCards from "@/components/phenomena-cards"

export default function Home() {
  return (
    <>
      <section className="pt-12">
        <h1 className="text-center">AI 教育</h1>
        <p className="text-justify indent-8 text-pretty">
      本网站聚焦人工智能教育领域，旨在搭建一个人工智能的学习资源共享平台。平台展示人工智能相关的书籍与课程资源，涵盖课程大纲、配套教材、精品讲义、线上教学视频及实践项目代码等核心内容。
        </p>
      </section>
      <hr />
      <PhenomenaCards />
    </>
  )
}
