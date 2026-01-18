
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'
function App() {

  return (
    <MovieProvider>
      <div>
        <Navbar/>
    <main className='maincontent'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </main>
    </div>
    </MovieProvider>
  )
}

export default App
