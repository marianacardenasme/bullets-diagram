export type BulletsSchema = Array<{
  image: string
  titleBullet: string
  link: Link
}>

export interface Link {
  url: string
  attributeNofollow: boolean
  attributeTitile?: string
  openNewTab?: boolean
  newTab?: boolean
}
