//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
const arr1 = ["mango","orange","Apple","Kiwi"]
const sortedArray = [...arr1].sort();

console.log(sortedArray);
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkNumber(arr) {
    arr.forEach(element => {
       if (element > 0) {
         console.log("positive");
       } else if (element < 0) {
         console.log("negative");
       } else {
         console.log("zero");
       }
    });
   }
   const numbers = [1,2,-3,-4,5,-6,7];
checkNumber(numbers);

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortEmployers(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
   }
   
   const employees = [
    { id: 1, name: 'Hawa', salary: 50000 },
    { id: 2, name: 'Vivian', salary: 60000 },
    { id: 3, name: 'Zippy', salary: 45000 }
   ];
   
   const EmployeesSalary = sortEmployers(employees);
   console.log(EmployeesSalary);
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function MultiplyNumbers(numbers) {
    numbers.forEach(function(number) {
       console.log(number * 2);
    });
   }
   
   
   const numbersArray = [1, 2, 3, 4, 5];
   MultiplyNumbers(numbersArray);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function Array(numbers) {
    numbers.forEach((number, index) => {
       if (index < 4) {
         
         numbers[index] = number * 8;
       } else if (index >= numbers.length - 2) {
        
         numbers[index] = number + 5;
       }
    });
    console.log(numbers);
   }
   
   
   const numberssort= [1, 2, 3, 4, 5, 6];
   transformArray(numberssort);