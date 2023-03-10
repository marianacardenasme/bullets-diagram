import React from 'react'
import { BulletsSchema } from '../BulletTypes'
import Bullet from '../Bullet'

export const getBulletsAsTSXList = (
  bullets: BulletsSchema
) => (
  bullets.map((bullet:any, index) => {
    console.log(bullet)
    return <Bullet
    key={index}
    src={bullet.image}
    />
  })
)
