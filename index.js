const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kittens) {
  kittens.shift(-1, 'ralph')
  return kittens
}
