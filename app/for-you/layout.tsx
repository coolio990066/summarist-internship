import ReduxProvider from '../../components/ReduxProvider'
import SearchBar from '../../components/SearchBar'
import Sidebar from '../../components/Sidebar'

export default function ForYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
      <div className="for-you-layout">
        <div className=''>
          <SearchBar />
        </div>
        <div>
          <Sidebar />
        </div>
        {children}
      </div>
    </ReduxProvider>
  )
}
