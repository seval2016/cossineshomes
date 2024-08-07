import React from "react";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import PropertiesDetail from "@/components/properties-detail/properties-detail";



export const metadata = {
  title: "Properties"
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