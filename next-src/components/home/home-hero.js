import EyeIcon from '@untitled-ui/icons-react/build/esm/CurrencyDollar'
import { Box, Button, Container, Rating, Stack, SvgIcon, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { HomeCodeSamples } from './home-code-samples'
import Link from 'next/link'
import NinjaHome from '../../img/ninja-01.svg'

export const HomeHero = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px'
      }}
    >
      <Container maxWidth='lg'>
        <Stack
          direction='row'
          spacing={2}
        >
          <Box maxWidth='sm'>
            <Typography
              variant='h1'
              sx={{ mb: 2 }}
            >
              Unlock your business with{' '}
              <Typography
                component='span'
                color='primary.main'
                variant='inherit'
              >
                Cutting-Edge Web Dev
              </Typography>
              . Your trusted IT partner.
            </Typography>
            <Typography
              color='text.secondary'
              sx={{
                fontSize: 20,
                fontWeight: 500
              }}
            >
              At our software development firm, we pride ourselves on staying at the forefront of emerging technologies
              and consistently improving the quality of our products. Our team of skilled engineers is
              dedicated to helping you achieve success with your development project.
            </Typography>
            <Stack
              alignItems='center'
              direction='row'
              flexWrap='wrap'
              spacing={1}
              sx={{ my: 3 }}
            >
              <Rating
                readOnly
                value={4.8}
                precision={0.1}
                max={5}
                size='large'
              />
              <Typography
                color='text.primary'
                variant='caption'
                sx={{ fontWeight: 700 }}
              >
                4.8/5
              </Typography>
              <Typography
                color='text.secondary'
                variant='caption'
              >
                based on (20+ reviews)
              </Typography>
            </Stack>
            <Stack
              alignItems='center'
              direction='row'
              spacing={2}
            >
              <Button
                component={Link}
                href='/quote/'
                startIcon={(
                  <SvgIcon fontSize='small'>
                    <EyeIcon />
                  </SvgIcon>
              )}
                sx={(theme) => theme.palette.mode === 'dark'
                  ? {
                      backgroundColor: 'neutral.50',
                      color: 'neutral.900',
                      '&:hover': {
                        backgroundColor: 'neutral.200'
                      }
                    }
                  : {
                      backgroundColor: 'neutral.900',
                      color: 'neutral.50',
                      '&:hover': {
                        backgroundColor: 'neutral.700'
                      }
                    }}
                variant='contained'
              >
                Get a Quote Now
              </Button>
              <Button
                color='inherit'
                component={Link}
                href='/contact/'
              >
                Contact Us
              </Button>
            </Stack>
          </Box>

          <Box justifyContent='center' display='flex' width='100%'>
            <NinjaHome width='500' height='490' />
          </Box>
        </Stack>

        <Box
          sx={{
            pt: '120px',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: '90%',
              fontSize: 0,
              mt: -2,
              mx: -2,
              pt: 2,
              px: 2,
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%'
              }
            }}
          >
            <img
              alt=''
              src={theme.palette.mode === 'dark'
                ? '/assets/home-thumbnail-dark.png'
                : '/assets/home-thumbnail-light.png'}
            />
          </Box>
          <Box
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              overflow: 'hidden',
              position: 'absolute',
              right: 0,
              top: 40,
              '& > div': {
                height: 460,
                width: 560
              }
            }}
          >
            <HomeCodeSamples />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
