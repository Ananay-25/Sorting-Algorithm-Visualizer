const container =document.querySelector(".data-container");
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
/*
following function is of selection sort, in this function we select a key bar and compare the height of the
bar to the height of all the bars if the height of ay bar is less than the key bar then it is colored red and
loop continue to find the bar with the smallest height then the key and the smallest bar will get swapped and 
a light grreen color is given to the sorted bar.
   */

async function SelectionSort(delay = 300) {
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	min_idx = i;

    //Assingning darkblue color to ith bar. ith bar is the priamry bar which we compare with jth bar
	bars[i].style.backgroundColor = "darkblue";
	for (var j = i + 1; j < bars.length; j += 1) {

    //Assingning red color to those bars whose height are less than the ith bar
	bars[j].style.backgroundColor = "red";
		
/* we used await function to pause the executionn of the code such that 
    the user can see the bars being shifted 
    */
   	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

    //here the ith bar and the min_indx bar is getting swapped
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	


	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}

// enabling Generate array button when sorting is done
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// enabling Selection sort button when sorting is done
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
    document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// disabling selection sort button while the sorting is performed
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}

