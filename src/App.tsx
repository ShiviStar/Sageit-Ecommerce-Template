import { TopNavigation } from './components/TopNavigation'
import './App.css'
import { Navbar } from './components/Navbar'
import { Collections } from './components/Collections'
import { BrandLogos } from './components/BrandLogos'
import { Categories } from './components/Categories'

function App() {
  return (
    <div className='main-container'>
      <TopNavigation />
      <Navbar />
      <Collections />
      <BrandLogos />
      <Categories />
    </div>
  )
}

export default App
