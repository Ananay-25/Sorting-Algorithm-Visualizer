const container = document.querySelector(".data-container");



// Function to generate bars
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
function generatebars(num = numElements) {

  // here we generate 20 random values by using Math.random function and multiply it with 100 because Math.random 
  // function returns a random value between 0 and 1.
  for (let i = 0; i < num; i += 1) {

    const value = Math.floor(Math.random() * 100) + 1;

    // To create an element "div"
    const bar = document.createElement("div");
    bar.classList.add("bar");

    bar.style.height = `${value * 3}px`;
    // we move the bars in x-axis to create spacing between them using CSS transform property
    bar.style.transform = `translateX(${i * 30}px)`;

    // element label is created. it will hold the height of the bar and display over the bars
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar__id");

    barLabel.innerHTML = value;

    // Append label to div
    bar.appendChild(barLabel);

    // appending bar to the container
    container.appendChild(bar);
  }
}

/* following function is for bubble sort, in this function we compare the height of the adjacent bars, 
   and if the height of the first bar is greater than the height of the second bar, then we swap them.
*/
async function BubbleSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  for (var i = 0; i < bars.length - 1; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {

      // Assigning darkblue color to jth bar and (j+1)th bar
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].style.backgroundColor = "darkblue";

      /* we used await function to pause the execution of the code such that 
         the user can see the bars being shifted 
      */
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // To store the integer value of jth bar to val1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (j+1)th bar to val2
      var val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

      // Compare val1 and val2
      if (val1 > val2) {
        var temp1 = bars[j].style.height;
        var temp2 = bars[j].childNodes[0].innerText;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = temp1;
        bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
        bars[j + 1].childNodes[0].innerText = temp2;
      }

      // Assigning skyblue color to the sorted bars
      bars[j].style.backgroundColor = "skyblue";
      bars[j + 1].style.backgroundColor = "skyblue";
    }

    // Assigning lightgreen color to the greatest element which is sorted
    bars[bars.length - i - 1].style.backgroundColor = "lightgreen";
  }

  // Assigning lightgreen color to the last element
  bars[0].style.backgroundColor = "lightgreen";

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
