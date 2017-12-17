const app = "I don't do much."

var array = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(array) {
  array.shift(-1, 'ralph')
  return array
}
