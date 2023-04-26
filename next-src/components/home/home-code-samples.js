import { useCallback, useMemo, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { codeStyle } from '../../utils/code-style'

const samples = [
  {
    lang: 'python',
    label: '.py',
    icon: '/assets/logos/logo-python.svg',
    code: `
from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField
import uuid

class User(AbstractUser):
    country = CountryField()


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.PositiveIntegerField()
    is_digital = models.BooleanField(default=False)


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    ordered_by = models.ForeignKey(User, on_delete=models.CASCADE)
    ordered_on = models.DateField(auto_now_add=True)
`
  },
  {
    lang: 'js',
    label: '.js',
    icon: '/assets/logos/logo-javascript.svg',
    code: `
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'

export default function Page() {
  return (
    /** Your content */
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
`
  }
]

export const HomeCodeSamples = () => {
  const [currentLang, setCurrentLang] = useState(samples[0].lang)

  const handleLangChange = useCallback((event, value) => {
    setCurrentLang(value)
  }, [])

  const code = useMemo(() => {
    return samples.find((sample) => sample.lang === currentLang)?.code.trim() || ''
  }, [currentLang])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        spacing={2}
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.95),
          borderBottomColor: 'neutral.700',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderTopLeftRadius: (theme) => theme.shape.borderRadius,
          borderTopRightRadius: (theme) => theme.shape.borderRadius,
          boxShadow: 24,
          flex: '0 0 auto',
          overflow: 'hidden',
          px: 2
        }}
      >
        <Stack
          alignItems='center'
          direction='row'
          spacing={1}
          sx={{
            py: 2,
            '& > div': {
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              borderRadius: '50%',
              height: 10,
              width: 10
            }
          }}
        >
          <div />
          <div />
          <div />
        </Stack>
        <Tabs
          onChange={handleLangChange}
          value={currentLang}
        >
          {samples.map((sample) => (
            <Tab
              key={sample.lang}
              label={
                <Stack
                  alignItems='center'
                  direction='row'
                  spacing={1}
                >
                  <Box
                    sx={{
                      borderRadius: '4px',
                      flex: '0 0 auto',
                      height: 20,
                      overflow: 'hidden',
                      width: 20,
                      '& img': {
                        width: '100%'
                      }
                    }}
                  >
                    <img src={sample.icon} />
                  </Box>
                  <Typography
                    sx={{ color: 'neutral.300' }}
                    variant='body2'
                  >
                    {sample.label}
                  </Typography>
                </Stack>
              }
              value={sample.lang}
            />
          ))}
        </Tabs>
      </Stack>
      <Box
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.9),
          borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
          borderBottomRightRadius: (theme) => theme.shape.borderRadius,
          flex: '1 1 auto',
          overflow: 'hidden',
          p: 2,
          '& pre': {
            background: 'none !important',
            borderRadius: '0 !important',
            fontSize: '12px !important',
            height: '100%',
            m: '0 !important',
            overflow: 'hidden !important',
            p: '0 !important'
          },
          '& code': {
            fontSize: '12px !important'
          }
        }}
      >
        <SyntaxHighlighter
          children={code}
          language={currentLang}
          style={codeStyle}
        />
      </Box>
    </Box>
  )
}
