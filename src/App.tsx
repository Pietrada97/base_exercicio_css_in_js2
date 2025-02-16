import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyles } from './styles/GlobalStyles'
import { Container } from './components/Container/styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
