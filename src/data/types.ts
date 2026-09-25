export type Item = string | { label: string; text: string }

/** A titled block of verbatim page content. */
export interface Block {
  heading: string
  intro?: string
  paras?: string[]
  items?: Item[]
  /** paragraphs shown after the list */
  after?: string[]
}

export interface PageContent {
  title: string
  tagline?: string
  intro: string[]
  blocks: Block[]
  closing?: string[]
}
