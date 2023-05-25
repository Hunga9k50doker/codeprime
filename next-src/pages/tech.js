import React from "react";
import SiteLayout from "../layouts/site-layout";
import { NextSeo } from "next-seo";
import { Box, Container } from "@mui/material";
import { TechHero } from "components/tech/tech-hero";
import { TechServices } from "components/tech/tech-services";
function Tech(props) {
  return (
    <>
      <NextSeo title="CodePrime Tech" />

      <main>
        <TechHero />
        <TechServices />
      </main>
    </>
  );
}

export default Tech;

Tech.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
