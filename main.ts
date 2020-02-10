let Name = game.askForString("What is your name?")
let favColor = game.askForString("What is your favorite color?")
let animal = game.askForString("Are you a dog person or a cat person?")
game.splash("Hi, " + Name)
game.splash("" + favColor + " is my second favorite color")
if (animal == "dog") {
    game.splash("I'm also a " + animal + " person")
} else {
    game.splash("I'm more of a dog person more than a " + animal + " person")
}
