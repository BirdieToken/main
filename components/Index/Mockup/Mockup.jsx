import styles from './Mockup.module.scss'
import NFT from './NFT/NFT'

const Mockup = () => {
  const open_link = (url) => window.open(url)

  return (
    <div className={styles.mockup} id='download'>
      <div className={styles.right}>
        <NFT
          image={'/store/store2.jpg'}
          title={'Hi Vis Hat/Polo Combo Set'}
          left={true} />

        <NFT
          image={'/store/store1.jpg'}
          title={'Birdie Hi-Vis Flat Bills'}
          left={false} />

        <button
          onClick={() => open_link('https://underparlifestyle.myshopify.com/')}>
          Store
        </button>
      </div>

      <div className={styles.left}>
        <p className={styles.motto}>Web3 Pro Shop</p>
        <p className={styles.text}>More on brand for golf ⛳️</p>
      </div>
    </div>
  )
}

export default Mockup