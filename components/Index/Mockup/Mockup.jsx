import styles from './Mockup.module.scss'

const Mockup = () => {
  const open_link = (url) => window.open(url)

  return (
    <div className={styles.mockup} id='download'>
      <div className={styles.left_container}>
        <img 
          src={'/graphics/download.png'}
          className={styles.text} />
        <p className={styles.description}>Install Birdie Wallet and get instant access to all of our dApps in an instant!</p>

        <div className={styles.btns}>
          <img
            src={'/graphics/apple.png'}
            onClick={() => open_link('https://apps.apple.com/us/app/birdie-wallet/id1612981639')} />

          <img
            src={'/graphics/google.png'}
            onClick={() => open_link('https://play.google.com/store/apps/details?id=com.birdiewallet.birdie&hl=en&gl=US')} />
        </div>
      </div>

      <div className={styles.bg}>
        <img src={'/graphics/mockup.png'} />
      </div>
    </div>
  )
}

export default Mockup