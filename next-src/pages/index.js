import React from "react";
import styled from "@emotion/styled";
import { NextSeo } from "next-seo";
import { HomeHero } from "../components/home/home-hero";
import { HomeFeatures } from "../components/home/home-features";
import { HomeReviews } from "../components/home/home-reviews";
import { HomeCta } from "components/home/home-cta";
import { HomeFaqs } from "components/home/home-faqs";
import SiteLayout from "../layouts/site-layout";
function Index({ jobs, ...props }) {
  return (
    <Div>
      <NextSeo title="CodePrime" />

      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeReviews />
        <HomeCta />
        <HomeFaqs />
      </main>
    </Div>
  );
}

export default Index;

Index.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

// language=SCSS prefix=*{ suffix=}
const Div = styled.div``;
