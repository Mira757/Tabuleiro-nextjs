import Casas from '../components/Casas'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Casas preta/>
      <Casas />
      <Casas preta/>
    </div>
  )
}