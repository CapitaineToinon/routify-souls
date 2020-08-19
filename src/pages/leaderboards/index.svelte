<script>
  import { url } from '@sveltech/routify'

  export let scoped
  const { games } = scoped
</script>

<div class="flex flex-col justify-center w-full">
  <div
    class="games grid grid-cols-1 mb-4 sm:grid-cols-2 md:grid-cols-3
    lg:grid-cols-4 gap-4"
  >
    {#each games as game}
      <a href="{$url('/leaderboards/:game', { game: game.abbreviation })}">
        <div class="border-gray-100 rounded overflow-hidden shadow-md">
          <div class="bg-black pb-3/5 relative">
            <img
              class="absolute h-full w-full object-cover opacity-75"
              src="{game.assets.background.uri}"
              alt="Sunset in the mountains"
            />
            <div
              class="absolute h-full w-full flex items-center justify-center
              text-center p-2"
            >
              <div class="text-gray-100 font-bold">
                {game.names.international}
              </div>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  .games a:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.02);
  }
</style>
