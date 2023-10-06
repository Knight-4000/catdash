import { Outlet } from "react-router-dom"

export default function HomeLayout() {
  return (
    <div>
      <h3 className="text-center">Navigation</h3>
      <Outlet />
      <h3 className="text-center">Footer</h3>
    </div>
  )
}
