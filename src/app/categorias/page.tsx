"use client"
import React from 'react'
import spaceships from "../spaceships.json"
import styles from "../page.module.css"
import { useRouter, useParams } from 'next/navigation'
import Title from '@/components/Title'

function page() {
  const router = useRouter()
  const category = [...new Set(spaceships.map((nave) => nave.category))]

  function handleCategory(item: string) {
      router.push(`/categorias/${item.replace(' ', "_")}`)
  }

  return (
    <>
    <Title title='Categorias'/>
    <div className={styles.spaceshipsContent}>
         {category.map((item, index) => (
            <button key={index} className={`${styles.spaceship} ${styles.naveHover}`} onClick={() => handleCategory(item)}>
              <h3>{item}</h3>
            </button>
          ))}
    </div>
    </>
  )
}

export default page