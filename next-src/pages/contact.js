import React from 'react'
import SiteLayout from '../layouts/site-layout'
import { NextSeo } from 'next-seo'
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Link,
  OutlinedInput,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material'
import { Layout as ComponentsLayout } from '../layouts/component-page'
import Card from '@mui/material/Card'
import { Form } from 'antd'
import { BRAND_NAME } from '../constants'

function Contact (props) {
  const [form] = Form.useForm()

  const handleFinish = values => {
    console.log(values)
  }

  return (
    <>
      <NextSeo
        title={`Contact Us - ${BRAND_NAME}`}
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
                title='Contact Form'
              />
              <Divider />
              <Form
                name='form-contact'
                form={form}
                onFinish={handleFinish}
                initialValues={{
                  name: ''
                }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      xs={12}
                      lg={6}
                    >
                      <Typography
                        sx={{ mb: 1 }}
                        variant='subtitle2'
                      >
                        Name
                      </Typography>
                      <Form.Item
                        name='name'
                        noStyle
                      >
                        <OutlinedInput
                          fullWidth
                          name='name'
                          required
                        />
                      </Form.Item>
                    </Grid>
                    <Grid
                      xs={12}
                      lg={6}
                    >
                      <Typography
                        sx={{ mb: 1 }}
                        variant='subtitle2'
                      >
                        Company
                      </Typography>
                      <OutlinedInput
                        fullWidth
                        name='company'
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      lg={6}
                    >
                      <Typography
                        sx={{ mb: 1 }}
                        variant='subtitle2'
                      >
                        Email
                      </Typography>
                      <OutlinedInput
                        fullWidth
                        name='email'
                        type='email'
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      lg={6}
                    >
                      <Typography
                        sx={{ mb: 1 }}
                        variant='subtitle2'
                      >
                        Phone
                      </Typography>
                      <OutlinedInput
                        fullWidth
                        name='phone'
                        required
                        type='tel'
                      />
                    </Grid>
                    <Grid xs={12}>
                      <Typography
                        sx={{ mb: 1 }}
                        variant='subtitle2'
                      >
                        Message
                      </Typography>
                      <OutlinedInput
                        fullWidth
                        name='message'
                        required
                        multiline
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: 3
                    }}
                  >
                    <Button
                      color='primary'
                      fullWidth
                      size='large'
                      variant='contained'
                    >
                      Let&apos;s Talk
                    </Button>
                  </Box>
                  <Typography
                    align='center'
                    color='text.secondary'
                    sx={{ mt: 2 }}
                    variant='body2'
                  >
                    By submitting this, you agree to the
                    {' '}
                    <Link
                      color='text.primary'
                      href='#'
                      underline='always'
                      variant='subtitle2'
                    >
                      Privacy Policy
                    </Link>
                    {' '}
                    and
                    {' '}
                    <Link
                      color='text.primary'
                      href='#'
                      underline='always'
                      variant='subtitle2'
                    >
                      Cookie Policy
                    </Link>
                    .
                  </Typography>
                </CardContent>
              </Form>
            </Card>

            <Card variant='outlined'>
              <CardHeader
                title='Email'
              />
              <Divider />
              <Box sx={{ p: 3 }}>
                <Typography
                  component='input'
                  sx={{
                    fontSize: 64,
                    border: 0,
                    outline: 'none',
                    padding: 0,
                    lineHeight: 0
                  }}
                  value='cs@codeprime.net'
                  readOnly
                  onClick={e => e.target.select()}
                />
              </Box>
            </Card>

            <Card variant='outlined'>
              <CardHeader
                title='Phone Number'
              />
              <Divider />
              <Stack direction='row' spacing={2} sx={{ p: 3 }}>
                <Typography
                  color='text.secondary'
                  sx={{
                    fontSize: '1.5rem',
                    mt: 1
                  }}
                >
                  +84
                </Typography>
                <Typography
                  component='input'
                  sx={{
                    fontSize: 64,
                    border: 0,
                    outline: 'none',
                    padding: 0,
                    lineHeight: 0
                  }}
                  value='092 885 4989'
                  readOnly
                  onClick={e => e.target.select()}
                />
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Contact

Contact.getLayout = (page) => (
  <SiteLayout>
    <ComponentsLayout
      title='Contact Us'
      subTitle='Đừng ngại gửi bất cứ câu hỏi nào cho chúng tôi thông qua các kênh bên dưới đây.'
    >
      {page}
    </ComponentsLayout>
  </SiteLayout>
)
