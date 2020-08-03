import Head from 'next/head'
import styles from '../styles/Home.module.css'

const pictureUrl = 'https://images.unsplash.com/photo-1580195319388-1bea55742a42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        srcSet={`
          /api/images?src=${pictureUrl}&w=1200 1200w,
          /api/images?src=${pictureUrl}&w=800 800w
          `}
        sizes="(min-width: 400px) 40vw, 100vw"
         />
    </div>
  )
}
