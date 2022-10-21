import fastify from 'fastify'
import Parser from 'rss-parser'

const server = fastify({ logger: true })
const parser = new Parser()

server.get('/', async () => {
  const feed = await parser.parseURL('https://hnrss.org/frontpage')
  return feed
})

const start = async () => {
  try {
    await server.listen({ port: 4000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

void start()
