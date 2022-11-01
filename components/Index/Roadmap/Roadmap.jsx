import styles from './Roadmap.module.scss'

const Roadmap = () => {
  return (
    <div className={styles.roadmap}>
      <div className={styles.top_header}>
        <div className={styles.head}>
          <p>2022 Roadmap</p>
        </div>

        <p className={styles.motto}>Our priorities for 2022!</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.section}>
          <ul>
            <li>January - February</li>
            <li>Community giveaways</li>
            <li>Expansion of the Marketing Campaign</li>
            <li>Reaching 5000 Followers in our Social Media platforms</li>
            <li>Website and Logo Revamp</li>
          </ul>

          <div className={styles.line}>
            <div className={styles.dot}></div>
          </div>

          <div className={styles.mobile_dot}></div>

          <div className={styles.empty}></div>
        </div>

        <div className={styles.section}>
          <div className={styles.empty}></div>

          <div className={styles.mobile_dot}></div>

          <div className={styles.line}>
            <div className={styles.dot}></div>
          </div>

          <ul>
            <li>June - August</li>
            <li>2nd round of merchandise</li>
            <li>Collaboration with other DeFi communities and strategic partnerships</li>
            <li>Crypto and Golf Friendly content</li>
          </ul>
        </div>

        <div className={styles.section}>
          <ul>
            <li>March - May</li>
            <li>Birdie Wallet DApp Launch</li>
            <li>Expansion of the Core and Dev Team</li>
            <li>Collaboration with Branding Consultants</li>
          </ul>

          <div className={styles.line}>
            <div className={styles.dot}></div>
          </div>

          <div className={styles.mobile_dot}></div>

          <div className={styles.empty}></div>
        </div>

        <div className={styles.section}>
          <div className={styles.empty}></div>

          <div className={styles.line}>
            <div className={styles.dot} style={{ backgroundColor: '#f7f8f9', boxShadow: 'none' }}></div>
          </div>

          <div className={styles.mobile_dot} style={{ backgroundColor: '#f7f8f9', boxShadow: 'none' }}></div>

          <ul>
            <li>September - December</li>
            <li>Website Version 2.0</li>
            <li>Launch Platform, NFT Marketplace testing period</li>
            <li>Birdie Concept project revealed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Roadmap