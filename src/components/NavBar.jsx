import {NavLink, Link} from 'react-router-dom'
import { styles } from '../styles/styles';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import useAuth from '../context/AuthContext'

export default function NavBar(){
  const { isAuthenticated, logout } = useAuth();




    return (
        <header className={styles.header}>
            {/* <div className='h-18 mx-auto px-6 border-b border-b-emerald-500'> */}
            <div className={styles.headerContent}>
            <NavLink to="/"><Logo /></NavLink>
            <nav className="flex justify-around text-[#8E51F0]">
              <NavLink to="/" className="hover:text-teal-500">Home</NavLink>
              <NavLink to="/blog" className="hover:text-teal-500">Blog</NavLink>

            </nav>

            {/* <div className='flex gap-8 items-center'>
              <button>
                <SunIcon className='size-6 text-teal-500'/>
              </button>
              <button type='button' className={styles.headerBtn}>Subscribe</button>
            </div> */}


            <div className='flex justify-end'>
              {isAuthenticated ? (
                  <button type="button" className={styles.headerBtn} onClick={() => logout()}>Log Out</button>
              ) : (
                <Link to="/login"><button type="button" className={styles.headerBtn}>Login</button></Link>
              )}

            </div>
            </div>
        </header>
    )
}


function Logo() {
  return (
    <svg
      viewBox="0 0 340 36"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Build With Shannon"
      className="h-6 w-auto"
    >
      <text x="0" y="28" className="fill-teal-500 text-[28px] font-bold tracking-tight">
        Build
      </text>
      <text x="62" y="28" className="fill-gray-500 text-[28px] font-bold italic tracking-tight">
        with
      </text>
      <text x="117" y="28" className="fill-violet-500 text-[28px] font-bold tracking-tight">
        Shannon
      </text>
    </svg>
  );
}