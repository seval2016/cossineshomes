import Option from "@/components/about/option";
import Slider from '@/components/home/slider';
import Spacer from "@/components/common/spacer";
import React from 'react'
import PropertiesTypes from "@/components/home/properties-types";
import PropertyCities from "@/components/home/property-cities";
import ContactButtons from "@/components/about/contact-buttons";
import Register from "@/components/home/register";
import Script from 'next/script';

const Page = () => {
  return (
    <>
       <Slider/>
       <Spacer />
       <PropertiesTypes />
       <Spacer />
       <PropertyCities />
       <Spacer />
       <Register/>
       <Spacer/>
       <Option />     
       <Spacer />
       <ContactButtons />
       <Spacer />
    </>
  )
}

export default Page