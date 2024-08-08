import React from "react";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import Contact from "@/components/contact/contact";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch us! Find our address, phone number and email. ",
};

const Page = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <Spacer />
      <Contact/>
    </>
  );
};

export default Page;
