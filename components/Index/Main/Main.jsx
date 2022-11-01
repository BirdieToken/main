import styles from './Main.module.scss'
import NFT from './NFT/NFT'

const Main = () => {
  const go_to = (path) => window.location.hash = path
  const load_url = (url) => window.open(url)

  return (
    <div className={styles.main} id='main'>
      <img src={'/logo1.png'} className={styles.bg} />

      <div className={styles.left}>
        <img
          src={'/graphics/motto.png'}
          className={styles.motto} />
        <p className={styles.text}>Birdie Golf LLC. is a Web3 solutions company aiming to reduce the complexity of blockchain technology.  With products like the Birdie Wallet and Titus NFT, this will give our holders instant access into both the world of golf and decentralized finance!</p>


        <div className={styles.buttons}>
          <button
            onClick={() => go_to('about')}>
            Let's Explore
          </button>

          <button
            className={styles.wallet_btn}
            onClick={() => go_to('download')}>
            {/* <i className='fa-solid fa-mobile-screen-button'></i> */}
            Birdie Wallet
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <NFT
          image={'/nfts/nft.png'}
          left={true} />

        <NFT
          image={'/nfts/nft1.png'}
          left={false} />

        <button
          onClick={() => load_url('https://opensea.io/collection/the-titus-collection')}>
          Let's Explore
        </button>
      </div>
    </div>
  )
}

export default Main