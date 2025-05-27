import Page from './app/dashboard/page'
import { ThemeProvider } from "@/components/providers/theme-provider"

import './App.css'

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page/>
    </ThemeProvider>
    </>
  )
}

export default App
