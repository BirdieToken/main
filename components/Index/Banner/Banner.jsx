import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
     <img src={'/logos/metamask.png'} />
     <img src={'/logos/moralis.png'} />
     <img src={'/logos/coingecko.png'} />
     <img src={'/logos/1inch.png'} />
    </div>
  )
}

export default Banner