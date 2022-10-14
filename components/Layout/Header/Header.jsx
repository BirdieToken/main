import styles from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {
  const [innerWidth, setInnerWidth] = useState(false)
  const [menu, setMenu] = useState(false)

  const go_to = (path) => window.location.hash = path
  
  const load_url = (url) => window.open(url)

  useEffect(() => {
    setInnerWidth(window.innerWidth)
    setMenu(window.innerWidth > 710 ? true : false)
  }, [])

  return (
    <div className={styles.header}>
      <div className={styles.left_container}>
        <img src={'/logo1.png'} alt={'logo'} />

        <img src={'/logo2.png'} alt={'logo'} className={styles.text_logo} />
      </div>

      <div className={styles.menu}>
        {menu &&
          <ul>
            <li onClick={() => go_to('')}>Home</li>
            <li onClick={() => go_to('about')}>About</li>
            <li onClick={() => load_url('/pdf/whitepaper.pdf')}>Whitepaper</li>
            <li onClick={() => go_to('team')}>Team</li>
            <li onClick={() => go_to('join')}>Join Us</li>
            {innerWidth < 710 && <li onClick={() => setMenu(false)}><i className='fa-solid fa-xmark'></i> Close</li>}
          </ul>}

        {innerWidth < 710 &&
          <div 
            onClick={() => setMenu(true)}
            className={styles.menu_btn}>
            <i className='fa-solid fa-bars'></i>
          </div>}
      </div>
    </div>
  )
}

export default Header