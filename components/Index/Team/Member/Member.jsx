import styles from './Member.module.scss'

const Member = ({ image, name, title, role }) => {
  return (
    <div className={styles.member} id='team'>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>

      <p className={styles.name}>{name}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.role}>{role}</p>
    </div>
  )
}

export default Member