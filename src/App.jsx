import Header from "./components/Header"
import Slider from "./components/Slider"
import ProductionHouse from "./components/ProductionHouse"
import GenreMovieList from "./components/GenreMovieList"

function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
