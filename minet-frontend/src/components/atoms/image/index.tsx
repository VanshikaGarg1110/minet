import React from 'react'

type Props={
    src:any,
    alt:string,
    style?:any
}
const Image = ({src, alt, style}: Props) => {
    return (
        <img src={src} alt={alt} style={style}/>
    )
}

export default Image