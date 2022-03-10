import styles from '../styles/Casas.module.css'

export default function Casas(props) {
  return (
    <div 
      style={{
        backgroundColor: props.preta ? "#000"
      }}
      className={styles.subdivisao}>
    
    </div>
  )
}