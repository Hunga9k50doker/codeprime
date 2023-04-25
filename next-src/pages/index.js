import React from 'react'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'
import { HomeFeatures } from '../components/home/home-features'
import { HomeHero } from '../components/home/home-hero'
import SiteLayout from '../components/SiteLayout'

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

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam, beatae blanditiis consequuntur
        dolore dolorum earum enim fuga magnam minima nemo, nostrum odio, odit quis reiciendis repellat suscipit ut veritatis.
      </p>
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
