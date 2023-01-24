export type BulletsSchema = Array<{
  image: string
  titleBullet: string
  link?: LinkProps
}>

export interface LinkProps {
  url: string
  attributeNofollow: boolean
  attributeTitile?: string
  openNewTab?: boolean
  newTab?: boolean
}
