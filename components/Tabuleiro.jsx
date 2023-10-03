import Linha from "./Linha"
import styles from "@/styles/Home.module.css"

export default function Tabuleiro() {
  return (
    <div className={styles.container}>
      <Linha />
      <Linha invertida />
      <Linha />
      <Linha invertida />
      <Linha />
      <Linha invertida />
      <Linha />
      <Linha invertida />
    </div>
  )
}
