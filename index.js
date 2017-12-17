const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kittens, name) {
  kittens.shift(-1, 'ralph')
  return kittens
}
