import { Outlet } from "react-router-dom"
import { Header } from "../components"

export default function HomeLayout() {
  return (
    <div>
      <Header />
          <Outlet />
       
      <h3 className="text-center">Footer</h3>
    </div>
  )
}
