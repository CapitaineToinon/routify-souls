<script>
  import { Router, basepath } from '@sveltech/routify'
  import { routes } from '@sveltech/routify/tmp/routes'
</script>

<!-- src/App.svelte -->
<Router {routes} />

<style lang="scss" global>
  @import './scss/main.scss';
</style>
