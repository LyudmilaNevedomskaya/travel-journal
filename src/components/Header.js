import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img src={require('../images/world.png')} alt='earth image'/>
      <p className="header--title">my travel journal</p>
    </header>
  )
}