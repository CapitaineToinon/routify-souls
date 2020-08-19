<script>
  import tooltip from './tooltip.svelte'

  export let player
  $: name = player.id ? player.names.international : player.name
</script>

{#if player.location}
  <span class="player">
    <tooltip text="{player.location.country.names.international}">
      <span
        class="flag-icon flag-icon-{player.location.country.code.split('/')[0]}
        mr-1"
      ></span>
    </tooltip>
    {name}
  </span>
{:else}{name}{/if}
