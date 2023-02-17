import styles from './NFT.module.scss'

const NFT = ({ image, left, title }) => {
  const open_opensea = () => window.open('https://opensea.io/collection/the-titus-collection')

  return (
    <div 
      onClick={() => open_opensea()}
      className={`${styles.nft} ${left && styles.left}`}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.info}>
        <p className={styles.name}>{title}</p>
        <p className={styles.symbol}>Shop Now</p>
      </div>
    </div>
  )
}

export default NFT