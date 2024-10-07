import Arrivals from '../../components/Arrivals/Arrivals'
import Header from '../../components/Header/Header'
import Popular from '../../components/Popular/Popular'
import Footer from '../Footer/Footer'
// import Contact from '../../components/Contact/Contact'
// import shoes from '../../lib/ShoesData'
// import ShoesPage from '../ShoesPage/ShoesPage'

const Home = () => {
  return (
    <div>
      <Header />
      {/* <ShoesPage shoes={shoes} /> */}
      <Popular />
      <Arrivals />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home 