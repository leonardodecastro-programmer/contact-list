import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { MainContainer, Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Register from './pages/Register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: `/edit/:id`,
    element: <Edit />
  },
  {
    path: `/register`,
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <MainContainer>
          <RouterProvider router={routes} />
        </MainContainer>
      </Container>
    </Provider>
  )
}

export default App
