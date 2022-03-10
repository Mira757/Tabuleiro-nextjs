import styles from '../styles/Linha.module.css'
import Casas from "./Casas";

export default function Linha(props) {
  return ( 
    <div className={styles.linha}>
      <Casas />
      <Casas preta/>
      <Casas />
      <Casas preta/>
      <Casas />
      <Casas preta/>
      <Casas />
      <Casas preta/>
    </div>
  )
}

   
  
