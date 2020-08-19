<script>
  import { getRun } from '../../api'
  import Video from '../../components/video.svelte'
  import Alert from '../../components/alert.svelte'
  export let id

  $: promise = getRun(id)
</script>

{#await promise}
  Loading...
{:then run}
  <!-- {#if run.videos && run.videos.links.length > 0} -->
  {#each run.videos?.links || [] as { uri }}
    <Video {uri} />
  {:else}
    <Alert>There are no videos.</Alert>
  {/each}
{:catch error}
  <Alert>{error}</Alert>
{/await}
