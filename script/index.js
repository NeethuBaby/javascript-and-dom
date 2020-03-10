// Task 1

// Access HTML element with id tag-line.
// Access all headings that belong to div with the class name bg-main-content.
// Create the variable collect and assign it with content of tag-line.
// Loop through the array of headings and append the content of each heading to variable collect
// After the loop, use alert to print collect

let tag = "";
tag = document.getElementById("tag-line");
let collect = tag.innerText+"\n"+"-------------------------------------------"+"\n";


 let heading = document.querySelector(".bg-main-content").querySelectorAll("h2");
 for (let i = 0; i < heading.length; i++) {
 	collect += heading[i].innerText+"\n";
 }

 alert(collect);

 // Task 2

// Access 13th div with class name box that belongs to div with the class name bg-main-content.
// You can name the variable when_to_launch.
// Use property children to "scoop" in array all HTML elements that belong to that div.
// Create the variable collect and assign it with content of heading that belongs to gotten array.
// Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
// After the loop, use alert to print collect

let bxs = document.querySelectorAll('.bg-main-content .box');
let when_to_launch = bxs[12];
let scoopedElements = when_to_launch.children;

let collect1 = `${scoopedElements[0].innerText}\n-------------------\n${scoopedElements[1].innerText}\n\n${scoopedElements[2].innerText}`
alert(collect1);