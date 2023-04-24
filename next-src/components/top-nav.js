import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01'
import { Box, Button, Container, IconButton, Stack, SvgIcon, useMediaQuery } from '@mui/material'
import { alpha } from '@mui/material/styles'
import Logo from '../img/logo.svg'
import Link from 'next/link'
import { useWindowScroll } from '../hooks/use-window-scroll'
import { PagesPopover } from './pages-popover'
import { TopNavItem } from './top-nav-item'
import { usePathname } from 'next/navigation'

const items = [
  {
    title: 'Components',
    path: '/'
  },
  {
    title: 'Pages',
    popover: <PagesPopover />
  },
  {
    title: 'Docs',
    path: '/',
    external: true
  }
]

const TOP_NAV_HEIGHT = 64

export const TopNav = (props) => {
  const { onMobileNavOpen } = props
  const pathname = usePathname()
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [elevate, setElevate] = useState(false)
  const offset = 64
  const delay = 100

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) {
      setElevate(true)
    } else {
      setElevate(false)
    }
  }, [])

  useWindowScroll({
    handler: handleWindowScroll,
    delay
  })

  return (
    <Box
      component='header'
      sx={{
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        pt: 2,
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: 'transparent',
          borderRadius: 2.5,
          boxShadow: 'none',
          transition: (theme) => theme.transitions.create('box-shadow, background-color', {
            easing: theme.transitions.easing.easeInOut,
            duration: 200
          }),
          ...(elevate && {
            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
            boxShadow: 8
          })
        }}
      >
        <Stack
          direction='row'
          spacing={2}
          sx={{ height: TOP_NAV_HEIGHT }}
        >
          <Stack
            alignItems='center'
            direction='row'
            spacing={1}
            sx={{ flexGrow: 1 }}
          >
            <Stack
              alignItems='center'
              component={Link}
              direction='row'
              display='inline-flex'
              href='/'
              spacing={1}
              sx={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  height: 24,
                  width: 24
                }}
              >
                <Logo />
              </Box>
            </Stack>
          </Stack>
          {mdUp && (
            <Stack
              alignItems='center'
              direction='row'
              spacing={2}
            >
              <Box
                component='nav'
                sx={{ height: '100%' }}
              >
                <Stack
                  component='ul'
                  alignItems='center'
                  justifyContent='center'
                  direction='row'
                  spacing={1}
                  sx={{
                    height: '100%',
                    listStyle: 'none',
                    m: 0,
                    p: 0
                  }}
                >
                  <>
                    {items.map((item) => {
                      const checkPath = !!(item.path && pathname)
                      const partialMatch = checkPath ? pathname.includes(item.path) : false
                      const exactMatch = checkPath ? pathname === item.path : false
                      const active = item.popover ? partialMatch : exactMatch

                      return (
                        <TopNavItem
                          active={active}
                          external={item.external}
                          key={item.title}
                          path={item.path}
                          popover={item.popover}
                          title={item.title}
                        />
                      )
                    })}
                  </>
                </Stack>
              </Box>
            </Stack>
          )}
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='flex-end'
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            <Button
              component='a'
              size={mdUp ? 'medium' : 'small'}
              href='https://mui.com/store/items/devias-kit-pro'
              target='_blank'
              variant='contained'
            >
              Purchase Now
            </Button>
            {!mdUp && (
              <IconButton onClick={onMobileNavOpen}>
                <SvgIcon fontSize='small'>
                  <Menu01Icon />
                </SvgIcon>
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func
}
