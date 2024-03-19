import React from 'react';
import { ReactNode } from 'react';



interface HeaderProps {
  image: {
    src:string,
    alt:string
  }
  children:ReactNode
}

export default function Header({ image,children }: HeaderProps) {
  return (
    <article>
    <div>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image}/>
      {children}
    </div>
    </article>
  );
}
