let container = document.getElementById("container");
let url = "https://odd-cyclic-group.glitch.me/products";

let loader = document.getElementById("loader");
let title = document.getElementById("title");
let description = document.getElementById("description");
let category = document.getElementById("category");
let price = document.getElementById("price");
let rating = document.getElementById("rating");
let btn = document.getElementById("btn");
let imageUrlInput = document.getElementById("imageURL");
let idInput = document.getElementById("id");

let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {  
            event.preventDefault();  
            btn.click();  
        }
    });
});

btn.addEventListener("click", async function () {
    if (title.value === "" || description.value === "" || category.value === "" || price.value === "" || rating.value === "" || imageUrlInput.value === "") {
        alert("Please enter all data properly.");
    } else {
        let method = idInput.value !== "" ? "PUT" : "POST";
        let mainUrl = method === "PUT" ? `${url}/${idInput.value}` : url;

        try {
            let response = await fetch(mainUrl, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "title": title.value,
                    "price": price.value,
                    "description": description.value,
                    "rating": rating.value,
                    "category": category.value,
                    "image": imageUrlInput.value
                })
            });

            if (response.ok) {
                getData();
                alert(method === "PUT" ? "Data Updated" : "Data Added");
                title.value = "";
                price.value = "";
                description.value = "";
                rating.value = "";
                category.value = "";
                idInput.value = "";
                imageUrlInput.value = "";
            }
        } catch (err) {
            console.error(err);
        }
    }
});

async function getData() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            displayData(data);
        }
    } catch (err) {
        console.error(err);
    }
}

function displayData(products) {
    container.innerHTML = "";
    products.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p class="title">${obj.title}</p>
            <img src='${obj.image}' class='image'>
            <p class="description">${obj.description}</p>
            <p class="price">${obj.price}</p>
            <p class="rating">${obj.rating}</p>
            <button onclick="deleteData('${obj.id}')">Delete</button>
            <button onclick="updateData('${obj.id}')">Update</button>
        `;
        container.appendChild(item);
    });
}

async function updateData(id) {
    try {
        let response = await fetch(`${url}/${id}`);
        if (response.ok) {
            let obj = await response.json();

            title.value = obj.title;
            price.value = obj.price;
            description.value = obj.description;
            rating.value = obj.rating;
            category.value = obj.category;
            idInput.value = obj.id;
            imageUrlInput.value = obj.image;

            window.scroll({ top: 0, behavior: "smooth" });
        }
    } catch (err) {
        console.error(err);
    }
}

async function deleteData(id) {
    try {
        let response = await fetch(`${url}/${id}`, { method: "DELETE" });
        if (response.ok) {
            getData();
            alert("Data Deleted");
        }
    } catch (err) {
        console.error(err);
    }
}

getData();

// let container = document.getElementById("container");
// let url = "http://localhost:3000/products";



// let loader = document.getElementById("loader");
// let title = document.getElementById("title");
// let description = document.getElementById("description");
// let category = document.getElementById("category");
// let price = document.getElementById("price");
// let rating = document.getElementById("rating");
// let btn = document.getElementById("btn");
// let imageUrlInput = document.getElementById("imageURL");
// let idInput = document.getElementById("id");

// let inputs = document.querySelectorAll("input");
// inputs.forEach(input => {
//     input.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {  
//             event.preventDefault();  
//             btn.click();  
            
//         }
//     });
// });



// btn.addEventListener("click", async function () {
//         let loading = document.getElementById("loading");

//     if (title.value === "" || description.value === "" || category.value === "" || price.value === "" || rating.rate.value === ""|| imageURL.value == "") {
//         alert("Please enter all data properly.");
//     } else {
//         let method = idInput.value.trim() !== "" ? "PUT" : "POST";
//         let mainUrl = method === "PUT" ? `${url}/${idInput.value}` : url;

//         try {
//             let response = await fetch(mainUrl, {
//                 method,
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     "title": title.value,
//                     "price": price.value,
//                     "description": description.value,
//                     "rating.rate": rating.rate.value,
//                     "category": category.value,
//                     "image": imageURL.value,
            
//                 })
//             });

//             if (response.ok) {
//                 getData();
//                 alert(method === "PUT" ? "Data Updated" : "Data Added");
//                 title.value = "";
//                 price.value = "";
//                 description.value = "";
//                 rating.rate.value = "";
//                 category.value = "";
//                 idInput.value = "";
//                 image.value="";
                

//             }
//         } catch (err) {
//             console.error(err);
//         }
//     }
// });

// async function getData() {
//     try {
//         let response = await fetch(url);
//         if (response.ok) {
//             let data = await response.json();
//             displayData(data);
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }

// function displayData(products) {
//     container.innerHTML = "";
//     products.forEach(obj => {
//         let item = document.createElement("div");
//         item.innerHTML = `
//             <p class="title">${obj.title}</p>
//             <img src='${obj.image}' class='image'>
//             <p class="description">${obj.description}</p>
//             <p class="price"> ${obj.price}</p>
//             <p class="rating"> ${obj.rating.rate}</p>
        
//             <button onclick="deleteData('${obj.id}')">Delete</button>
//             <button onclick="updateData('${obj.id}')">Update</button>
//         `;
//         container.appendChild(item);
//     });
// }

// async function updateData(id) {
//     try {
//         let response = await fetch(`${url}/${id}`);
//         if (response.ok) {
//             let obj = await response.json();


//             title.value = obj.title;
//             price.value = obj.price;
//             description.value = obj.description;
//             rating.value = obj.rating.rate; 
//             category.value = obj.category;
//             idInput.value = obj.id;
//             imageUrl = obj.image;



           
//             window.scroll({
//                 top: 0,
//                 behavior: "smooth"
//             });
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }

// async function deleteData(id) {
//     try {
//         let response = await fetch(`${url}/${id}`, { method: "DELETE" });
//         if (response.ok) {
//             getData();
//             alert("Data Deleted");
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }


// getData();


// 234567iyukhjfdtrew3sxfdcvb

// let container = document.getElementById("container");
// let url = "http://localhost:3000/products";

// let loader=document.getElementById("loader")
// let title = document.getElementById("title");
//     let description = document.getElementById("description");
//     let category=document.getElementById("category")
//     let price = document.getElementById("price");
//     let rating=document.getElementById("rating");
//     let idInput = document.getElementById("id");
//      let btn = document.getElementById("btn");

// btn.addEventListener("click", async function () {
//     if (title.value == "" ||  description.value == ""||category.value==""||  price.value == "" ||rating.value=="") {
//         alert("enter data properly");
//     } else {
//         let method = idInput.value ? "PUT" : "POST";
//         let mainUrl = (method == "PUT") ? `${url}/${idInput.value}` : url;
//         try {
//             let response = await fetch(mainUrl, {
//                 method,
//                 "headers": {
//                     "Content-Type": "application/json"
//                 },
//                 "body": JSON.stringify({
//                     "title": titleInput.value,
//                     "price": priceInput.value,
//                     "description": descriptionInput.value,
//                     "rating": rating.value,
//                     "category":category.value
                  

//                 })
//             });
//             if (response.ok) {
//                 getData();
//                 alert((method == "PUT") ? "Data Updated" : "Data Added");
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     }
// });

// async function getData() {
//     try {
//         let response = await fetch(url);
//         if (response.ok) {
//             let data = await response.json();
//             displayData(data);
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }
// function displayData(products) {
//     container.innerHTML = ``;
//     products.forEach(obj => {
//         let item = document.createElement("div");
//         item.innerHTML = `
        
//             <p class="title">${obj.title}</p>
//              <img src='${obj.image}'class='image'>
//             <p class="description">${obj.description}</p>
//             <p class="price">${obj.price}</p>
//             <P class="rating">${obj.rating.rate}</p>
//             <button onclick = deleteData('${obj.id}')>Delete</button>
//             <button onclick = updateData('${obj.id}')>Update</button>
//         `;
//         container.appendChild(item);
//     })
//     document.body.appendChild(container);
// }

// async function updateData(id) {
//     try {
//         let response = await fetch(`${url}/${id}`);
//         let obj = await response.json();
//         titleInput.value = obj.title;
//         priceInput.value = obj.price;
//         descriptionInput.value = obj.description;
//         rating.value= obj.value,
//         category.value=obj.value
      
        
//         idInput.value = obj.id;
//         window.scroll({
//             top: 0,
//             behavior: "smooth"
//         });

//     } catch (err) {
//         console.error(err)
//     }
// }

// async function deleteData(id) {
//     try {
//         let response = await fetch(`${url}/${id}`, { "method": "DELETE" })
//         if (response.ok) {
//             getData();
//             alert("Data Deleted");
//         }
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// getData();


// 1234567
// -----------------------------123456

// btn.addEventListener("click", async function () {}

//     let title = document.getElementById("title");
//     let description = document.getElementById("description");
//     let category=document.getElementById("category")
//     let price = document.getElementById("price");
//     let rating=document.getElementById("rating");
//     let idInput = document.getElementById("id");
//      let btn = document.getElementById("btn");
     
//      btn.addEventListener("click", async function () {
//         if (titleInput.value == '' || priceInput.value == "" || descriptionInput.value == '') {
//             alert("enter data properly");
//         } else {
//             let method = idInput.value ? "PUT" : "POST";
//             let mainUrl = (method == "PUT") ? `${url}/${idInput.value}` : url;
//             try {
//                 let response = await fetch(mainUrl, {
//                     method,
//                     "headers": {
//                         "Content-Type": "application/json"
//                     },
//                     "body": JSON.stringify({
                        
//                         "title": titleInput.value,
//                         "price": priceInput.value,
//                         "description": descriptionInput.value
//                     })
//                 });
//                 if (response.ok) {
//                     getData();
//                     alert((method == "PUT") ? "Data Updated" : "Data Added");
//                 }
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//     });
    
  
    // if (title.value == "" ||  description.value == ""||category.value==""||  price.value == "" ||rating.value=="") {
    //     alert("Enter data properly");
    // }
    // else {
    //     let options = {
    //         "method": "POST",
    //         "headers": {
    //             "Content-Type": "application/json"
    //         },
    //         "body": JSON.stringify({
    //             "title": title.value,
    //             "description": description.value,
    //             "category":category.value,
    //             "price": price.value,
    //             "rating":rating.value,
                
            
    //         })
    //     }
//         fetch("https://puzzled-brazen-aphid.glitch.me/products", options)
//             .then(res => {
//                 if (res.ok) {
//                     title.value = '';
//                     price.value = '';
//                     description.value = '';
//                     rating.value='';
//                     category.value='';
                   
                 
//                     getData(); // mandatory
//                     alert("Data Added");
//                 }
//             })
//     }
// })


// async function getData() {
//     fetch("https://puzzled-brazen-aphid.glitch.me/products")
//         .then(res => res.json())
//         .then(data => displayData(data));
// }
// function displayData(products) {
// // console.log(products)
//     container.innerHTML = ``; // mandatory
//     products.forEach(obj => {
//         let item = document.createElement("div");
//         // item.className="item";
//         item.innerHTML = `
//             <p class="title">${obj.title}</p>
//             <p class="description">${obj.description}</p>
//             <p class="category">${obj.category}<P>
//             <p class="price">${obj.price}</p>
//             <img src='${obj.image}' class="image">
//             <button onclick = deleteData('${obj.id}')>Delete</button>
//         `;
  
//         loader.remove()
//         container.appendChild(item);
//     })
// }

// function deleteData(id) {
//     console.log(id)
//     let options = {
//         "method": "DELETE"
//     }
//     fetch(`https://puzzled-brazen-aphid.glitch.me/products/${id}`, options)
//         .then(res => {
//             if (res.ok) {
//                 getData(); // mandatory
//                 alert("Data Deleted");
//             }
//         })
//         .catch(err => console.error(err));
     
// }
// getData();

