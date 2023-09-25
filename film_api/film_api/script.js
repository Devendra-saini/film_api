   // JavaScript to fetch and display data from the Swapi API
   const peopleTab = document.getElementById("people-tab");
   const filmsTab = document.getElementById("films-tab");
   const listContainer = document.getElementById("list-container");
   const detailContainer = document.getElementById("detail-container");
   const backButton = document.getElementById("back-button");
   const loader = document.getElementById("loader");

   // Function to fetch and display data based on the selected tab
   function fetchPeople(endpoint) {
          showLoader();
       // Fetch data from the Swapi API
       fetch(`https://swapi.dev/api/${endpoint}/`)
           .then(response => response.json())
           .then(data => {
               // Display the data in a list
               hideLoader();
               const items = data.results;
               console.log( typeof items);
               console.log( items);
               listContainer.innerHTML = "";
               items.forEach(item => {
                   const listItem = document.createElement("div");
                   listItem.classList.add("card");
                   listItem.innerHTML = `
                       <h2 class="card-header" >${item.name || item.title}</h2>
                       <div class=card-body>
                       <p>Gender: ${item.gender}</p>
                       <p>mass: ${item.mass}</p>
                       <p>height: ${item.height}</p>
                       <p>birth-year: ${item.birth_year}</p>
                       <p>Created On: ${item.created.substring(0, 10)}</p>
                       </div>
                   `;
                   listItem.addEventListener("click", () => {
                       showDetailPagePeople(item);
                   });
                   listContainer.appendChild(listItem);
               });
           });
   }
   function fetchFilm(endpoint) {
    showLoader();
    // Fetch data from the Swapi API
    fetch(`https://swapi.dev/api/${endpoint}/`)
        .then(response => response.json())
        .then(data => {
            // Display the data in a list
            hideLoader();
            const items = data.results;
            console.log( typeof items);
            console.log( items);
            listContainer.innerHTML = "";
            items.forEach(item => {
                const listItem = document.createElement("div");
                listItem.classList.add("card");
                listItem.innerHTML = `
                    <h2 class="card-header" >${item.name || item.title}</h2>
                    <div class=card-body>
                    <p>Director: ${item.director}</p>
                    <p>producer: ${item.producer}</p>
                    <p>release_date: ${item.release_date}</p>
                    <p>Created On: ${item.created.substring(0, 10)}</p>
                    </div>
                `;
                listItem.addEventListener("click", () => {
                    // Display the detail page when a list item is clicked
                    console.log(item.films);
                    console.log("hello");
                    showDetailPageFilm(item);
                });
                listContainer.appendChild(listItem);
            });
        });
}
  
   peopleTab.addEventListener("click", () => {
    listContainer.innerHTML = "";
       peopleTab.classList.add("active-tab");
       filmsTab.classList.remove("active-tab");
       fetchPeople("people");
   });

   filmsTab.addEventListener("click", () => {
    listContainer.innerHTML = "";
       filmsTab.classList.add("active-tab");
       peopleTab.classList.remove("active-tab");
       fetchFilm("films");
   });


 // show detail data for people
   function showDetailPagePeople(item)
   {
    
        const listItem = document.createElement("div");
        listItem.classList.add("card");
        listItem.innerHTML = `
            
            <h2 class="card-header" >${item.name || item.title}</h2>
            <div class=card-body>
            <p>Gender: ${item.gender}</p>
            <p>Mass: ${item.mass}</p>
            <p>Height: ${item.height}</p>
            <p>Birth-year: ${item.birth_year}</p>
            <p>Created On: ${item.created.substring(0, 10)}</p>
            <p>Edited On: ${item.edited.substring(0, 10)}</p>
            <p>Hair-color: ${item.hair_color}</p>
            <p>Eye_color: ${item.eye_color}</p>
            <p>Skin_color: ${item.skin_color}</p>
            <p>Edited On: ${item.edited.substring(0, 10)}</p>
           
            </div>
        `;
        detailContainer.appendChild(listItem);
        

 
      
      listContainer.style.display = "none";
      detailContainer.style.display = "block";
      backButton.style.display = "block";

   }
  // show detailed  data for film
   function showDetailPageFilm(item)
   {
    
        const listItem = document.createElement("div");
        listItem.classList.add("card");
        listItem.innerHTML = `
            
            <h2 class="card-header" >${item.name || item.title}</h2>
            <div class=card-body>
            <p>Director: ${item.director}</p>
            <p>Producer: ${item.producer}</p>
            <p>Release_date: ${item.release_date}</p>
            <p>Episode_id: ${item.episode_id}</p>
            <p>Created On: ${item.created.substring(0, 10)}</p>
            <p>Edited On: ${item.edited.substring(0, 10)}</p>
            <p>Opening Crawl: ${item.opening_crawl}</p>
            </div>
        `;
        detailContainer.appendChild(listItem);
        

    
      
      listContainer.style.display = "none";
      detailContainer.style.display = "block";
      backButton.style.display = "block";

   }

   // Event listener for the back button
   backButton.addEventListener("click", () => {
       listContainer.style.display = "flex";
       detailContainer.style.display = "none";
       backButton.style.display = "none";
       detailContainer.innerHTML='';

   });

  function showLoader() {
    loader.style.display = "block";
}

// Function to hide the loader
function hideLoader() {
    loader.style.display = "none";
}