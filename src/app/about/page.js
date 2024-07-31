import PageHeader from "@/components/common/page-header";
import Option from "@/components/about/option";
import Spacer from "@/components/common/spacer";

import React from "react";

export const metadata = {
  title: "About Us"
};

const Page = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <Spacer />
      <Option />
      <Spacer />
    </>
  );
};

export default Page;
