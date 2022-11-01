import styles from '../components/Index/Index.module.scss'
import Banner from '../components/Index/Banner/Banner'
import Main from '../components/Index/Main/Main'
import Mockup from '../components/Index/Mockup/Mockup'
import Team from '../components/Index/Team/Team'
import About from '../components/Index/About/About'
import Roadmap from '../components/Index/Roadmap/Roadmap'

export default function Home() {
  return (
    <div className={styles.index}>
      <Main />

      <Banner />

      <About />

      <Roadmap />

      <Mockup />

      <Team />
    </div>
  )
}
