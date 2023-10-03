import { Outlet } from 'react-router-dom'
import Footer from 'Layout/Footer'
import Header from 'Layout/Header'
import ScrollTop from 'components/ScrollTop'

export default function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <ScrollTop />
        <Footer />
    </>
  )
}