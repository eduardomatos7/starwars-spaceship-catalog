"use client"
import styles from "./page.module.css";
import { useState } from "react";
import spaceships from "./spaceships.json"
import Title from "@/components/Title";

export default function Home() {
  const [enableBtn, setEnableBtn] = useState(false)
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
            <div key={item.id} className={`${styles.spaceship} ${styles.naveHover}`}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>

      }

    </div>
  );
}
