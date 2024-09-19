import React from 'react'
import Img1 from "../assets/house1.jpeg";
import Img2 from "../assets/house2.jpeg";
import Img3 from "../assets/house3.jpeg";
import Img4 from "../assets/house4.jpeg";
import HouseCard from './HouseCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const PropertiesData = [
    {
      img: Img1,
      title: "Bob's house for a family of 4",
      location: "Colorado, US",
      description: "3 bedrooms, 3 bathrooms, 1 large kitchen",
      price: 16700,
      type: "House",
    },
    {
      img: Img2,
      title: "Countryside house",
      location: "Texas, US",
      description:
        "2 bedrooms, 2 bathrooms",
      price: 8000,
      type: "House",
    },
    {
      img: Img3,
      title: "Castle white mansion",
      location: "Longisland, UK",
      description:
        "8 bedrooms, 12 bathrooms, 2 kitchens, 2 dinings, pool",
      price: 100000,
      type: "Mainsion",
    },
    {
      img: Img4,
      title: "Cozy house in Colorado",
      location: "UK",
      description: "2 bedrooms, 2 bathrooms",
      price: 7000,
      type: "House",
    },
    {
      img: Img4,
      title: "Cozy house in Colorado",
      location: "UK",
      description: "2 bedrooms, 2 bathrooms",
      price: 7000,
      type: "House",
    },
    
  ];
const House = () => {
  return (
    <>
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Most popular properties
          </h1>
          <Carousel className="mx-20 min-w-fit">
            <CarouselContent  >
        
            {PropertiesData.map((item, index) => (
              <CarouselItem className="basis-1/4">
                 <HouseCard
                key={index}
                {...item}
              />
              </CarouselItem>
            ))}
         
              
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
        </section>
      </div>
    </>
  )
}

export default House