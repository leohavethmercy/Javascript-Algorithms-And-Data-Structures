//Dot Notation

var myObj = {
  prop1: "val1",
  prop2: "val2"
};

var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

// Bracket Notation

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise

// Accessing Object Properties with Variables

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

// Updating Object Properties

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder";
myDog['name'] = "Happy Coder";

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup["charlie"];


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  else {
    return "Not Found";
  }
}

// Test your code by modifying these values
console.log(checkObj("gift"));


var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
  {
    'artist':'Drake',
    'title':'Scorpion',
    'release_year':'2018',
    'formats': [
      'CD',
      'VINYL',
      'Digital'
    ],
    'gold': true
  }
];

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line

/////////////////////////////////



// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // id = collectionCopy.[id]
  // prop = collectionCopy.[prop]
  // value = collectionCopy.[value]

  if (prop != "tracks" && value != "") {
    collectionCopy[prop] = value;
    collectionCopy.id = id;
    console.log(collectionCopy.artist);
    console.log(collectionCopy.id);
    // console.log(collectionCopy);
  }

  if (prop == "tracks" && collection.hasOwnProperty(prop) == false) {
    collection[prop] = [];
    collection[prop].push(value);
    console.log(collection.tracks);
  }


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me")