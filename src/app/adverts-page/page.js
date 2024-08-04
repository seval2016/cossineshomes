import React from "react";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AdvertsPage from "@/components/adverst-page/adverts-page";



export const metadata = {
  title: "Adverts Page"
};

const Page = () => {
  return (
    <>
      <PageHeader title="Adverts Page" />
      <Spacer />
      <AdvertsPage/>
      <Spacer/>
    </>
  );
};

export default Page;
