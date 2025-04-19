"use client"
import styles from "./page.module.css";
import { useState } from "react";
import spaceships from "./spaceships.json"

export default function Home() {
  console.log(spaceships)
  const [enableBtn, setEnableBtn] = useState(false)
  return (
    <div className={styles.contentTitleBtn}>
      <h2>Conheça as Naves do Universo Star Wars</h2>
      <button className={styles.btnSeeAll}
        onClick={() => setEnableBtn(!enableBtn)}
      >{!enableBtn ? "Ver todas" : "Ocultar"}
      </button>
      {enableBtn &&
        <div className={styles.spaceshipsContent}>
          {spaceships.map((item) => (
            <div key={item.id} className={styles.spaceship}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>

      }

    </div>
  );
}
