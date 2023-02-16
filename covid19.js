let inputbox = document.getElementById("inputbox");
let btn1 = document.getElementById('btn1');
let out1 = document.getElementById('output1');
let country = [];
let cases = [];
let death =[];
let recovered =[];
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'f6e01f7b67msh8faee5adb940d72p1fb477jsn94cbf0f9b5c0',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};


btn1.addEventListener('click',fun1);
fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
.then(response => response.json())
.then(response => { 
		console.log(response);


		for (let i = 0; i < 228; i++) {
			country[i] = response.countries_stat[i].country_name;
			cases[i] = response.countries_stat[i].cases;
			death[i] = response.countries_stat[i].deaths;
			recovered[i] = response.countries_stat[i].total_recovered;

		}

	}
)
	.catch(err => console.error(err));
	
	
	function fun1(){
		let input=inputbox.value;
		input=input.charAt(0).toUpperCase() + input.slice(1);
		console.log(input);
		if (input==="") {
			alert("Enter Country Name!");
		}

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
			if (counter===228 && country[228]!=input) {
				out1.innerHTML="Enter valid country name!"
			}
	}