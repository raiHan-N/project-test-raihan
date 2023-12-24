const Navbar = () => {
  return (
    // <nav className='w-full px-20 py-4 flex justify-between bg-primary items-center text-white sticky'>
    //   <h1 className='text-2xl font-bold flex-1'>Suitmedia</h1>
    //   <menu className='flex flex-[.5] text-sm justify-between'>
    //     <a href="" className='menu_effect'>Work</a>
    //     <a href="" className='menu_effect'>About</a>
    //     <a href="" className='menu_effect'>Services</a>
    //     <a href="" className='menu_effect'>Ideas</a>
    //     <a href="" className='menu_effect'>Careers</a>
    //     <a href="" className='menu_effect'>Contact</a>
    //   </menu>
    // </nav>



<nav className=" bg-primary items-center text-white fixed w-full z-20 top-0 start-0">
  <div className="flex flex-wrap items-center justify-between px-20 py-4 ">
  <a href="https://suitmedia.com/" className="flex items-center space-x-3">
      <span className="self-center text-2xl font-semibold whitespace-nowrap">Suitmedia</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 lg:hidden">
      <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:text-primary focus:text-primary md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 md:flex-row md:mt-0 md:border-0 text-sm">
      <li>
        <a href="#" className=" menu_effect">Work</a>
      </li>
      <li>
        <a href="#" className=" menu_effect">About</a>
      </li>
      <li>
        <a href="#" className=" menu_effect">Services</a>
      </li>
      <li>
        <a href="#" className=" menu_effect">Ideas</a>
      </li>
      <li>
        <a href="#" className=" menu_effect">Careers</a>
      </li>
      <li>
        <a href="#" className=" menu_effect">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}
export default Navbar;
