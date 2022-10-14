import styles from './Team.module.scss'
import Member from './Member/Member'

const Team = () => {
  return (
    <div className={styles.team}>
      <div className={styles.header}>
        <p>Our Team</p>
      </div>

      <div className={styles.grid}>
        <Member
          image={'/team/ryan.jpg'}
          name={'Ryan L. (US)'}
          title={'Project Owner'}
          role={'Air Force Veteran and Logistics Specialist'} />

        <Member
          image={'/team/sky.jpeg'}
          name={'Sky W. (UK)'}
          title={'Merchandising & Promotion'}
          role={'Merchandising'} />

        <Member
          image={'/team/fiona.jpg'}
          name={'Fiona H. (US)'}
          title={'Community Manager'}
          role={'Human Resources Specialist'} />

        <Member
          image={'/team/nick.jpg'}
          name={'Nick'}
          title={'CTO'}
          role={'Tech/Web3 Advisor'} />
      </div>
    </div>
  )
}

export default Team