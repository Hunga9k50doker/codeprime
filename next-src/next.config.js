require('dotenv').config()
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true
  },
  env: {
    spaceID: process.env.spaceID,
    accessTokenDelivery: process.env.accessTokenDelivery
  },
  distDir: 'build',
  trailingSlash: true,
  assetPrefix: isProd ? 'https://cdn.vieclamuit.com' : undefined,
  images: {
    domains: ['localhost', '127.0.0.1', 'media.vieclamuit.com', 'static.vieclamuit.com']
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    },
    antd: {
      transform: 'antd/xxx/{{member}}'
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}'
    }
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return
          one.issuer.and = [path.resolve(__dirname)]
        })
      }
    })
    return config
  }
}

const plugins = [
]

module.exports = () => {
  return plugins.reduce((acc, next) => next(acc), nextConfig)
}
