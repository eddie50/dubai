import './Home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import CardSlider from '../../components/CardSlider/CardSlider'

const Home = () => {
  return (
    <div className="homepage">
        <div className="container">
            <h1>Dub<span>i</span>zzle</h1>
            <Navbar/>
            <CardSlider title='Popular in Residental for Rent'/>
            <CardSlider title='Popular in Used Cars for Sale'/>
        </div>
    </div>
  )
}

export default Home