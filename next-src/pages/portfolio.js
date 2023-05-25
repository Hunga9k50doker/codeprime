import React from "react";
import SiteLayout from "../layouts/site-layout";
import { NextSeo } from "next-seo";
import { Box, Container } from "@mui/material";
import { PortfolioHero } from "components/portfolio/portfolio-hero";
import { PortfolioProjects } from "components/portfolio/portfolio-projects";
function Portfolio(props) {
  return (
    <>
      <NextSeo title="CodePrime" />

      <main>
        <PortfolioHero />
        <PortfolioProjects />
      </main>
    </>
  );
}

export default Portfolio;

Portfolio.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
