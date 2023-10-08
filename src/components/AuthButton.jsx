import { useNavigation } from 'react-router-dom'
import '../assets/styles/login.css';

export default function AuthButton({children}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button type="submit" className="mb-6 mt-2 w-full px-7 py-3 bg-blue-600 
    text-white font-medium text-sm uppercase rounded shadow-md 
    hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    disabled={isSubmitting}
    >{isSubmitting ? (
      <>
      <span className='loading loading-spinner text-info'></span>
      Submitting...
      </>
    ) : (
      children || 'submit'
    )
  }
      </button>
  )
}
