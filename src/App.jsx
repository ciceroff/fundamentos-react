import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ciceroff.png',
      name: 'Cicero Fernandes',
      role: 'Estudante',
    },
  },
]
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
