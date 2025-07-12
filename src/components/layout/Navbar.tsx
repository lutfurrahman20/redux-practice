import { Link } from "react-router";
import Logo from "../../assets/logo.jpg"
import { ModeToggle } from "../mode-toggler";
const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <img src={Logo} className="w-24 h-auto" /><span className="font-bold ml-2 ">Task</span>Master
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
