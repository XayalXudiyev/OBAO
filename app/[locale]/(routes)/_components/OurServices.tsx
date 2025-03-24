import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import React from "react"

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Restaurants",
      image: "/services/restaurant.webp",
      icon: "/services/restaurantIcon.svg",
      description:
        "We currently have two restaurants, proudly welcoming both locals and tourists with warmth and great flavors! Our first and flagship restaurant is located in Sint-Pieters-Leeuw while second, newly opened in Schuman.",
    },
    {
      id: 2,
      title: "Catering",
      image: "/services/catering.webp",
      icon: "/services/cateringIcon.svg",
      description:
        "Bring the flavors of O'BAO to your event with our external catering services! We offer a variety of sustainable, vegetarian, and vegan-friendly options, crafted with fresh, locally sourced ingredients. Whether it’s a business meeting, private party, or special celebration, our fusion cuisine will delight your guests while respecting the environment. Let us make your event unforgettable with our commitment to quality and sustainability.",
    },
    {
      id: 3,
      title: "Private Group Dining Experience",
      image: "/services/private.webp",
      icon: "/services/privateIcon.svg",
      description:
        "Looking for the perfect setting for your private group dining? We’ve partnered with Blankspace Schuman, an exceptional event venue conveniently located just around the corner from our restaurant and the EU Commission building. Whether it’s a business gathering, celebration, or special event, Blankspace Schuman provides the ideal atmosphere to pair with our delicious fusion cuisine. We invite you to explore Blankspace Schuman and create an unforgettable dining experience.",
    },
    {
      id: 4,
      title: "Workshops",
      image: "/services/workshops.webp",
      icon: "/services/workshopsIcon.svg",
      description:
        "We offer sushi rolling and mastering workshops for groups of 10 or more! Perfect for team-building events, celebrations, or simply a unique experience with friends, our workshops teach you the art of sushi making under the guidance of our skilled chefs. Join us for a hands-on culinary journey and create delicious memories together!",
    },
  ]

  return (
    <div className="py-10">
      <h1 className="text-[#FB4444] text-3xl md:text-4xl font-bold font-avenirMedium4 text-center mb-8">
        OUR SERVICES
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-[72px]">
        <div className="w-full md:w-1/2 h-[500px]">
          <Image
            src="/about-us/1.webp"
            alt="Service"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem
                key={service.id.toString()}
                value={service.id.toString()}
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="flex items-center justify-start gap-5 py-4 text-white hover:no-underline">
                  {/* İkon */}
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={24}
                    height={24}
                  />
                  <span className="text-2xl font-medium pl-1">
                    {service.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 ">
                  <p>{service.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default OurServices
