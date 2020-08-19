<script>
  import { getLeaderboard } from '../../api'
  import TableHead from './_header.svelte'
  import TableBody from './_body.svelte'

  export let category

  $: query = category.variables.data
    .filter((v) => v['is-subcategory'])
    .reduce(function sort(previous, current) {
      return `${previous}&var-${current.id}=${current.values.default}`
    }, '')
  $: promise = getLeaderboard(category.game.data.id, category.id, query)
</script>

{#await promise}
  <div class="progress h-2 flex flex-row"></div>
{:then leaderboard}

  <!-- {#each category.variables.data as { name, id, values, ...sub }, i}
    {#if sub['is-subcategory']}
      <select
        {name}
        {id}
        bind:value="{category.variables.data[i].values.default}"
      >
        {#each Object.keys(values.values) as value}
          <option {value}>{values.values[value].label}</option>
        {/each}
      </select>
    {/if}
  {/each} -->

  <div class="responsive-table mb-4">
    <table class="text-center">
      <!-- <TableHead {leaderboard} /> -->
      <TableBody {leaderboard} />
    </table>
  </div>
{:catch error}
  {error}
{/await}
