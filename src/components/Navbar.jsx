import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';

const themes = { 
    synthwave: 'synthwave',
    aqua: 'aqua',
};

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.winter;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  };

export default function Navbar() {
    const [theme, setTheme] = useState(getThemeFromLocalStorage);

    const handleTheme = () => {
        const { aqua, synthwave} = themes;
        const newTheme = theme === aqua ? synthwave : aqua;
        setTheme(newTheme);
    }

    useEffect(() =>{
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const isDarkTheme = theme === 'synthwave';


  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
            <NavLink to='/' className='hidden lg:flex btn btn-primary text-lg items-center'>Cat Dash</NavLink>
            <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <label className="btn btn-circle swap swap-rotate">
                    <input type="checkbox" />
                    <AiOutlineCloseCircle className='swap-on h-8 w-8' />
                    <GiHamburgerMenu className='swap-off h-8 w-8' />
                </label>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal'>
                   <NavLinks />
                </ul>
            </div>
            <div className='navbar-end'>
                <label className='swap swap-rotate'>
                    <input type='checkbox' onChange={handleTheme} defaultChecked={isDarkTheme}/>
                        <BsSunFill className='swap-on h-4 w-4' />
                        <BsMoonFill className='swap-off h-4 w-4' />                  
                </label>
                <NavLink to ='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                    <div className='indicator'>
                        <BsCart3 className='h-6 w-6' />
                        <span className='badge badge-sm badge-primary indicator-item'>
                            2
                        </span>
                    </div>
                
                </NavLink>
            </div>
        
      </div>
    </nav>
  )
}
