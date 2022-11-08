const checkPangram = (str) => {
  let status = true;
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const lowerCaseStr = str.toLowerCase();

  letters.forEach((letter) => {
    if (lowerCaseStr.indexOf(letter) === -1) {
      status = false;
    }
  });

  return status;
};

// 01:02 PM => 13 / 04:12 PM => 16
// 07:03 AM

const convert12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  if (modifier === "PM") {
    const [hours, minutes] = time12h.split(":");

    const covertedHours = (parseInt(hours) + 12).toString();
    return `${covertedHours}:${minutes}`;
  }

  return time;
};

// "age": 23

class LRU {
  constructor(max = 5) {
    this.max = max;
    this.map = new Map();
  }

  add(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size === this.max) this.map.delete(this.firstKey());
    this.map.set(key, value);
  }

  firstKey() {
    const firstKey = [...this.map][0];
    return firstKey[0];
  }

  get() {
    console.log(this.map);
  }
}

// const NewLRU = new LRU(3);
// NewLRU.add("name", "majd");
// NewLRU.add("age", 23);
// NewLRU.add("status", "single");
// NewLRU.add("available", true);
// NewLRU.add("name", "new");
// NewLRU.get();

// console.log(convert12to24("05:02 PM"));

// console.log(checkPangram("The five boxing wizards jump quickly"));
