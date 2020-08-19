import { shareReplay } from 'rxjs/operators'

const CACHE_SIZE = 1
const DEFAULT_OPTIONS = {
  ttl: 0,
}

// https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html
function createCache() {
  const cache = new Map()

  function get(key, fetcher, options = {}) {
    const { ttl } = { ...options, ...DEFAULT_OPTIONS }
    const date = new Date()
    const source = fetcher.pipe(shareReplay(CACHE_SIZE))

    if (!cache.get(key)) {
      cache.set(key, {
        ttl,
        date,
        source,
      })
    }

    const { date: keyDate, ttl: keyTtl } = cache.get(key)

    if (keyTtl > 0 && date - keyDate > keyTtl) {
      cache.set(key, {
        ttl,
        date,
        source,
      })
    }

    return cache.get(key).source
  }

  return {
    get,
  }
}

export default createCache()
