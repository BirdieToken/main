import styles from './Footer.module.scss'

const Footer = () => {
  const go_to = (path) => window.location.hash = path
  const open_link = (url) => window.open(url)

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div>
          <img src='/logo2.png' className={styles.text_logo} />
          <p className={styles.text}>Birdie Golf LLC. is a Web3 solutions company aiming to reduce the complexity of blockchain technology. With products like the #UnderParLifeStyle apparel line and Titus NFT, this will give our holders instant access into both the world of golf and decentralized finance!</p>
          <ul className={styles.links}>
            <li onClick={() => open_link('https://twitter.com/birdiegolfllc')}><i className='fa-brands fa-twitter'></i></li>
            <li onClick={() => open_link('https://instagram.com/birdiegolfllc')}><i className='fa-brands fa-instagram'></i></li>
            <li onClick={() => open_link('https://discord.gg/5u3E2fpQdF')}><i className='fa-brands fa-discord'></i></li>
          </ul>
        </div>

        <ul className={styles.navigation}>
          <li>Explore</li>
          <li onClick={() => go_to('main')}>Home</li>
          <li onClick={() => go_to('about')}>About</li>
          <li onClick={() => open_link('/pdf/whitepaper.pdf')}>Whitepaper</li>
          <li onClick={() => go_to('team')}>Team</li>
          <li onClick={() => open_link('https://linktr.ee/birdiegolfllc')}>Linktree</li>
        </ul>

        <ul className={styles.navigation}>
          <li>dApps</li>
          <li onClick={() => open_link('https://titus.web3birdie.io/')}>Titus Collection Mint</li>
          <li onClick={() => open_link('https://underparlifestyle.myshopify.com/')}>Store</li>
        </ul>
      </div>

      <div className={styles.rights}>
        <p>&copy; 2022 BirdieGolf LLC.</p>

        <p>All rights reserved.</p>
      </div>

      <div className={styles.back_to_top}>
        <button onClick={() => go_to('main')}>
          Back to top

          <div className={styles.icon}>
            <i className='fa-solid fa-chevron-up'></i>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Footer