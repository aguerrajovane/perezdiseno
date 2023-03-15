import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}