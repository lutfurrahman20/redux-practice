import Logo from "../../../public/logo.jpg"
const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <img src={Logo} className="w-24 h-auto" /><span className="font-bold ml-2 ">Task</span>Master
      </div>
    </nav>
  );
};

export default Navbar;
