import { onDestroy } from 'svelte'
import { writable } from 'svelte/store'

const CLASS = 'overflow-hidden'
const requests = writable(0)

requests.subscribe((count) => {
  if (count < 0) requests.set(0)
  if (count <= 0) document.body.classList.remove(CLASS)
  else document.body.classList.add(CLASS)
})

export default function useBodyLocker() {
  const locked = writable(false)

  const unsubscribe = locked.subscribe((value) => {
    console.log({ value })
    value ? sub() : unsub()
  })

  function sub() {
    requests.update((r) => (r += 1))
  }

  function unsub() {
    requests.update((r) => (r -= 1))
  }

  function lock() {
    locked.set(true)
  }

  function unlock() {
    locked.set(false)
  }

  onDestroy(() => {
    unsubscribe()
    unsub()
  })

  return [lock, unlock]
}
