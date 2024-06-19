import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Header from './components/header'
import Header2 from './components/header2'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomeWithHeader2 />} />
    <Route path="/cardapio/:id" element={<CardapiosWithHeader />} />
  </Routes>
)

const HomeWithHeader2 = () => (
  <>
    <Header2 />
    <Home />
  </>
)

const CardapiosWithHeader = () => (
  <>
    <Header />
    <Cardapio />
  </>
)

export default Rotas
