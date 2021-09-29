const fetch = require('node-fetch')

const deployToken = process.env.DEPLOY_TOKEN
const team = 'layer0-docs'
const site = 'graphql-caching-example'
const environment = 'default'
const paths = ['/*']

export default async function purge(_req, res) {
  const resp = await fetch('https://app.layer0.co/api/v1/clear-cache', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': deployToken,
    },
    body: JSON.stringify({
      team,
      site,
      environment,
      paths,
    }),
  })

  res.json({ status: resp.status })
}
