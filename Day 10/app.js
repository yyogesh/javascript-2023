let dateInput = "2019/05/15"; // YYYY/MM/DD format

let dateObj = new Date(dateInput);

console.log(dateObj); // 2019-05-15T00:00:00.000Z

let dateInput1 = "2019/15/15"; // YYYY/MM/DD format

let dateObj1 = new Date(dateInput1);

console.log(dateObj1); // Invalid Date


let dateInput2 = "2019/05/15"; // YYYY/MM/DD format

let dateObj2 = new Date(dateInput2);

if(!isNaN(dateObj2)) {
    let day = dateObj2.getDate();
    // 5 // 05
    let month = dateObj2.getMonth() + 1;
    let year = dateObj2.getFullYear();
    const result = `${day}/${month}/${year}`
    console.log(result);
}

const inputDate = new Date('2023-08-20'); 

const currentDate = new Date();

if(inputDate < currentDate) {
    console.log('The input date is in the past.');
}

// dayjs 
// momomentjs
// Manage NPM 

const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
  
    if (date1 < date2) {
      console.log(`${d1} is less than ${d2}`);
    } else if (date1 > date2) {
      console.log(`${d1} is greater than ${d2}`);
    } else {
      console.log(`Both dates are equal`);
    }
};

let date1 = new Date();
let date2 = new Date();

if (date1 > date2) {
  console.log("Date 1 is greater than Date 2");
} else if (date1 < date2) {
  console.log("Date 1 is less than Date 2");
} else {
  console.log("Both Dates are same");
}

let date1 = new Date();
let date2 = new Date();

if (date1 === date2) {
  console.log("Both Dates are same");
} else {
  console.log("Not the same");
}


let date1 = new Date();
let date2 = new Date();

if (date1.getTime() === date2.getTime()) {
  console.log("Both  are equal");
} else {
  console.log("Not equal");
}


let date1 = new Date("06/21/2022").getYear();
let date2 = new Date("07/28/2021").getYear();

if (date1 < date2) {
  console.log("Date1 is less than Date2 in terms of year");
} else if (date1 > date2) {
  console.log("Date1 is greater than Date2 in terms of year");
} else {
  console.log(`Both years are equal`);
}

// December 11th 2023
const dateObj3 = new Date();
const day = dateObj3.getDate();
const month = dateObj3.toLocaleString("default", { month: "long" });
const year = dateObj3.getFullYear();

const nthNumber = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

const date = `${month} ${day}${nthNumber(day)}, ${year}`;





