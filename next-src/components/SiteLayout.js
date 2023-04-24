import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import SiteFooter from './SiteFooter'
import Link from 'next/link'
import { TopNav } from './top-nav'

const ignoreHeaderURLsList = [
  'rgx:^/auth',
  'rgx:^/lien-ket'
]

const Toast = dynamic(() => import('./Toast'), { ssr: false })
const GoTop = dynamic(() => import('./GoTop'), { ssr: false })
const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%'
}))

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
      <TopNav />

      <LayoutRoot>
        {props.children}
      </LayoutRoot>

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
