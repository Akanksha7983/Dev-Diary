import { Button, Navbar, Textarea } from 'flowbite-react'
import {NavLink,useLocation} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import { TextInput} from 'flowbite-react';
import {FaMoon}  from 'react-icons/fa';


export default function Header() {
  const path = useLocation().pathname;
  return (
         <Navbar className='border-b-2'>
    <NavLink
      to='/'
      className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
    >
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
        Akanksha's
      </span>
      Blog
    </NavLink>
    <form >
      <TextInput 
        type='text'
        placeholder='search...'
        className='hidden lg:inline'
        rightIcon={AiOutlineSearch}
        />
    </form>

    <Button className='w-12 h-10 lg:hidden' color='gray' pill>
      <AiOutlineSearch />
    </Button>

    <div className='flex gap-2 md:order-2'>
      <Button className='w-12 h-10 hidden sm:inline px-2.5' color='gray' pill>
             <FaMoon className='w-5 h-5' />
      </Button>
      {/* <NavLink to='/sign-in'>
        <Button gradientDuoTone='purpleToBlue'>
          Sign In
        </Button>
       </NavLink> */}
       <Button  gradientDuoTone='purpleToBlue' outline={true} as={NavLink}  to="/sign-in">
                    Sign In
                </Button>
    <Navbar.Toggle />
     </div>
     <Navbar.Collapse className="md:flex md:items-center md:w-auto">
                <NavLink to="/"  active={path === "/"} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">  
                    Home
                </NavLink>
                <NavLink to="/about"  active={path === "/about"}   className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                </NavLink>
                <NavLink to="/projects"   active={path === "/"} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Projects
                </NavLink>
            </Navbar.Collapse>
    {/* <Navbar.Collapse>
        <Navbar.NavLink >
          <NavLink to='/'>
            Home
          </NavLink>
        </Navbar.NavLink>
        <Navbar.NavLink >
          <NavLink to='/about'>
            About
          </NavLink>
        </Navbar.NavLink>
        <Navbar.NavLink >
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
        </Navbar.NavLink>
        <Navbar.NavLink >
          <NavLink to='/projects'>
            Projects 
          </NavLink> 
        </Navbar.NavLink> 
      </Navbar.Collapse>  */}
    </Navbar>
    
  );
}
      