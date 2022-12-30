import { Link } from "react-router-dom"
export const Navbar = () => {
  return (<>
    <div class="sidenav">
    <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</div>

</>
  )
}
