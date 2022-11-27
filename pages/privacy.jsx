import styles from '../components/Privacy/Privacy.module.scss'

const privacy = () => {
  return (
    <div className={styles.privacy}>
      <div className={styles.section}>
        <p className={styles.header}>Who we are</p>
        <p className={styles.text}>Birdie Golf LLC, is a web3 project residing on the Ethereum blockchain.</p>
      </div>

      <div className={styles.section}>
        <p className={styles.header}>Media</p>
        <p className={styles.text}>Visitors to the website are not allowed to download
          and extract any location data from images and/or other material found on the website.</p>
      </div>

      <div className={styles.section}>
        <p className={styles.header}>Cookies</p>
        <p className={styles.text}>Strictly necessary cookies are classified as cookies. functions of the website. They are essential to be able
          to access features of the website.More information
          about cookies can be found
          at <a href='https://en.wikipedia.org/wiki/HTTP_cookie' target={'_blank'}>https://en.wikipedia.org/wiki/HTTP_cookie</a>.</p>
      </div>

      <div className={styles.section}>
        <p className={styles.header}>Who we share your data with</p>
        <p className={styles.text}>No cookies, or any other personal information, are
          stored / required for accessing our website.</p>
      </div>

      <div className={styles.section}>
        <p className={styles.header}>Birdie Wallet App</p>
        <p className={styles.text}>The Birdie Wallet application uses the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' target={'_blank'}>localStorage</a> API to store
          user wallets for later access by the app itself. The app also uses the public key of the selected wallet to 
          access the <a href='https://onramper.com/' target={'_blank'}>Onramper</a> platform.</p>
      </div>
    </div>
  )
}

export default privacy