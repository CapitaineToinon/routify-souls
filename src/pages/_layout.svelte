<script>
  import { goto } from '@sveltech/routify'
  import NavBar from '../components/navbar.svelte'
  import Footer from '../components/footer.svelte'

  $goto('/leaderboards/darksouls/any')
</script>

<NavBar />
<main class="has-fixed-navbar flex-grow z-0 bg-nord4 dark:bg-nord0">
  <slot />
</main>
<Footer />
