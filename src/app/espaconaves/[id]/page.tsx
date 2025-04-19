"use client"
import Title from '@/components/Title'
import { useParams } from 'next/navigation'
import React from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'
import spaceships from "@/app/spaceships.json"

function Spaceship() {
    const params = useParams()
    if (typeof params.id !== 'string') return null
    console.log(params.spaceship)
    const spaceship = spaceships.find((item) => item.id === +params.id!)
  return (
    <>
      <Title title={spaceship && spaceship.name} />
      {spaceship &&
      <div key={spaceship.id} className={styles.spaceshipContent}>
        <div className={styles.contentImage}>
        <Image src={spaceship.imageUrl} alt={spaceship.name} width={400} height={250} className={styles.imageSpaceship}/>
        </div>
        <p>Classe: {spaceship.category}</p>
        <p>Modelo: {spaceship.model}</p>
        <p>{spaceship.description}</p>
        <div className={styles.containerBtn}>
          <button className={styles.btnBottom}>Voltar</button>
          <button className={styles.btnBottom}>Próximo</button>
          </div>
      </div>
      }
    </>
  )}
export default Spaceship