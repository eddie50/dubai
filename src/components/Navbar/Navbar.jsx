import {Link} from 'react-router-dom';
import './Navbar.scss'
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CarRentalIcon from '@mui/icons-material/CarRental';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ChairIcon from '@mui/icons-material/Chair';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
const navItems = [
    {
        id: 1 ,
        title: 'Property for Rent',
        icon: <ApartmentIcon className='nav-icon'/>
    },
    {
        id: 2,
        title: 'Property for sale',
        icon: <LocationCityIcon className='nav-icon'/>
    },
    {
        id: 3,
        title: 'Rooms for Rent',
        icon: <MeetingRoomIcon className='nav-icon'/>
    },
    {
        id: 4,
        title: 'Motors',
        icon: <CarRentalIcon className='nav-icon'/>
    },
    {
        id: 5,
        title: 'Classifieds',
        icon: <FolderCopyIcon className='nav-icon'/>
    },
    {
        id: 6,
        title: 'Furniture & Garden',
        icon: <ChairIcon className='nav-icon'/>
    },
    {
        id:7 ,
        title: 'Mobile Phones & Tablets',
        icon: <PhoneIphoneIcon className='nav-icon'/>
    },
    {
        id: 8,
        title: 'Community',
        icon: <PeopleAltIcon className='nav-icon'/>
    },
    {
        id: 9,
        title: 'Jobs',
        icon: <SensorOccupiedIcon className='nav-icon'/>
    },
    
]

const Navbar = () => {
  return (
    <div className='navbar'>
        {navItems.map(navItem => (
            <div className='nav-item' key={navItem.id}>
                {navItem.icon}
                <p>{navItem.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Navbar