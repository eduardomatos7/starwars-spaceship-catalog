'use client'
import spaceships from "../../spaceships.json"
import { useParams } from 'next/navigation'
import styles from "../../page.module.css"
import Title from "@/components/Title"
import { useRouter } from "next/navigation"

export default function Category() {
  const params = useParams()
  const router = useRouter()
  if (typeof params.category !== "string" ) return null
  const category = params.category.replace("_", " ")
  const categorySelected = spaceships.filter((item) => item.category === category)
  function handleSpaceship(id: number) {
      router.push(`/espaconaves/${id}`)
  }
  
    return (
    <>
      <Title title={category}/>
      <div className={styles.spaceshipsContent}>

      {categorySelected.map((item) => (
        <button key={item.id} className={`${styles.spaceship} ${styles.naveHover}`} onClick={()=> handleSpaceship(item.id)}>
          <h3>{item.name}</h3>
        </button>
      ))}
      </div>
    </>

  )
}