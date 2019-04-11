
const cupcake = {
    color: ["pink", "white", "brown"],
    flavor: "chocolate",
    size: "mini",
    calories: 0,
    icing: true,
    eatCupcake: () => {
        console.log("eating the cupcake");
    }
}

console.log("cupcake" , cupcake);
console.log("what colors are our cupcakes?", cupcake.color)
console.log("what color is our last cupcake?", cupcake.color[2])

for (let i = 0; i < cupcake.color.length; i++) {
    console.log("cupcake colors in a for loop:", cupcake.color[i])
}

cupcake.color.forEach (color => {
    console.log("forEach color:", color);
    console.log(`the color again is ${color} and that is a beautiful color`);
})

// LIGHTNING EXERCISES

// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
    color: "red",
    year: 2015,
    make: "Ford",
    model: "Mustang"
}

console.log("My Car as an object =>", car)

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

console.log("An array of the shelter animals", animals)

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const mom = {
    name: "Kimberly",
    age: 52,
    location: "Lewisburg",
    favorite_hobby: "Riding horses"
}
const dad = {
    name: "Travis",
    age: 54,
    location: "Lebanon",
    favorite_hobby: "Anything Sports"
}
const wife = {
    name: "Hannah",
    age: 27,
    location: "Mount Juliet",
    favorite_hobby: "Crime shows/novels"
}
const son = {
    name: "Ezra",
    age: 2,
    location: "Mount Juliet",
    favorite_hobby: "Playing outside"
}

const familyMembers = [mom, dad, wife, son]
console.log("My family members", familyMembers)