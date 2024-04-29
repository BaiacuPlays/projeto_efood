import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Header2 from './components/header2'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomeWithHeader />} />
    <Route path="/Categories" element={<Categories />} />
  </Routes>
)

const HomeWithHeader = () => (
  <>
    <Header2 />
    <Home />
  </>
)

export default Rotas
