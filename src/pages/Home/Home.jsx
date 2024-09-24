// import About from '../../components/About/About'
import Arrivals from '../../components/Arrivals/Arrivals'
import Header from '../../components/Header/Header'
import Popular from '../../components/Popular/Popular'
// import shoes from '../../lib/ShoesData'
// import ShoesPage from '../ShoesPage/ShoesPage'

const Home = () => {
  return (
    <div>
      <Header />
      {/* <About /> */}
      {/* <ShoesPage shoes={shoes} /> */}
      <Popular />
      <Arrivals />
    </div>
  )
}

export default Home 