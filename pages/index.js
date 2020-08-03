import Head from 'next/head'
import styles from '../styles/Home.module.css'

const pictureUrl = 'https://images.unsplash.com/photo-1580195319388-1bea55742a42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        src={`/api/images?src=${pictureUrl}&w=1200`}
        srcSet={`
          /api/images?src=${pictureUrl}&w=1200 1200w,
          /api/images?src=${pictureUrl}&w=1000 1000w,
          /api/images?src=${pictureUrl}&w=800 800w,
          /api/images?src=${pictureUrl}&w=480 480w
          `}
        sizes="
          (min-width: 1000px) 1200px,
          (max-width: 1000px) and (min-width: 800px) 1000px,
          (max-width: 800px) and (min-width: 600px) 800px,
          480px
        "
         />
    </div>
  )
}
