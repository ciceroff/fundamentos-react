import { Header } from './components/Header'
import Post from './Post'
import './global.css'
function App() {
  return (
    <div>
      <Header />
      <Post author="Cicero Fernandes" content="Olá mundo" />
    </div>
  )
}

export default App
