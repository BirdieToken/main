import styles from './About.module.scss'
import useWindowSize from '../../../hooks/useWindowSize'

const About = () => {
  const size = useWindowSize()

  const load_url = (url) => window.open(url)

  return (
    <div className={styles.about} id='about'>
      <div className={styles.top_header}>
        <div className={styles.head}>
          <p>About Us</p>
        </div>

        <p className={styles.motto}>Inspiring solutions to Web3 & Golf problems.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.section}>
          <div className={styles.header}>
            <i className='fa-solid fa-golf-ball-tee' style={{ color: '#334470' }}></i>
            <p>Web3 & Golf</p>
          </div>

          <p className={styles.text}>The ambition behind Birdie Golf LLC is to bring the powers of Web3 to the game of golf to grow both industries. Our goal is to bring these
            two together with easy-to-use products like our Birdie Wallet, Birdie Token
            and Titus NFT's to unlock the wonders of Web3 into real life utility through the game of golf.</p>

          <img src='/graphics/birdie.png' />
        </div>

        <div className={styles.section}>
          <div className={styles.header}>
            <i className='fa-duotone fa-screwdriver-wrench' style={{ color: '#7fb543' }}></i>
            <p>Advanced Utility</p>
          </div>

          <p className={styles.text}>Due to the continuous and rapid growth of the Web3 technologies it's hard for
            some to understand and keep up with this new financial reality that can be
            beneficial over traditional finance options. We aim to combine the world of
            Web3 through its many utility-based products such as the Birdie Wallet,
            Birdie Token and NFTs as well as give golf enthusiasts everything they need
            to jump into the Web3 world.</p>
        </div>
      </div>

      <div className={styles.centered}>
        <button
          onClick={() => load_url('/pdf/whitepaper.pdf')}>
          Our Whitepaper
        </button>

        <img src='/graphics/birdies.png' />
      </div>
    </div>
  )
}

export default About