import { onDestroy } from 'svelte'

export default function onEvent(event, cb) {
  window.addEventListener(event, cb, false)
  onDestroy(() => window.removeEventListener(event, cb, false))
}
