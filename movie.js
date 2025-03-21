
let container = document.getElementById("container");
let loaders= document.getElementById("loaders")
const url = 'http://localhost:3000/jobs';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1b9c91a7d5msh46dba86d8fc526ep16ec55jsne96d714a88f9',
		'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',
	}
};
async function getData(){
try {
	const response = await fetch(url, options);
    if(!response.ok){
        throw new Error("Invalid or failed to fetch", response.status);
    }
	const result = await response.json();
	displayData(result);
} catch (err) {
	console.error(err);
}
}
getData();

    function displayData(obj){
        console.log(obj)
      obj.forEach(element => {
           item =   document.createElement("div");
          item.className = "item"    
          item.innerHTML= `
          <p> Rank: ${element.rank}</p>
            <p> Series_Title : ${element.Series_Title}</p>
            <img src="${element.Poster_Link}" alt="${element.Series_Title}" height="250px">
            <p> Runtime :${element.Runtime}</p>
            <p> Genre :${element.Genre}</p>
            <p>IMDB_Rating :${element.IMDB_Rating}</p>
            <p> Overview :${element.Overview}</p>
            <p> Director :${element.Director}</p>
            <p> Star1 : ${element.Star1}</p>
            <p>  Star2 :${element.Star2}</p>
            <p>  Star3 : ${element.Star3}</p>
            <p> Star4 : ${element.Star4}</p>
            <p>  No_of_Votes :${element.No_of_Votes}</p>

         

    
          `
          container.appendChild(item)
         
        }); 
        
       
    }
      

window.addEventListener("DOMContentLoaded", function(){
        getData();
    })

// async function getMovies() {
//     const url = 'https://imdb-top-1000-movies-series.p.rapidapi.com/byrating';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '1b9c91a7d5msh46dba86d8fc526ep16ec55jsne96d714a88f9',
//             'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',

//         },
//         body: new URLSearchParams({
//             above: '8.1',
//             under: '8.2'
//         })
//     };

//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
//         }
//         const result = await response.json(); 
//         displayData(result); 
//     } catch (err) {
//         console.error(" Error fetching movies:", err);
//     }
// }


// getMovies();

// function displayData(obj){
//     console.log(obj)
// obj.forEach(obj=> {
//       let item =   document.createElement("div");
//       item.className = "item"    
//       item.innerHTML= `
//       <p>  TITLE : ${obj.itle}</span></p>
 

//     //   <p>${elements.released_year}</p>
//       `;
   
     
//     }); 
    
// }
  
//   container.appendChild(item)
// displayData();
 






// let container = document.getElementById("container");
// const url = 'http://localhost:3000/jobs';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '931904d7abmshd1248ddd5d45fe5p196f73jsn0351504c085d',
// 		'x-rapidapi-host': 'linkedin-job-search-api.p.rapidapi.com'
// 	}
// };
// async function getData(){
// try {
// 	const response = await fetch(url, options);
//     if(!response.ok){
//         throw new Error("Invalid or failed to fetch", response.status);
//     }
// 	const result = await response.json();
// 	displayData(result);
// } catch (err) {
// 	console.error(err);
// }
// }
// getData();

//  function displayData(obj){
//     console.log(obj)
// obj.forEach(element => {
//       let item =   document.createElement("div");
//       item.innerHTML= `
//       <p style="color:blue;"> JOB TITLE :<span style="color:black"> ${element.title}</span></p>

//       <img src="${element.organization_logo}" style="height:200px; width:200px; border-radius:50%; padding:5px">
//       <p style="color:blue;"> Job Seniority :<span style="color:black"> ${element.seniority}</span></p>
     
//            <p style="color:blue;"> Organization: <span style="color:black"> ${element.organization}</span></p>
//       <a href="${element.url}" target="_blank">View Job</a>      
//       `
//       container.appendChild(item)
     
//     }); 
    
// }

// window.addEventListener("DOMContentLoaded", function(){
//     getData();
// })
