import React from 'react'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'
import NoSSR from '../components/NoSSR'
import { HomeFeatures } from '../components/home/home-features'
import { HomeHero } from '../components/home/home-hero'

function Index ({ jobs, ...props }) {
  return (
    <Div>
      <NextSeo
        title='CodePrime'
      />

      <main>
        <HomeHero />
        {/*<HomeFeatures />*/}
      </main>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam, beatae blanditiis consequuntur
        dolore dolorum earum enim fuga magnam minima nemo, nostrum odio, odit quis reiciendis repellat suscipit ut veritatis.
      </p>
    </Div>
  )
}

export default NoSSR(Index)

// language=SCSS prefix=*{ suffix=}
const Div = styled.div`
`
