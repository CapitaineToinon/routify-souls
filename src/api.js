import { ajax } from 'rxjs/ajax'
import { retry, pluck } from 'rxjs/operators'
import CACHE from './cache'

const BASE_URL = 'https://www.speedrun.com/api/v1'
const SERIE = 'souls'
const RETRY_COUNT = 3

/**
 * @typedef { import("rxjs").Observable } Observable
 */

/**
 * Echo speedrun.com's api
 * @param {string} path Relative path to the api
 * @returns Observable<any>
 */
function echo(path) {
  const key = `${BASE_URL}${path}`
  return CACHE.get(
    key,
    ajax.getJSON(key).pipe(pluck('data'), retry(RETRY_COUNT))
  )
}

/**
 * Return a leaderboard with embed:
 * - game
 * - category
 * - players
 * - variables
 * @param {string} game Game id or abbreviation
 * @param {string} category Category id or name
 * @param {string} filters Formatted filters with the format var-{id}={value} joined by '&'
 * @returns Promise<any>
 */
export function getLeaderboard(game, category, filters = '') {
  return echo(
    `/leaderboards/${game}/category/${category}` +
      `?embed=game,category,players,variables&${filters}`
  ).toPromise()
}

/**
 * Return games from a serie with embed:
 * - categories
 * - categories.game
 * - categories.variables
 * @returns Promise<any>
 */
export function getGames() {
  return echo(
    `/series/${SERIE}/games` +
      `?embed=categories,categories.game,categories.variables`
  ).toPromise()
}

/**
 * Return a run
 * @param {string} id Run id
 * @returns Promise<any>
 */
export function getRun(id) {
  return echo(
    `/runs/${id}` +
      `?embed=players,game,category,category.variables,category.game`
  ).toPromise()
}
