import Counter from './components/Counter'
import { CountProvider } from './CountContext'

function App() {
  return (
    <CountProvider>
      <main className="App">
        <Counter />
      </main>
    </CountProvider>
  )
}

export default App
