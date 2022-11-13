const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6e01f7b67msh8faee5adb940d72p1fb477jsn94cbf0f9b5c0',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};
countries1=[];
cases1=[];
deaths1=[];
recovered1=[];

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then(response =>{
		console.log(response)
		let data1="";
		let country="";
		let cases="";
		let deaths="";
		let recovered="";
		for (let i = 0; i < 288; i++) {
			
			country=response.countries_stat[i]
						// for (let i = 0; i < 10; i++)console.log(country){
						// 	co
			
						data1 +=`<p> ${country[i].country_name} </p>`
		}

		// let data1 ="";
		//  Object.keys(response).map(()=>{
		// 	data1=`		
		// <tr>
		// 	<td>${values.country_name}</td>
		// 	<td>${values.cases}</td>
		// 	<td>${values.deaths}</td>
		// 	<td>${values.total_recovered}</td>
		// </tr>
		// `
		// });

		// for (let i = 0; i < 288; i++) {
		// 	let data2="";
		// 	countries1.push(response.countries_stats[i].country_name);
		// 	cases1.push(response.countries_stats[i].cases);
		// 	deaths1.push(response.countries_stats[i].deaths);
		// 	recovered1.push(response.countries_stats[i].recovered);
		// 			for (let i = 0; i < 288; i++) {		
		// 				data2 +=`	
		// 				<tr>
		// 					<td>${countries1[i]}</td>
		// 					<td>${cases1[i]}</td>
		// 					<td>${deaths1[i]}</td>
		// 					<td>${recovered1[i]}</td>
		// 				</tr>
		// 				`	
		// 			}
		// }
		document.getElementById("records").innerHTML=data1;
	})
	.catch(err => console.log(err));
