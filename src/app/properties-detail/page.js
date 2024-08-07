import React from "react";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import PropertiesDetail from "@/components/properties-detail/properties-detail";



export const metadata = {
  title: "Properties",
    description:"Learn more about our school,mission,and values."
};

const Page = () => {
  return (
    <>
      <PageHeader title="Properties"/>
      <Spacer />
      <PropertiesDetail/>
      <Spacer/>
    </>
  );
};

export default Page;
