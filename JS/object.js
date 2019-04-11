
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
    console.log(`cupcake colors in a for loop:${i}`, cupcake.color[i])
}

cupcake.color.forEach (color => {
    console.log("forEach color:", color);
    console.log(`the color again is ${color} and that is a beautiful color`);
})

