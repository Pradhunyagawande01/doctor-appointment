import {useEffect, useRef} from 'react'
import logo from '../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';

const navlinks = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/doctors",
    display:"Find a Doctor"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/contact",
    display:"Contact"
  }
]

const Header = () => {
  return (
  <Header className="header flex items-center">
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div>
            <img src={ logo } />
          </div>
          <div className='navigation'>
            <ul className='menu flex items-centergap-[2.7rem]'>


            </ul>
          </div>
        </div>
      </div>


  </Header>
  )
}

export default Header
