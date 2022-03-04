import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://s1.eestatic.com/2020/08/26/curiosidades/mascotas/mascotas-perros-gatos_515959375_158488465_1706x960.jpg'


export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?'}) => (

    <Anchor href={path}>
        <Image alt="" src={cover}/>
        {emoji}
    </Anchor>
)