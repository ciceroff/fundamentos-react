import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import Post from './Post'
import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Cicero Fernandes" content="Olá mundo" />
          <Post author="Gabriel Marques" content="Olá mundo" />
        </main>
      </div>
    </div>
  )
}

export default App
