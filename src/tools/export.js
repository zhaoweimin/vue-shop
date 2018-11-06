export function f1 () {
  console.log('export fun 1;')
  return 'export fun 1;'
}

export function f2 () {
  console.log('export fun 2;')
  return 'export fun 2;'
}

export default {
  f1: f1,
  f2: f2
}
