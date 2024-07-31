import React from "react";
import PageHeader from "@/components/common/page-header";
import Option from "@/components/about/option";
import Spacer from "@/components/common/spacer";
import ContactButtons from "@/components/about/contact-buttons";

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
      <ContactButtons />
      <Spacer />
    </>
  );
};

export default Page;
