import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Logo from '../img/logo.svg'
import classnames from 'classnames'
import SiteFooter from './SiteFooter'
import Link from 'next/link'
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const ignoreHeaderURLsList = [
  'rgx:^/auth',
  'rgx:^/lien-ket'
]

const Toast = dynamic(() => import('./Toast'), { ssr: false })
const GoTop = dynamic(() => import('./GoTop'), { ssr: false })

function SiteLayout (props) {
  const router = useRouter()
  for (const i of ignoreHeaderURLsList) {
    if (i.startsWith('rgx')) {
      const rgxStr = i.split(':')[1]
      if (router.pathname.match(new RegExp(rgxStr))) {
        return <>{props.children}</>
      }
    } else if (i === router.pathname) return <>{props.children}</>
  }

  return (
    <>
      <AppBar position='static' elevation={2} color='inherit' sx={{ bgcolor: 'white' }}>
        <Container maxWidth='xl'>
          <Toolbar tw='h-16'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Link
              href='/'
              title='Homepage'
              tw='h-full flex items-center justify-center px-2 hover:bg-primary-400/20 active:bg-primary-400/40'
            >
              <Logo height={20} width={135} tw='text-primary-500' />
            </Link>

            <Box sx={{ flexGrow: 1 }}>
              xxxdasdasdsa
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div className='container px-4 mx-auto py-8'>
        <div className='flex items-center'>

          <nav className='ml-4 hidden lg:block'>
            <TopNavButton href='/'>
              Home
            </TopNavButton>
          </nav>

        </div>
      </div>

      {props.children}

      <SiteFooter />

      <GoTop />
      <Toast />
    </>
  )
}

export default SiteLayout

const TopNavButton = ({ href, children, ...otherProps }) => {
  const router = useRouter()
  return (
    <MenuButton
      href={href}
      color='inherit'
      className={classnames({ active: href.replace(/\//g, '') === router.pathname.split('/')[1] })}
      {...otherProps}
    >
      {children}
    </MenuButton>
  )
}

// language=SCSS prefix=*{ suffix=}
const MenuButton = styled(Link)`
  ${tw`
    px-4
    py-2
    inline-flex
    rounded
    hover:underline
    active:outline-dashed
    active:outline-primary-600
  `}
  
  &.active {
    ${tw`
      underline
      text-primary-800
    `}
  }
`
