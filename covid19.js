let inputbox = document.getElementById("inputbox");
let btn1 = document.getElementById('btn1');
let out1 = document.getElementById('output1');

//initializing arrays to store data 
let country = [];
let cases = [];
let death =[];
let recovered =[];


//dark mode / light mode button
function changeMode() {
	var body = document.body;
	
	// toggle the theme
	body.classList.toggle("dark-theme");
	let button = document.getElementById('button');
	
	// change the button text
	if (button.innerHTML == "Normal Mode") {
	   button.innerHTML = "Dark Mode";
	} else {
	   button.innerHTML = "Normal Mode"
	}
 }

//Fetching API using GET method
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'f6e01f7b67msh8faee5adb940d72p1fb477jsn94cbf0f9b5c0',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

//adding click event listener to button
btn1.addEventListener('click',fun1);


//fetching API and resolving promises
fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
.then(response => response.json())
.then(response => { 
		console.log(response);

		//storing data in arrays
		for (let i = 0; i < 228; i++) {
			country[i] = response.countries_stat[i].country_name;
			cases[i] = response.countries_stat[i].cases;
			death[i] = response.countries_stat[i].deaths;
			recovered[i] = response.countries_stat[i].total_recovered;

		}

	}
)
	//if API isn't fetch give error on console
	.catch(err => console.error(err));
	
	// Searching for data for the entered country name
	function fun1(){
		let input=inputbox.value;
		input=input.charAt(0).toUpperCase() + input.slice(1);
		console.log(input);
		if (input==="") {
			alert("Enter Country Name!");
		}

		//Diplaying data using DOM manipuation
		out1.innerHTML = input;
			let counter = 0;
			for (let i = 0; i < 228; i++) {
				if(input===country[i]){
					out1.innerHTML=input;
					document.getElementById('cases').innerHTML = 'Cases: '+ cases[i];
					document.getElementById('death').innerHTML = 'Death: '+ death[i];
					document.getElementById('country').innerHTML = 'Country: ' + country[i];
					document.getElementById('recovered').innerHTML = 'Recovered: ' + recovered[i];
				}
				else{
					counter++;
				}
			}
			//incase user enter country which doesn't exist notify him
			if (counter===228 && country[228]!=input) {
				out1.innerHTML="Enter valid country name!"
			}
	}