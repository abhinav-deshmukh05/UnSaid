import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, CssVarsProvider } from '@mui/joy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssVarsProvider>
      <div style={{ padding: '2rem' }}>
        <Button color="primary" variant="solid">
          Hello Joy UI
        </Button>
      </div>
    </CssVarsProvider>
    </>
  )
}

export default App
