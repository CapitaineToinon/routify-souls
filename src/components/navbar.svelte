<script>
  const {
    VUE_APP_WIKI,
    VUE_APP_FORUMS,
    VUE_APP_DISCORD,
    VUE_APP_PATREON,
    VUE_APP_TWITTER,
    VUE_APP_GITHUB,
  } = process.env

  import Icon from 'svelte-awesome'
  import onEvent from '../mixins/onEvent'
  import onResize from '../mixins/onResize'
  import useBodyLocker from '../mixins/blockLocker'
  import { url } from '@sveltech/routify'
  import { faCog } from '@fortawesome/free-solid-svg-icons'
  import {
    faDiscord,
    faPatreon,
    faTwitter,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

  const [lock, unlock] = useBodyLocker()

  export let transparant = false
  let hidden = true
  let dark = false
  let burger

  const menu = [
    { title: 'Home', href: $url('/') },
    { title: 'Leaderboards', href: $url('/leaderboards') },
    { title: 'Wiki', href: VUE_APP_WIKI },
    { title: 'Forums', href: VUE_APP_FORUMS },
    { title: 'Submit a run', href: $url('/submit') },
  ]

  const socials = [
    {
      title: 'discord',
      href: VUE_APP_DISCORD,
      icon: faDiscord,
      hover: 'hover:text-discord',
    },
    {
      title: 'patreon',
      href: VUE_APP_PATREON,
      icon: faPatreon,
      hover: 'hover:text-patreon',
    },
    {
      title: 'twitter',
      href: VUE_APP_TWITTER,
      icon: faTwitter,
      hover: 'hover:text-twitter',
    },
    {
      title: 'github',
      href: VUE_APP_GITHUB,
      icon: faGithub,
      hover: 'hover:text-nord10',
    },
    {
      title: 'settings',
      href: $url('/settings'),
      icon: faCog,
      hover: 'hover:text-nord10',
    },
  ]

  onResize(() => (hidden = true))

  onEvent('click', ({ target }) => {
    if (target === burger || burger.contains(target)) return
    hidden = true
  })

  $: isWhiteLogo = dark || transparant
  $: hidden ? unlock() : lock()
</script>

<nav
  class="absolute top-0 left-0 right-0 z-10 font-sans text-center flex h-12
  justify-between px-3 bg-nord6 dark:bg-nord1"
  class:transparant
  class:active="{!hidden}"
  class:dark
>
  <a href="{$url('/')}" class="h-full flex flex-col justify-center">
    <img
      class="h-10 sm:h-10 py-2"
      src="/images/logo-{isWhiteLogo ? 'white' : 'black'}.png"
      alt="speedsouls logo"
    />
  </a>
  <div class="burger flex flex-col justify-center lg:hidden">
    <button
      bind:this="{burger}"
      on:click="{() => (hidden = !hidden)}"
      class="flex items-center px-3 py-2 border rounded"
    >
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  </div>
  <div class="menu" v-click-outside="onClickOutside">
    <ul class="links flex flex-col lg:flex-row list-none">
      {#each menu as { title, href }}
        <li class="menu-item">
          <a {href}>{title}.</a>
        </li>
      {/each}
    </ul>
    <ul class="socials">
      {#each socials as { title, href, icon, hover }, i}
        <li class="menu-item icon">
          <a {href} aria-label="{title}" class="{hover}">
            <Icon data="{icon}" scale="2" />
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style lang="scss">
  nav {
    @apply fixed;
    @apply shadow-md;

    &::before {
      content: '';
      @apply absolute;
      @apply bg-black;
      top: 100%;
      right: 0;
      left: 0;
      height: 100vh;
      transition: opacity 0.2s ease-in-out;
      @apply opacity-0;
      @apply pointer-events-none;
    }

    .menu {
      top: -100vh;
      transition: top 0.2s ease-in-out;
      @apply max-h-screen;
      @apply overflow-y-scroll;
      @apply flex;
      @apply absolute;
      @apply right-0;
      @apply left-0;
      @apply flex-col;
      @apply bg-nord6;
      @apply z-50;
      @apply shadow-md;
      @apply py-5;

      @screen lg {
        @apply flex;
        @apply relative;
        @apply flex-row;
        @apply items-center;
        @apply top-0;
        @apply shadow-none;
        @apply border-t-0;
        @apply py-0;
        @apply overflow-y-hidden;
      }
    }

    .links {
      .menu-item {
        a:hover {
          @apply text-nord10;
        }
      }
    }

    .socials {
      @apply pt-3;
      @apply mt-3;
      @apply border-t;
      @apply border-nord4;

      @screen lg {
        @apply pt-0;
        @apply mt-0;
        @apply pl-3;
        @apply ml-3;
        @apply border-l;
        @apply border-t-0;
      }
    }

    .menu-item {
      @apply font-bold;
      @apply uppercase;
      @apply inline-block;
      @apply no-underline;
      @apply text-nord0;
      @apply p-2;

      .a-exact-active:not([href='/']) {
        @apply text-nord10;
      }
    }

    .burger {
      button {
        @apply text-nord0;
        @apply border-nord0;
      }
    }

    &.dark {
      .menu {
        @apply bg-nord1;
      }

      .menu-item {
        @apply text-nord6;
      }

      .socials {
        @apply border-nord3;
      }

      .burger {
        button {
          @apply text-nord6;
          @apply border-nord6;
        }
      }
    }

    &.active {
      .menu {
        top: 100%;

        @screen lg {
          @apply top-0;
        }
      }

      &::before {
        @apply opacity-75;
        @apply pointer-events-auto;

        @screen lg {
          @apply hidden;
        }
      }
    }

    &.transparant {
      @apply bg-transparent;
      @apply shadow-none;

      @screen lg {
        .menu {
          @apply bg-transparent;
        }

        .socials {
          @apply border-nord4;
        }

        .menu-item {
          @apply text-nord6;
        }
      }

      .burger {
        button {
          @apply text-nord6;
          @apply border-nord6;
        }
      }
    }
  }
</style>
