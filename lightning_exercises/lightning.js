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

// ________________________________________________

// Additional Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

// Sloppy way
console.log("height:", wardrobe.height, "manufacturer:", wardrobe.manufacturer, "contents:", wardrobe.contents, "depth:", wardrobe.depth, "width:", wardrobe.width)

// Clean way
Object.keys(wardrobe).forEach(key => {
    console.log(`${key}:`, wardrobe[key]);
});

// Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log("stories:", empireStateBuilding.stories, "height:", empireStateBuilding.height, "square feet:", empireStateBuilding.squareFeet, "eastWest length:", empireStateBuilding.eastWestLength, "northSouth length:", empireStateBuilding.northSouthLength)

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
const buildingAddress = empireStateBuilding["address"]
console.log("Address:", buildingAddress)

const constructionDate = empireStateBuilding["constructionDate"]
console.log("Date of Construction:", constructionDate)

const totalCost = empireStateBuilding["cost"]
console.log("Total Cost:", totalCost)

const buildingOwner = empireStateBuilding["owner"]
console.log("Owner:", buildingOwner)

const buildingArchitect = empireStateBuilding["architect"]
console.log("Architect:", buildingArchitect)

// Arrays as values practice

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
const fullTimers = nashvilleSoftwareSchool.instructors.fullTime

fullTimers.forEach(instructor => {
    console.log("Full-time instructor:", instructor)
})

const partTimers = nashvilleSoftwareSchool.instructors.partTime

partTimers.forEach(instructor => {
    console.log("Part-time instructor:", instructor)
})

// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log("Andy solo =>", fullTimers[4], "and Zoe solo =>", partTimers[0])

// Practice: Accessing Property Values

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// Output the following value to the console.

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed}-${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album`)