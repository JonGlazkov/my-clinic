import './index.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="my-clinic-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | xon.clinic" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
