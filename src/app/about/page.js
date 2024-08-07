import React from "react";
import PageHeader from "@/components/common/page-header";
import Option from "@/components/about/option";
import Spacer from "@/components/common/spacer";
import ContactButtons from "@/components/about/contact-buttons";
import Mission from "@/components/about/mission";

export const metadata = {
  title: "About Us",
  description:"Learn more about our school,mission,and values."
};

const Page = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <Spacer />
      <Mission/>
      <Spacer/>
      <Option />
      <Spacer />
      <ContactButtons />
      <Spacer />
  
 
    </>
  );
};

export default Page;
