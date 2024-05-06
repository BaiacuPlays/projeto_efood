// Rotas.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Header from './components/header' // Importe o Header
import Header2 from './components/header2' // Importe o Header2

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomeWithHeader2 />} />
    <Route path="/categories" element={<CategoriesWithHeader />} />
  </Routes>
)

const HomeWithHeader2 = () => (
  <>
    <Header2 /> {/* Renderize o Header2 na Home */}
    <Home />
  </>
)

const CategoriesWithHeader = () => (
  <>
    <Header /> {/* Renderize o Header nas Categorias */}
    <Categories />
  </>
)

export default Rotas
