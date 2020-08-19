<script>
  import Icon from 'svelte-awesome'
  import { faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons'
  import { redirect } from '@sveltech/routify'
  import { formatTime, getTimeName, date, relativeDate } from '../../helpers.js'
  import PlayerName from '../playerName.svelte'

  export let leaderboard

  $: variables = leaderboard.variables.data.filter((v) => !v['is-subcategory'])
  $: primaryTime = leaderboard.timing
  $: otherTimes = leaderboard.game.data.ruleset['run-times'].filter(
    (t) => t !== primaryTime
  )

  function onRowClick(run) {
    $redirect('/run/:id', {
      id: run.run.id,
    })
  }

  function findPlayer(player) {
    if (player.id === undefined) return player
    else return leaderboard.players.data.find((p) => p.id === player.id)
  }

  function formatDate(date) {
    return `${relativeDate(date)} ago`
  }
</script>

<tbody>
  {#each leaderboard.runs as run}
    <tr on:click="{() => onRowClick(run)}">
      <td class="shrink" data-label="Rank">{run.place}</td>

      <td class="expand" data-label="Players">
        {#each run.run.players as player, i}
          <PlayerName player="{findPlayer(player)}" />
          {#if i !== run.run.players.length - 1},{/if}
        {/each}
      </td>

      <!-- Time could be 0 because of a bug in the API -->
      {#if run.run.times[`${primaryTime}_t`] !== 0}
        <td class="shrink" data-label="{getTimeName(primaryTime)}">
          {formatTime(run.run.times[`${primaryTime}_t`])}
        </td>
        {#each otherTimes as time}
          <td
            class="shrink table-cell md:hidden lg:table-cell"
            data-label="{getTimeName(time)}"
          >
            {formatTime(run.run.times[`${time}_t`])}
          </td>
        {/each}
        <!-- If time 0, we use primary_t and ignore the rest -->
      {:else}
        <td class="shrink" data-label="{getTimeName(primaryTime)}">
          {formatTime(run.run.times[`primary_t`])}
        </td>
        {#each otherTimes as time}
          <td
            class="shrink table-cell md:hidden lg:table-cell"
            data-label="{getTimeName(time)}"
          >
            <!-- Don't do anything with time -->
          </td>
        {/each}
      {/if}

      {#each variables as { id, values, name }}
        <td
          class="shrink table-cell md:hidden lg:table-cell"
          data-label="{name}"
        >
          {#if run.run.values[id]}{values.values[run.run.values[id]].label}{/if}
        </td>
      {/each}

      <td class="table-cell md:hidden xl:table-cell" data-label="Date">
        {formatDate(run.run.date)}
      </td>

      <td class="shrink hidden xl:table-cell">
        {#if run.run.videos === null}
          <Icon data="{faVideoSlash}" class="text-nord11" />
        {:else}
          <Icon data="{faVideo}" />
        {/if}
      </td>
    </tr>
  {/each}
</tbody>

<style>
  tr {
    cursor: pointer;
  }
</style>
