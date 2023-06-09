import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Footer } from '../components/footer'
import { TopNav } from '../components/top-nav'

const ignoreHeaderURLsList = [
  'rgx:^/auth',
  'rgx:^/lien-ket'
]

const Toast = dynamic(() => import('../components/Toast'), { ssr: false })
const GoTop = dynamic(() => import('../components/GoTop'), { ssr: false })
const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  minHeight: '100vh',
  overflowX: 'hidden',
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

      <Footer />

      <GoTop />
      <Toast />
    </>
  )
}

export default SiteLayout
