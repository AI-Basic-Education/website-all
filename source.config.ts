import remarkReadingTime from "@/lib/remark-plugins/remark-reading-time.mjs"
import { remarkMdxFiles } from "fumadocs-core/mdx-plugins"
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import { z } from "zod"

export const phenomena = defineDocs({
  dir: "content/phenomena",
  docs: {
    schema: frontmatterSchema.extend({
      tags: z.array(z.string()).optional(),
      relatedWorks: z.string().optional(),
      // 可选：如果提供 externalUrl，则首页卡片会跳转到这个外部链接
      externalUrl: z.string().url().optional(),
    }),
    files: ["**/*", "!**/data/*"],
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    files: ["!**/*.json"],
  },
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMdxFiles, remarkReadingTime],
    rehypePlugins: (v) => [rehypeKatex, ...v],
    valueToExport: ["readingTime"],
  },
  lastModifiedTime: "git",
})
