<script>
  import NavBar from '../components/navbar.svelte'
  import Footer from '../components/footer.svelte'
</script>

<NavBar />
<main class="has-fixed-navbar flex-grow z-0 bg-nord4 dark:bg-nord0">
  <slot />
</main>
<Footer />
