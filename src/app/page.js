import Option from "@/components/about/option";
import Slider from '@/components/home/slider';
import Spacer from "@/components/common/spacer";
import React from 'react'
import PropertiesTypes from "@/components/home/properties-types";
import PropertyCities from "@/components/home/property-cities";
import ContactButtons from "@/components/about/contact-buttons";
import Register from "@/components/home/register";

const Page = () => {
  return (
    <>
       <Slider/>
       <Spacer />
       <PropertiesTypes />
       <Spacer />
       <PropertyCities />
       <Spacer />
       <Option />     
       <Spacer />
       <ContactButtons />
       <Spacer />
       <Register/>
       <Spacer/>
    </>
  )
}

export default Page