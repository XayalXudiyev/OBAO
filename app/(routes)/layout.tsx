import Footer from "./_components/footer/Footer"
import Header from "./_components/header/Header"

interface RoutesLayoutProps {
  children: React.ReactNode
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div className="bg-[#1C1C1C]">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default RoutesLayout
