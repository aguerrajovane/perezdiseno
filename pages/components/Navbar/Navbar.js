import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/proyectos">
            <a>Proyectos</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/servicios">
            <a>Servicios</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contacto">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
