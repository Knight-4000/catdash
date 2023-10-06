import './login.css';

export default function AuthButton({children}) {
  return (
    <button type="submit" className="mb-6 mt-2 w-full px-7 py-3 bg-blue-600 
    text-white font-medium text-sm uppercase rounded shadow-md 
    hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{children}</button>
  )
}
