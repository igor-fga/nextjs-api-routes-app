import Header from '../components/Header'
import Search from '../components/Search'
import styles from '../styles.module.css'

export default function Movie() {

  return (
    <div>
      <Header text="Star Wars Movies" />
      <a href='/'><button className={styles.linkMovie}>Star Wars Characters</button></a>
      <Search text="Search Movie"/>
      <span className={styles.span}>EM CONSTRUÇÃO</span>
    </div>
  )
}