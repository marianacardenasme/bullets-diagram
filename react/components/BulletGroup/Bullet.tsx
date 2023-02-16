import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"

type Props = {
  src: string
}

const Bullet = ({src}: Props ) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item----image"
  ]
  const handles = useCssHandles(CSS_HANDLES) //responsable de mostrar una clase en vtex io

  return (
  <div className={handles["bullet__item"]}>
    <img className={`${handles["bullet__item--image"]} externalClass`} src={src} />
  </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "imagen de bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}
export default Bullet
