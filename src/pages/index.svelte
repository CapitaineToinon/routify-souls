<script>
  const { VUE_APP_WIKI, VUE_APP_DISCORD } = process.env

  import Icon from 'svelte-awesome'
  import {
    faAngleDoubleRight,
    faList,
    faHourglassEnd,
  } from '@fortawesome/free-solid-svg-icons'
  import { faDiscord } from '@fortawesome/free-brands-svg-icons'
  import { url } from '@sveltech/routify'
  import Hero from '../components/hero.svelte'

  const links = [
    { title: 'Leaderoards', href: $url('/leaderboards'), icon: faList },
    { title: 'SpeedSouls Wiki', href: VUE_APP_WIKI, icon: faAngleDoubleRight },
    { title: 'Submit a Run', href: $url('/submit'), icon: faHourglassEnd },
    { title: 'Discord', href: VUE_APP_DISCORD, icon: faDiscord },
  ]
</script>

<Hero>
  <div class="max-w-2xl md mx-auto text-center py-40">
    <img
      class="mx-auto mb-4"
      src="/images/SpeedSouls-Horizontal-White_with_motto.png"
      alt="speedsouls logo"
    />
    <div class="links py-5">
      {#each links as { title, href, icon }}
        <a {href} class="btn -primary">
          <Icon data="{icon}" />
          {title}
        </a>
      {/each}
    </div>
  </div>
</Hero>
