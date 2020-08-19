<script>
  import { goto, isActive } from '@sveltech/routify'

  export let scoped
  const { game } = scoped

  $: hasCategory = game && game.categories.data.length !== 0
  $: console.log({ hasCategory })

  $: if (hasCategory) {
    const category = game.categories.data[0]
    $goto(
      '/leaderboards/:game/:category',
      {
        game: game.abbreviation,
        category: category.weblink.split('#')[1].toLowerCase(),
      },
      true
    )
  }
</script>

{#if !hasCategory}
  <div>This game has no categories.</div>
{/if}
