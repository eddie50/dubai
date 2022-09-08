import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import DownBar from './components/DownBar/DownBar'
import PostAd from './pages/post/PostAd/PostAd'
import PostMotors from './pages/post/post_Motors/PostMotors'
import PostMotorCar from './pages/post/PostMotorCar/PostMotorCar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/post_ad' element={<PostAd/>}/>
          <Route path='/post_Motors' element={<PostMotors/>}/>
          <Route path='/post_Motors/cars' element={<PostMotorCar/>}/>
        </Routes>
        <DownBar/>
      </BrowserRouter>
    </div>
  )
}

export default App
