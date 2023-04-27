import React from 'react'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'
import { HomeFeatures } from '../components/home/home-features'
import { HomeHero } from '../components/home/home-hero'
import SiteLayout from '../layouts/site-layout'

function Index ({ jobs, ...props }) {
  return (
    <Div>
      <NextSeo
        title='CodePrime'
      />

      <main>
        <HomeHero />
        <HomeFeatures />
      </main>
    </Div>
  )
}

export default Index

Index.getLayout = (page) => (
  <SiteLayout>
    {page}
  </SiteLayout>
)

// language=SCSS prefix=*{ suffix=}
const Div = styled.div`
`
