import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CommentIcon from '@mui/icons-material/Comment';
import Person2Icon from '@mui/icons-material/Person2';
import './DownBar.scss'

const DownBar = () => {
  return (
    <div className="DownBar">
        <div className="downItem">
            <HomeIcon className='downIcon' />
            <p>Home</p>
        </div>
        <div className="downItem">
            <SearchIcon className='downIcon' />
            <p>Search</p>
        </div>
        <div className="downItem middle">
            <AddCircleIcon className='downIcon' />
            <p>Post an Ad</p>
        </div>
        <div className="downItem">
            <CommentIcon className='downIcon' />
            <p>Messages</p>
        </div>
        <div className="downItem">
            <Person2Icon className='downIcon' />
            <p>Profile</p>
        </div>
    </div>
  )
}

export default DownBar