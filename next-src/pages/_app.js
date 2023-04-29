import 'antd/dist/reset.css'
import '../styles/main.scss'

import React from 'react'
import Head from 'next/head'
import { useAmp } from 'next/amp'
import { BRAND_NAME, OG_TITLE, SITE_BASE_URL } from '../constants'
import { DefaultSeo } from 'next-seo'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'
import NextProgressbar from '../components/NextProgressbar'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '../theme'
import { DevSupport } from '@react-buddy/ide-toolbox-next'
import { ComponentPreviews, useInitial } from '../components/dev'
import { SettingsConsumer, SettingsProvider } from '../contexts/settings-context'
import { createEmotionCache } from '../utils/create-emotion-cache'
import { CacheProvider } from '@emotion/react'

dayjs.extend(relativeTime)
dayjs.locale('vi')
const clientSideEmotionCache = createEmotionCache()

function App (props) {
  const isAmp = useAmp()
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {!isAmp && (
          <>
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' key='viewport' />
            <meta httpEquiv='x-ua-compatible' content='ie=edge' />

            <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
            <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
            <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
            <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
            <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
            <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
            <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
            <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />
            <meta name='theme-color' content='#995611' />
            <link rel='manifest' href='/favicon/manifest.json' />
            <link rel='shortcut icon' href='/favicon/favicon.ico' type='image/x-icon' />
          </>
        )}
      </Head>

      <DefaultSeo
        title={BRAND_NAME}
        openGraph={{
          type: 'website',
          site_name: BRAND_NAME,
          title: OG_TITLE,
          url: SITE_BASE_URL,
          images: [
            {
              url: `${SITE_BASE_URL}/images/ogimg.jpg`,
              width: 1200,
              height: 630,
              alt: BRAND_NAME
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
        facebook={{
          appId: '112276442265938'
        }}
      />

      {!isAmp && (
        <NextProgressbar
          nonce='my-nonce'
          showOnShallow
          color='#019a4d77'
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          options={{
            showSpinner: false
          }}
        />
      )}

      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <ReduxProvider store={store()}>
          <SettingsProvider>
            <SettingsConsumer>
              {(settings) => {
                // Prevent theme flicker when restoring custom settings from browser storage
                if (!settings.isInitialized) {
                  // return null;
                }

                const theme = createTheme({
                  colorPreset: settings.colorPreset,
                  contrast: settings.contrast,
                  direction: settings.direction,
                  paletteMode: settings.paletteMode,
                  responsiveFontSizes: settings.responsiveFontSizes
                })

                return (
                  <ThemeProvider theme={theme}>
                    <ScopedCssBaseline>
                      <StyleProvider hashPriority='high'>
                        <ConfigProvider
                          theme={{
                            token: {
                              colorPrimary: '#3ba2d2',
                              colorSuccess: '#3fa00e'
                            }
                          }}
                          componentSize='large'
                          prefixCls='cp'
                        >
                          {getLayout(
                            <Component {...pageProps} />
                          )}
                          <GoogleAnalytics trackPageViews />
                        </ConfigProvider>
                      </StyleProvider>
                    </ScopedCssBaseline>
                  </ThemeProvider>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </ReduxProvider>
      </DevSupport>

    </CacheProvider>
  )
}

export default App
