"use client"
import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    const pathname = usePathname()
  return (
    <div className={styles.header}>
        <h3>EXERCÍCIO 3 - CATÁLOGO DE ESPAÇONAVES</h3>
        <nav>
            <ul>
                <Link href="/" className={`${pathname === "/" ? styles.active : styles.navs}`}>Início</Link>
                <Link href="/espaconaves" className={`${pathname === "/espaconaves" ? styles.active : styles.navs}`}>Espaçonaves</Link>
                <Link href="/categorias" className={`${pathname === "/categorias" ? styles.active : styles.navs}`}>Categorias</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header