import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
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

  const bulletsGroup = getBulletsAsTSXList(bullets);
  const newListContextValue = list.concat(bulletsGroup)

  if (false) {
    children
  }

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
          <div>{bulletsGroup}</div>
        :
          children
      }
    </ListContextProvider>

  )
}

export default BulletGroup
