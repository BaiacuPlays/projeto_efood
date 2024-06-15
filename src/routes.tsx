import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Header from './components/header'
import Header2 from './components/header2'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomeWithHeader2 />} />
    <Route path="/categories/:id" element={<CategoriesWithHeader />} />
  </Routes>
)

const HomeWithHeader2 = () => (
  <>
    <Header2 />
    <Home />
  </>
)

const CategoriesWithHeader = () => (
  <>
    <Header />
    <Categories />
  </>
)

export default Rotas
