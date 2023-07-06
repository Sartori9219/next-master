import Link from 'next/link'
import { FaBox, FaLayerGroup, FaReceipt, FaUser } from "react-icons/fa";

export default function Sidebar({ sidebar }) {
  return (
    <>
      <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blue1 border-r border-gray-200 ${sidebar ? 'translate-x-0' : ''} sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-blue1 dark:bg-gray-800">
          <ul className="space-y-2 font-medium mt-12">
            <li>
              <Link href="/projects" className="flex items-center p-2 text-gray-200 hover:text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
                <FaLayerGroup />
                <span className="ml-3">Products</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center p-2 text-gray-200 hover:text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
                <FaBox />
                <span className="ml-3">Usage</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center p-2 text-gray-200 hover:text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
                <FaReceipt />
                <span className="ml-3">Billing</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center p-2 text-gray-200 hover:text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
                <FaUser />
                <span className="ml-3">Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}