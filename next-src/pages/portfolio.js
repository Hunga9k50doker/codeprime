import React from 'react'
import SiteLayout from '../components/SiteLayout'
import { NextSeo } from 'next-seo'
import { Box, Container } from '@mui/material'

function Portfolio (props) {
  return (
    <>
      <NextSeo
        title='CodePrime'
      />

      <Box
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundImage: 'url("/assets/gradient-bg.svg")',
          pt: '120px'
        }}
      >
        <Container maxWidth='lg'>
          xxx
        </Container>
      </Box>
    </>
  )
}

export default Portfolio

Portfolio.getLayout = (page) => (
  <SiteLayout>
    {page}
  </SiteLayout>
)