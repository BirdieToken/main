import styles from '../components/Index/Index.module.scss'
import Banner from '../components/Index/Banner/Banner'
import Main from '../components/Index/Main/Main'
import Mockup from '../components/Index/Mockup/Mockup'
import Footer from '../components/Index/Footer/Footer'
import Team from '../components/Index/Team/Team'

export default function Home() {
  return (
    <div className={styles.index}>
      <Main />

      <Banner />

      <Mockup />

      <Team />

      <Footer />
    </div>
  )
}
