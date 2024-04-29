const container =document.querySelector(".data-container");

// Function to generate the array of blocks
// function generatearray() {
	// Get the user input
	var numElements = prompt("Enter the number of elements to generate:");
	
	// Convert the input to a number
	numElements = parseInt(numElements);
	
	// Generate an array of random numbers
	var arr = [];
	for (var i = 0; i < numElements; i++) {
	  arr.push(Math.random());
	}
	
	// Display the array
	console.log(arr);





// Function to generate bars
function generatebars(num = numElements) {

// here we genearte 20 random values by using math.random function and multiply it with 100 because math.random 
// function return random value between 0 and 1.
for (let i = 0; i < num; i += 1) {

	const value = Math.floor(Math.random() * 100) + 1;

	// To create element "div"
	const bar = document.createElement("div");
	bar.classList.add("bar");

	bar.style.height = `${value * 3}px`;
	// we move the bars in x axis to create spacing between them using CSS transform property
	bar.style.transform = `translateX(${i * 30}px)`;

	//elemnet label is created. it will hold the height of the bar and display over the bars
	const barLabel = document.createElement("label");
	barLabel.classList.add("bar__id");

    barLabel.innerHTML = value;

	// Append label to div
	bar.appendChild(barLabel);

	// appending bar to the contiainer
	container.appendChild(bar);
}
}

/* Main function the InsertionSort function is created, we made it a asynchronous function
to make use of the await and promise keywords */
async function InsertionSort(delay = 30) {

let bars = document.querySelectorAll(".bar");

//we assign light green color to the initial (ith) bar 
bars[0].style.backgroundColor = " rgb(49, 226, 13)";
/*for loop iterate over the remaing bars
The folowing code is the main to to perform insertion sort. we compare 2 bars according to their height. if the immediate 
 left bar's height greater than the key bar then nothing will happen and the code will continue
 if it is less then the height of the bars will swap.*/
for (var i = 1; i < bars.length; i += 1) {
	
	var j = i - 1;
	
	var key = parseInt(bars[i].childNodes[0].innerHTML);
	
	var height = bars[i].style.height;
	// For selecting section having id "ele"
	var barval=document.getElementById("ele")
	//Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	// To pause the execution of code for 150 milliseconds we use await function 
	await new Promise((resolve) =>
	setTimeout(() => {resolve();}, 150)
);

	// For placing selected element at its correct position
	while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
		
	// Provide darkblue color to the jth bar
	bars[j].style.backgroundColor = "darkblue";
		
	// For placing jth element over (j+1)th element
	bars[j + 1].style.height = bars[j].style.height;
	bars[j + 1].childNodes[0].innerText =bars[j].childNodes[0].innerText;

	// Assign j-1 to j
	j = j - 1;

	//  pause the execution of code for 150 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 150)
	);
		
// Assigning light green color to sorted bars
	for(var k=i;k>=0;k--){
		bars[k].style.backgroundColor = " rgb(49, 226, 13)";
	}
	}

	// Placing the selected element to its correct position
	bars[j + 1].style.height = height;
	bars[j + 1].childNodes[0].innerHTML = key;
	
	/* we used await function to pause the executionn of the code such that 
    the user can see the bars being shifted 
    */
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 600)
	);

}
// enabling Generate array button when sorting is done
document.getElementById("Button1").disabled = false;                               
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// enabling insertion sort button when sorting is done
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

generatebars();
/* creating generate function because when we click the button generate array the previous
values that were generated are aslo displayed, to overcome this problem we create generate() function
which reloads our webpage also displaying new bars whenever we click generate Array button*/ 
function generate()
{
window.location.reload();
}

function disable()
{
    // disabling Generate array button while the sorting is performed
document.getElementById("Button1")      
.disabled = true;
document.getElementById("Button1")
.style.backgroundColor = "#d8b6ff";

// disabling insertion sort button while the sorting is performed
document.getElementById("Button2")
.disabled = true;
document.getElementById("Button2")
.style.backgroundColor = "#d8b6ff";
}
