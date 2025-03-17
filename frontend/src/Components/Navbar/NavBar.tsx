import { Link } from "react-router-dom"
import { menuItems } from "../../data/menu"


function NavBar() {

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white text-black p-4 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8'>
          <Link to="/">MS Company</Link>
        </h1>

        <div className='lg:flex flex-1 justify-center'>
          <ul className='flex gap-8 text-lg'>
            {menuItems.map((item) => {
              return (<li key={item.path}>
                <Link to={item.path} className="hover:text-blue-600 transition duration-300">{item.label}</Link>
              </li>)
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar