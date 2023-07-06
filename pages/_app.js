import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import { useHandleMenuStore } from '@/lib/store';


export default function App({ Component, pageProps }) {
  const sidebar = useHandleMenuStore(state => state.sidebar)
  const userMenu = useHandleMenuStore(state => state.userMenu)
  const toggleSidebar = useHandleMenuStore(state => state.toggleSidebar)
  const toggleUserMenu = useHandleMenuStore(state => state.toggleUserMenu)
  return (
    <>
      <Nav userMenu={userMenu} toggleSidebar={toggleSidebar} toggleUserMenu={toggleUserMenu} />
      <Sidebar sidebar={sidebar} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14 min-h-screen">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
