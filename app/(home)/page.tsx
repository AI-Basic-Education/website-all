import PhenomenaCards from "@/components/phenomena-cards"

export default function Home() {
  return (
    <>
      <section className="pt-12">
        <h1 className="text-center">机器学习研究所</h1>
        <p className="text-justify indent-8 text-pretty">
          本网站聚焦机器学习与科学应用领域，旨在搭建一个机器学习的学习资源共享平台。
        </p>
      </section>
      <hr />
      <PhenomenaCards />
    </>
  )
}
