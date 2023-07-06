import Link from 'next/link'
import { FaUserTie, FaBell, FaSearch } from "react-icons/fa";

export default function Nav({ userMenu, toggleUserMenu, toggleSidebar }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <Link href="https://flowbite.com" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Projects</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-6">
              <div>
                <button type="button" className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span className="sr-only">Search</span>
                  <FaSearch size={20} color='#454646' />
                </button>
              </div>
            </div>
            <div className="flex items-center ml-6">
              <div>
                <button type="button" className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span className="sr-only">Alarm</span>
                  <FaBell size={20} color='#454646' />
                </button>
              </div>
            </div>
            <div className="flex items-center ml-6">
              <div className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span>|</span>
              </div>
            </div>
            <div className="flex flex-col items-center ml-6">
              <div>
                <button type="button" onClick={toggleUserMenu} className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <span className="sr-only">Open user menu</span>
                  <FaUserTie size={20} color='#454646' />
                </button>
              </div>
              <div className={`z-50 ${userMenu ? "" : "hidden"} h-0 w-4 text-base list-none divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 relative`}>
                <div className=' bg-black1 w-40 absolute right-0 top-2 rounded'>
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-white dark:text-" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-white truncate dark:text-gray-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-black2 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-black2 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-black2 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-black2 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}