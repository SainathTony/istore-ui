import './App.css'
import Routes from './ui/routes/routes'
import { AuthContext, authInitialState } from './context/auth.context'

function App() {
  return (
    <AuthContext.Provider value={authInitialState}>
      <Routes></Routes>
    </AuthContext.Provider>
  )
}

export default App
