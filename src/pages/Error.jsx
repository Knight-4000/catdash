import { Link, useRouteError } from "react-router-dom"

export default function Error() {
  const error = useRouteError();
  if (error.status === 404) {
    return(
      <>
        <h1 className="text-center">That page does not exist</h1>
        <Link to='/'>Go Home</Link>
      </>
      )
    }

    
    return (
      <div>
        <h1 className="text-center">We're sorry, something went wrong</h1>
      </div>
    )
  }
