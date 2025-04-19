'use client'
import spaceships from "../../spaceships.json"
import { useParams } from 'next/navigation'
import styles from "../../page.module.css"
import Title from "@/components/Title"

export default function Category() {
  const params = useParams()
  if (typeof params.category !== "string" ) return null
  const category = params.category.replace("_", " ")
  const categorySelected = spaceships.filter((item) => item.category === category)
  
    return (
    <>
      <Title title={category}/>
      <div className={styles.spaceshipsContent}>

      {categorySelected.map((item) => (
        <div key={item.id} className={`${styles.spaceship} ${styles.naveHover}`} >
          <h3>{item.name}</h3>
        </div>
      ))}
      </div>
    </>

  )
}