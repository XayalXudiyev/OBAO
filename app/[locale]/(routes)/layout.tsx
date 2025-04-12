import AnimatedContent from "@/components/common/AnimatedContent"
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"

interface RoutesLayoutProps {
  children: React.ReactNode
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div className="bg-[#1C1C1C] overflow-x-hidden">
      <Header />
      <AnimatedContent>{children}</AnimatedContent>
      <Footer />
    </div>
  )
}

export default RoutesLayout
