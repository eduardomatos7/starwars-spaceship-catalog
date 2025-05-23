"use client"
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import spaceships from "./spaceships.json"
import Title from "@/components/Title";
import { useRouter } from "next/navigation";

export default function Home() {
  const [enableBtn, setEnableBtn] = useState(false)
  const router = useRouter()
  function handleSpaceship(id: number) {
    router.push(`/espaconaves/${id}`)
  }

  return (
    <div className={styles.contentTitleBtn}>
    <Title title="Conheça as Naves do Universo Star Wars"/>

      <button className={styles.btnSeeAll}
        onClick={() => setEnableBtn(!enableBtn)}
      >{!enableBtn ? "Ver todas" : "Ocultar"}
      </button>
      {enableBtn &&
        <div className={styles.spaceshipsContent}>
          {spaceships.map((item) => (
            <div key={item.id} className={`${styles.spaceship} ${styles.naveHover}`} onClick={()=> handleSpaceship(item.id)}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>

      }

    </div>
  );
}
