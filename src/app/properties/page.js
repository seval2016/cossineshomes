import React from "react";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import Properties from "@/components/properties/properties";



export const metadata = {
  title: "Properties",
    description:"Learn more about our properties."
};

const Page = () => {
  return (
    <>
      <PageHeader title="Properties"/>
      <Spacer />
      <Properties/>
      <Spacer/>
    </>
  );
};

export default Page;
