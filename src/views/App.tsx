import './App.scss'
import { FC, Suspense } from 'react'
import router from '../routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <Router>
      <Routes>
      {
        router.map(({ path, Component }, key) => {
          return <Route
            key={ key }
            path={ path }
            element={
              <Suspense fallback="加载失败">
                <Component />
              </Suspense>
            }
          />
        })
      }
      </Routes>
    </Router>
  )
}

export default App
