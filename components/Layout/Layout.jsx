import styles from './Layout.module.scss'
import Head from 'next/head'
import Header from './Header/Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css" rel="stylesheet" />
        <link rel='icon' type='image/png' href={'/logo.png?' + new Date().getTime()} />
        <link rel="apple-touch-icon" href={'/logo.png?' + new Date().getTime()} />
        <title>BirdieGolf LLC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <div className={styles.layout}>
        <Header />

        {children}
      </div>
    </div>
  )
}

export default Layout