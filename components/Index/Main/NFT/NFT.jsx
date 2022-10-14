import styles from './NFT.module.scss'

const NFT = ({ image, left }) => {
  const open_opensea = () => window.open('https://opensea.io/collection/the-titus-collection')

  return (
    <div 
      onClick={() => open_opensea()}
      className={`${styles.nft} ${left && styles.left}`}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.info}>
        <p className={styles.name}>The Titus Collection</p>
        <p className={styles.symbol}>TTC</p>
      </div>
    </div>
  )
}

export default NFT