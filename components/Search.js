import styles from '../styles.module.css'

export default function Search(props) {
  
  return (
    <form className={styles.search}>
      <div>
          <label>
            <input type="text"  placeholder= {props.text} />
          </label>
          <button type="submit">Search</button>
        </div>
      </form>
  )
}