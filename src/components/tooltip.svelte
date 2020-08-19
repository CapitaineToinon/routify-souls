<script>
  export let text = ''
</script>

<div class="tooltip">
  <slot />
  <span v-if="text" class="tooltiptext">{{ text }}</span>
</div>

<style lang="scss">
  /* Tooltip container */
  .tooltip {
    @apply relative;
    @apply inline-block;
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    @apply bg-nord0;
    @apply text-nord6;
    @apply py-1;
    @apply px-2;
    @apply rounded;
    @apply whitespace-no-wrap;
    visibility: hidden;
    text-align: center;

    /* Position the tooltip text */
    position: absolute;
    @apply absolute;
    @apply z-10;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    /* Fade in tooltip */
    @apply opacity-0;
    transition: opacity 0.2s ease-in-out;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    @apply visible;
    @apply opacity-100;
  }
</style>
