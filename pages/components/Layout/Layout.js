import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}