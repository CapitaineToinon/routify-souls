<script>
  const TWITCH_REGEX = /(?:http(?:s)?:\/\/(?:www.)?)?twitch.tv\/(?:(?:.+?)\/v|videos)\/([0-9]+)/
  import getIdFromUrl from 'get-youtube-id'

  export let autoplay = false
  export let uri

  $: youtubeID = getIdFromUrl(uri)
  $: twitchID = TWITCH_REGEX.exec(uri)?.[1] || null
  $: parent = window.location.hostname
</script>

<div class="speedsouls-video inverted">
  {#if youtubeID}
    <iframe
      title="YouTube video"
      src="{`https://www.youtube.com/embed/${youtubeID}`}"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
    ></iframe>
  {:else if twitchID}
    <iframe
      title="Twitch video"
      src="{`https://player.twitch.tv/?video=${twitchID}&autoplay=${autoplay}&parent=${parent}`}"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
    ></iframe>
  {:else}
    Watch at
    <a href="{uri}">{uri}</a>

    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded
      relative"
      role="alert"
    >
      <strong class="font-bold">Holy smokes!</strong>
      <span class="block sm:inline">Something seriously bad happened.</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2
            1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1
            1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758
            3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          ></path>
        </svg>
      </span>
    </div>
  {/if}
</div>
