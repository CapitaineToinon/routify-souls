<script>
  import Icon from 'svelte-awesome'

  const {
    VUE_APP_DISCORD,
    VUE_APP_PATREON,
    VUE_APP_TWITTER,
    VUE_APP_GITHUB,
  } = process.env

  import {
    faDiscord,
    faPatreon,
    faTwitter,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

  const socials = [
    {
      title: 'Discord',
      href: VUE_APP_DISCORD,
      hover: 'hover:text-discord',
      icon: faDiscord,
    },
    {
      title: 'Patreon',
      href: VUE_APP_PATREON,
      hover: 'hover:text-patreon',
      icon: faPatreon,
    },
    {
      title: 'Twitter',
      href: VUE_APP_TWITTER,
      hover: 'hover:text-twitter',
      icon: faTwitter,
    },
    {
      title: 'Github',
      href: VUE_APP_GITHUB,
      hover: 'hover:text-nord10',
      icon: faGithub,
    },
  ]
</script>

<footer class="font-sans shadow-md bg-nord6 dark:bg-nord1 py-5 px-6">
  <div class="container">
    <div
      class="socials text-nord0 dark:text-nord6 py-12 grid grid-cols-4 gap-4
      text-center"
    >
      {#each socials as { title, href, hover, icon }}
        <div>
          <a {href} class="{hover}" target="_blank" rel="noopener">
            <Icon data="{icon}" scale="3" />
            <p class="mt-2">{title}</p>
          </a>
        </div>
      {/each}

    </div>
    <div
      class="pt-4 mt-4 text-nord0 dark:text-nord6 text-xs border-t border-nord5
      dark:border-nord3 text-center"
    >
      Site created by the SpeedSouls team. Please visit our
      <a href="VUE_APP_GITHUB">Github</a>
      to report any issues. This work is licensed under a
      <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
        CC BY-NC-ND 4.0 Int'l License
      </a>
      .
    </div>
  </div>
</footer>
