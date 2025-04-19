"use client"
import Title from '@/components/Title'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'
import spaceships from "@/app/spaceships.json"
import { useRouter } from "next/navigation"

function Spaceship() {
  const router = useRouter()
  const params = useParams()
    if (typeof params.id !== 'string') return null
    console.log(params.spaceship)
    const spaceship = spaceships.find((item) => item.id === +params.id!)
    const length = spaceships.length
    function handleSkip() {
      router.push(`/espaconaves/${+params.id! + 1}`)
    }
    function handlePrev() {
      router.push(`/espaconaves/${+params.id! - 1}`)
    }
    if (!spaceship) return <h2 style={{marginTop: "2rem"}}>Nave não encontrada</h2>

  return (
    <>
      <Title title={spaceship && spaceship.name} />
      
      {spaceship &&
      <div key={spaceship.id} className={styles.spaceshipContent}>
        <div className={styles.contentImage}>
        <Image src={spaceship.imageUrl} 
        alt={spaceship.name} 
        width={400} 
        height={250} 
        className={styles.imageSpaceship}
        priority={true}
        />
        </div>
        <p>Classe: {spaceship.category}</p>
        <p>Modelo: {spaceship.model}</p>
        <p className={styles.description}>{spaceship.description}</p>
        <div className={+params.id > 1 ? styles.containerBtn : styles.right}>
          {+params.id > 1 && <button className={styles.btnBottom} onClick={handlePrev}>Voltar</button>}
        {+params.id === length ? "" : <button className={styles.btnBottom} onClick={handleSkip}>Próximo</button>}
          
          </div>
      </div>
      }
    </>
  )}
export default Spaceship