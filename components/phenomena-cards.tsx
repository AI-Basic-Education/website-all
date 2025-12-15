import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { source } from "@/lib/source"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PhenomenaCards() {
  const phenomena = source.getPages()
  return (
    <section className="prose-ul:-ml-6 prose-ul:list-none">
      <ul className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
        {phenomena.map((page) => {
          const href = (page.data as any).externalUrl ?? page.url
          const isExternal = Boolean((page.data as any).externalUrl)

          const content = (
            <Card className="flex h-full flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {page.data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    {page.data.description && (
                      <div className="opacity-70">{page.data.description}</div>
                    )}
                  </CardContent>
                  <CardFooter className="mb-2">
                    <p className="date flex items-center gap-2 font-mono text-sm opacity-70">
                      Learn more
                      <ArrowRight className="inline-block size-4" />
                    </p>
                  </CardFooter>
                </Card>
          )

          return (
            <li key={page.url}>
              {isExternal ? (
                <a href={href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <Link href={href}>{content}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
