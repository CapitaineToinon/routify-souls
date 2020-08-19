import formatDate from 'date-fns/format'
import { formatDistanceStrict } from 'date-fns'

export function getTimeName(time) {
  const names = {
    ingame: 'In-Game Time',
    realtime: 'Real Time',
    realtime_noloads: 'Time without loads',
  }

  return names[time] || 'Time'
}

function toDigits(value, count = 2) {
  return `${'0'.repeat(count)}${value}`.slice(count * -1)
}

export function formatTime(value = 0) {
  if (value === 0) return ''

  let hours = Math.floor(value / 3600)
  value %= 3600
  let minutes = Math.floor(value / 60)
  let seconds = value % 60
  let ms = value % 1

  let output = ''

  if (hours) {
    output = `${hours}:${toDigits(minutes)}:${toDigits(seconds)}`
  } else {
    output = `${toDigits(minutes)}:${toDigits(seconds)}`
  }

  if (ms) {
    output = `${output}.${toDigits(ms, 3)}`
  }

  return output
}

export function date(value, format = 'do MMM yyyy') {
  return formatDate(new Date(value), format)
}

export function relativeDate(value) {
  return formatDistanceStrict(new Date(value), new Date())
}
