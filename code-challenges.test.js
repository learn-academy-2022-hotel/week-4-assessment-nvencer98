// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { it } = require("node:test")

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.





// psuedo code:
// input: ["purple", "blue", "green", "yellow", "pink"]
// output: ["yellow", "blue", "pink", "green"] (can be a different order)
// run yarn add jest 
// create test function outline
// get good fail
// creat test function
// use .slice and some type of random function. 
// run test

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"]




describe("removeFirst", () => {
  it("returns array with first gone and rest random", () => {
    expect(removeFirst(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
  })
}
)

describe("removeFirst", () => {
  it("returns array with first gone and rest random", () => {
    expect(removeFirst(colors2)).toEqual(expect.arrayContaining([
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"]
    ))
  })
}
)

const removeFirst = (array) => {
  slicedArray = array.slice(1,array.length)
 return sortedArray = slicedArray.sort((a, b) => 0.5 - Math.random())
}





// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// psuedo code:
// input: { upVotes: 13, downVotes: 2 }
// output:  11
// create test function 
// run test and adjust until good fail.
//  create function to run through test, use if else and some math i would assume. 
// alot simpler than I thought, i overthought this hard. 





describe("voteCounter", () => {
  it("adds up the up and down votes", () => {
    expect(voteCounter(votes1)).toEqual(11)
  })
})
describe("voteCounter", () => {
  it("adds up the up and down votes", () => {
    expect(voteCounter(votes2)).toEqual(-31)
  })
})


const voteCounter = (object)=> {
  return object.upVotes - object.downVotes
}








// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.


// psuedo code:
// input:["array", "object", "number", "string", "Boolean"] ["string", "null", "Boolean", "string", "undefined"]
// output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
// create test function 
// run test for good fail
// create function, look up some things to try and find new info. 
// i was stuck for a hour the realized my .toEqual was actually .toequal.

describe("returnArrayNoDupes", () => {
  it("combines and discards dupes", ()=> {
    expect(returnArrayNoDupes(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

const returnArrayNoDupes = (swag1,swag2) => {
extraSwag = swag1.concat(swag2)
let superExtraSwag = [...new Set(extraSwag)]
return superExtraSwag
}