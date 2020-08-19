<script>
  import { getGames } from '../../api'
</script>

<div class="min-h-screen-navbar container">
  {#await getGames()}
    <div class="progress h-2 flex flex-row"></div>
  {:then games}
    <slot scoped="{{ games }}" />
  {/await}
</div>
