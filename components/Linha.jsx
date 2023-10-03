import styles from "../styles/Linha.module.css"
import Subdivisao from "./Subdivisao"

const linhaInvertida = (
  <div className={styles.linha}>
    <Subdivisao preta />
    <Subdivisao />
    <Subdivisao preta />
    <Subdivisao />
    <Subdivisao preta />
    <Subdivisao />
    <Subdivisao preta />
    <Subdivisao />
  </div>
)
const linhaNormal = (
  <div className={styles.linha}>
    <Subdivisao />
    <Subdivisao preta />
    <Subdivisao />
    <Subdivisao preta />
    <Subdivisao />
    <Subdivisao preta />
    <Subdivisao />
    <Subdivisao preta />
  </div>
)

export default function Linha(props) {
  return props.invertida ? linhaInvertida : linhaNormal
}
