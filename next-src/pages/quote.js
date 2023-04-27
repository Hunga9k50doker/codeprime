import React from 'react'
import SiteLayout from '../layouts/site-layout'
import { NextSeo } from 'next-seo'
import { Box, CardHeader, Container, Divider, Stack } from '@mui/material'
import { Layout as ComponentsLayout } from '../layouts/component-page'
import Card from '@mui/material/Card'
import { Form1 } from '../components/quote/form-1'
import { Form2 } from '../components/quote/form-2'

function Quote (props) {
  return (
    <>
      <NextSeo
        title='CodePrime'
      />

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth='lg'>
          <Stack spacing={8}>
            <Card variant='outlined'>
              <CardHeader
                title='xxxx'
              />
              <Divider />
              <Form1 />
            </Card>

            <Card variant='outlined'>
              <CardHeader
                title='xxxx'
              />
              <Divider />
              <Form2 />
            </Card>
          </Stack>
        </Container>
      </Box>

    </>
  )
}

export default Quote

Quote.getLayout = (page) => (
  <SiteLayout>
    <ComponentsLayout
      title='Get A Quote'
      subTitle='Chúng tôi sẽ phản hồi nhanh nhất đến bạn. Hãy cho chúng tôi hiểu rõ nhu cầu của bạn là gì.'
    >
      {page}
    </ComponentsLayout>
  </SiteLayout>
)
