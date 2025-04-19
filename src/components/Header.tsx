"use client"
import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import spaceships from "@/app/spaceships.json"

function Header() {
    const pathname = usePathname()
    const idInitial = spaceships.map((item) => item.id)[0]
    console.log((idInitial))
  return (
    <div className={styles.header}>
        <h3>EXERCÍCIO 3 - CATÁLOGO DE ESPAÇONAVES</h3>
        <nav>
            <ul>
                <Link href="/" className={`${pathname === "/" ? styles.active : styles.navs}`}>Início</Link>
                <Link href={`/espaconaves/${idInitial}`} className={`${pathname.includes("espaconaves") ? styles.active : styles.navs}`}>Espaçonaves</Link>
                <Link href="/categorias" className={`${pathname === "/categorias" ? styles.active : styles.navs}`}>Categorias</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header