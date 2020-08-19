<script>
  import Icon from 'svelte-awesome'
  import onEvent from '../../../mixins/onEvent'
  import onResize from '../../../mixins/onResize'
  import Alert from '../../../components/alert.svelte'
  import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'
  import { url, isActive } from '@sveltech/routify'
  export let game
  export let scoped

  let button
  let openSidebar = false
  const { games } = scoped

  onResize(() => (openSidebar = false))

  onEvent('click', ({ target }) => {
    if (target === button || button.contains(target)) return
    openSidebar = false
  })

  $: buttonIcon = openSidebar ? faTimes : faList
  $: fullGame = games.find((g) => g.abbreviation === game)
</script>

<div class="flex flex-row">
  {#if fullGame}
    <button
      id="sidebar-button"
      bind:this="{button}"
      on:click="{() => (openSidebar = !openSidebar)}"
      class:open="{openSidebar}"
    >
      <Icon data="{buttonIcon}" scale="2" />
    </button>
    <aside class:open="{openSidebar}">
      <div class="categories w-64 flex flex-col">
        <span class="label text-xs text-nord0 dark:text-nord6 uppercase mb-1">
          Categories
        </span>
        {#each fullGame.categories.data as category}
          <a
            class="btn text-nord0 dark:text-nord6 text-left py-2 pl-8 px-4 m-px
            rounded"
            href="{$url('/leaderboards/:game/:category', {
              game: fullGame.abbreviation,
              category: category.weblink.split('#')[1].toLowerCase(),
            })}"
            class:active="{$isActive(`/leaderboards/${fullGame.abbreviation}/${category.weblink
                .split('#')[1]
                .toLowerCase()}`)}"
          >
            {category.name}
          </a>
        {/each}
      </div>
    </aside>

    <div
      class="content flex flex-col flex-grow ml-0 md:ml-5"
      class:open="{openSidebar}"
    >
      <slot scoped="{{ game: fullGame }}" />
    </div>
  {:else}
    <Alert type="danger">Game not found</Alert>
  {/if}
</div>

<style lang="scss">
  #sidebar-button {
    @apply fixed;
    @apply z-20;
    @apply w-12;
    @apply h-12;
    @apply shadow-md;
    @apply rounded;
    @apply bg-nord15;
    @apply text-nord6;
    right: 0.75rem;
    bottom: 0.75rem;

    &.open {
      @apply bg-transparent;
      @apply shadow-none;
      @apply text-nord15;
    }

    @screen md {
      @apply hidden;
    }
  }

  aside {
    @apply fixed;
    @apply w-screen;
    @apply left-0;
    @apply right-0;
    @apply bottom-0;
    @apply z-10;
    @apply flex;
    @apply flex-row;
    @apply justify-end;
    @apply items-end;
    transition: transform 0.2s ease-in-out;
    transform: translateY(100vh);
    height: calc(100vh - var(--navbar-height));

    @screen md {
      @apply block;
      @apply z-0;
    }

    .categories {
      @apply w-full;
      @apply p-3;
      @apply shadow-2xl;
      @apply overflow-y-scroll;
      @apply max-h-full;

      .label {
        letter-spacing: 1px;
      }
      .btn {
        &.active,
        &:hover {
          @apply text-gray-100;
          @apply bg-nord10;
          @apply shadow-md;
        }
      }

      @screen md {
        @apply flex-none;
        @apply w-64;
        overflow: initial;
        @apply shadow-none;
        @apply p-0;
      }
    }

    &.open {
      transform: translateY(0);
    }

    @screen md {
      @apply relative;
      @apply w-64;
      @apply h-auto;
      @apply bg-transparent;
      @apply p-0;
      transform: translateY(0);
    }

    .categories {
      @apply sticky;
      top: calc(var(--navbar-height) + 1.5rem);
    }
  }

  .content {
    @apply z-0;

    &::after {
      content: '';
      @apply fixed;
      @apply top-0;
      @apply right-0;
      @apply bottom-0;
      @apply left-0;
      @apply z-10;
      @apply pointer-events-none;
      @apply bg-black;
      @apply opacity-0;
      transition: opacity 0.2s ease-in-out;

      @screen md {
        @apply hidden;
      }
    }

    &.open {
      &::after {
        @apply opacity-75;
        @apply pointer-events-auto;
      }
    }
  }

  :root.mode-dark {
    .categories {
      @apply bg-nord1;
    }

    @screen md {
      .categories {
        @apply bg-transparent;
      }
    }
  }

  :root:not(mode-dark) {
    .categories {
      @apply bg-nord5;
    }

    @screen md {
      .categories {
        @apply bg-transparent;
      }
    }
  }
</style>
