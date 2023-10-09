import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className='flex gap-x-2 sm:gap-x-8 items-center'>
          <p className='text-xs sm:text-sm'>Hello, George</p>
          <Link to='/login' className="link link-hover text-xs sm:text-sm">
            Sign In
          </Link>
          <Link to='/register' className="link link-hover text-xs sm:text-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
