<script>
  import { onMount } from 'svelte'
  import { params } from '@sveltech/routify'
  import Leaderboard from '../../../components/leaderboard'
  import Alert from '../../../components/alert.svelte'

  export let scoped
  export let category
  const { games } = scoped
  let game = $params.game

  function findCategory(game, category) {
    const fullGame = games.find((g) => g.abbreviation === game)

    if (!fullGame) {
      return
    }

    const fullCategory = fullGame.categories.data.find(
      (c) => c.weblink.split('#')[1].toLowerCase() === category
    )

    if (!fullCategory) {
      return
    }

    return fullCategory
  }

  $: category = findCategory(game, category)
</script>

{#if category}
  <Leaderboard {category} />
{:else}
  <Alert type="danger">Category not found</Alert>
{/if}
