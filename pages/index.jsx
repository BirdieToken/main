import styles from '../components/Index/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <img src={'/image.png?' + new Date()} className={styles.bg} />
    </div>
  )
}
