import useSWR from 'swr'
import Person from '../components/Person'
import Header from '../components/Header'
import Search from '../components/Search'
import styles from '../styles.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Header text="Star Wars Characters" />
      <a href='movie'><button className={styles.linkMovie}>Star Wars Movies</button></a>
      <Search text="Search Character"/>
      <ul>
        {data.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </ul>
    </div>
  )
}
