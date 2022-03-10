import styles from '../styles/Linha.module.css'
import Casas from "./Casas";

export default function Linha(props) {
  return ( 
    <div className={styles.linha}>
      
      <Casas preta={props.preta}/>
    </div>
  )
}

   
  
