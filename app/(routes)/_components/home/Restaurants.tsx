// import RestaurantComponent from "@/app/(routes)/_components/home/RestaurantComponent"
import RestaurantTopComponent from "./RestourantTop"


const RestaurantsSection = () => {
  return (
    <div
      id="restaurants"
      className="  w-full mx-auto relative flex flex-col justify-center items-center"
    >
      <h1 className="text-[#FB4444] text-4xl font-bold font-avenirMedium4 text-center mb-5 md:mb-0  md:mt-16">
        RESTAURANTS
      </h1>
      {/* {[1, 2].map((_, index) => (
        <RestaurantComponent key={index} isImageLeft={index % 2 === 0} />
      ))} */}
      <RestaurantTopComponent isLeft={true}/>
      <RestaurantTopComponent isLeft={false}/>
    </div>
  )
}

export default RestaurantsSection
