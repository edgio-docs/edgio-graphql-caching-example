const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const nextConfig = {
  output: 'standalone',
}

module.exports = withLayer0(
  withServiceWorker({
    layer0SourceMaps: true,
    ...nextConfig,
  })
)
