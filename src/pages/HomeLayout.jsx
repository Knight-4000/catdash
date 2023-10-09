import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../components"

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <h3 className="text-center">Footer</h3>
    </div>
  )
}
