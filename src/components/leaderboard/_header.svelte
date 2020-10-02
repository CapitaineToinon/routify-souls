<script>
  import { getTimeName } from '../../helpers.js'
  export let leaderboard
  $: console.log({ leaderboard })

  $: variables = leaderboard.variables.data.filter((v) => !v['is-subcategory'])
  $: primaryTime = leaderboard.timing
  $: otherTimes = leaderboard.game.data.ruleset['run-times'].filter(
    (t) => t !== primaryTime
  )
</script>

<thead>
  <tr>
    <th class="shrink">Rank</th>
    <th class="expand">Players</th>
    <th class="shrink">
      <span class="block md:hidden lg:block">{getTimeName(primaryTime)}</span>
      <span class="hidden md:block lg:hidden">Time</span>
    </th>
    {#each otherTimes as time}
      <th class="shrink table-cell md:hidden lg:table-cell">
        {getTimeName(time)}
      </th>
    {/each}
    {#each variables as variable}
      <th class="shrink table-cell md:hidden lg:table-cell">{variable.name}</th>
    {/each}
    <th class="shrink table-cell md:hidden xl:table-cell">Date</th>
    <th class="shrink hidden xl:table-cell"></th>
  </tr>
</thead>
