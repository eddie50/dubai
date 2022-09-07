import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import DownBar from './components/DownBar/DownBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <DownBar/>
      </BrowserRouter>
    </div>
  )
}

export default App
