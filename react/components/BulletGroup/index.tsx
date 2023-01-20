import React, { PropsWithChildren } from 'react'
import { useListContext } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || []

  console.log("Bullets", list)

  const bulletsContent = getBulletsAsTSXList(bullets);

  if (false) {
    children
  }

  return (
    isMobile
    ?
    <div>Aquí tendremos un list context</div>
    :
    <div>{bulletsContent}</div>

  )
}

export default BulletGroup
