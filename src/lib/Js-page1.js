const ArrayData = [{
    fechaActual: "2022-01-01",
    eventos: [{
            "id": 1,
            "image": '../assets/eventsImages/event1.jpg',
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            'id': 2,
            "image": '../assets/eventsImages/event2.jpg',
            "name": "Korean style",
            "date": "2021-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            'id': 3,
            "image": "../assets/eventsImages/event3.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            'id': 4,
            "image": "../assets/eventsImages/event4.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            'id': 5,
            "image": "../assets/eventsImages/event5.jpg",
            "name": "2022 Academy Awards",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            'id': 6,
            "image": "../assets/eventsImages/event6.jpg",
            "name": "2022 World Athletics Championships",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Sports",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            'id': 7,
            'image': '../assets/eventsImages/event7.jpg',
            'name': '2023 World Athletics Championships',
            'date': '2023-08-05',
            'description': 'The 2023 World Athletics Championships will be held in Budapest, Hungary from August 5-13, 2023.',
            'category': 'Sports',
            'place': 'Budapest, Hungary',
            'capacity': 40000,
            'estimate': 38000,
            'price': 150
        },

        {
            'id': 8,
            'image': '../assets/eventsImages/event8.jpg',
            'name': '2023 Venice Film Festival',
            'date': '2023-09-06',
            'description': 'The 2023 Venice Film Festival will take place from September 6-16, 2023.',
            'category': 'Sports',
            'place': 'Venice, Italy',
            'capacity': 1000,
            'estimate': 950,
            'price': 500
        },

        {
            'id': 9,
            'image': '../assets/eventsImages/event9.jpg',
            'name': '2023 Paris Fashion Week',
            'date': '2023-10-01',
            'description': 'The 2023 Paris Fashion Week will be held from October 1-9, 2023.',
            'category': 'Sports',
            'place': 'Paris, France',
            'capacity': 5000,
            'estimate': 4800,
            'price': 750
        },

        {
            'id': 10,
            'image': '../assets/eventsImages/event10.jpg',
            'name': '2023 Berlin Marathon',
            'date': '2023-09-24',
            'description': 'The 2023 Berlin Marathon will take place on September 24, 2023.',
            'category': 'Sports',
            'place': 'Berlin, Germany',
            'capacity': 40000,
            'estimate': 38500,
            'price': 100
        },

        {
            'id': 11,
            'image': '../assets/eventsImages/event11.jpg',
            'name': '2023 Barcelona Jazz Festival',
            'date': '2023-10-20',
            'description': 'The 2023 Barcelona Jazz Festival will be held from October 20-30, 2023.',
            'category': 'Music',
            'place': 'Barcelona, Spain',
            'capacity': 2000,
            'estimate': 1950,
            'price': 80
        },

        {
            'id': 12,
            'image': '../assets/eventsImages/event12.jpg',
            'name': '2023 Super Bowl',
            'date': '2023-02-05',
            'description': 'The 2023 Super Bowl will be held on February 5, 2023 in Phoenix, Arizona.',
            'category': 'Sports',
            'place': 'Phoenix, Arizona, USA',
            'capacity': 70000,
            'estimate': 68500,
            'price': 500
        },
        {
            'id': 13,
            'image': '../assets/eventsImages/event13.jpg',
            'name': '2023 Academy Awards',
            'date': '2023-03-26',
            'description': 'The 95th Academy Awards ceremony will be held on March 26, 2023 at the Dolby Theatre in Hollywood, Los Angeles, California.',
            'category': 'Film',
            'place': 'Los Angeles, California',
            'capacity': 3400,
            'estimate': 3300,
            'price': 500
        },
        {
            'id': 14,
            'image': '../assets/eventsImages/event14.jpg',
            'name': '2023 Wimbledon Championships',
            'date': '2023-06-26',
            'description': 'The 2023 Wimbledon Championships will be held from June 26 to July 9, 2023 at the All England Lawn Tennis and Croquet Club in London, England.',
            'category': 'Sports',
            'place': 'London, England',
            'capacity': 42000,
            'estimate': 41000,
            'price': 300
        },

        {
            'id': 15,
            'image': '../assets/eventsImages/event15.jpg',
            'name': '2023 Edinburgh Fringe Festival',
            'date': '2023-08-04',
            'description': 'The 2023 Edinburgh Fringe Festival will be held from August 4-28, 2023 in Edinburgh, Scotland.',
            'category': 'Theater',
            'place': 'Edinburgh, Scotland',
            'capacity': 2000,
            'estimate': 1900,
            'price': 50
        },

        {
            'id': 16,
            'image': '../assets/eventsImages/event16.jpg',
            'name': '2023 Oktoberfest',
            'date': '2023-09-16',
            'description': 'The 2023 Oktoberfest will be held from September 16 to October 3, 2023 in Munich, Germany.',
            'category': 'Festival',
            'place': 'Munich, Germany',
            'capacity': 60000,
            'estimate': 57000,
            'price': 20
        }
    ]
}]

let arrayTemplateHome;

ArrayData.forEach(data => {
    arrayTemplateHome = data.eventos
})


function resetTemplateCardHome() {
    document.querySelector("#TemplateCardHome").innerHTML = ''
}

function newCard(evento) {
    let divForCard = document.createElement("div");
    divForCard.className = "col-lg-3 col-sm-6";
    divForCard.innerHTML = `<div class="card h-100" style="max-width: 400px;">
    <img src="${evento.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="bi bi-calendar-event-fill me-2"></i>${evento.date}</li>
      <li class="list-group-item"><i class="bi bi-bookmark-star-fill me-2"></i>${evento.category}</li>
      <li class="list-group-item"><i class="bi bi-people-fill me-2"></i>${evento.capacity}</li>
      <li class="list-group-item"><i class="bi bi-geo-alt-fill me-2"></i>${evento.place}</li>
      <li class="list-group-item"><i class="bi bi-currency-exchange me-2"></i>${evento.price}</li>
    </ul>
    <div class="card-footer">
      <a href="./details.html" class="btn btn-primary w-100" onclick="detalleCard(${evento.id})">View Details</a>
    </div>
  </div>
  `;
    return divForCard;
}

function tarjetasHome(eventos) {
    let divCarouselActive = document.createElement("div");
    divCarouselActive.className = "carousel-item active";
    divCarouselActive.innerHTML = `<div class="container">
            <div class="row" id="card_template"> 
            </div>
          </div>
          `;

    if (eventos.length < 4) {
        for (let i = 0; i < eventos.length; i++) {
            let card = newCard(eventos[i]);
            divCarouselActive.querySelector("#card_template").appendChild(card);
        }
        document.getElementById("TemplateCardHome").appendChild(divCarouselActive)
    } else {
        for (let i = 0; i < 4; i++) {
            let card = newCard(eventos[i]);
            divCarouselActive.querySelector("#card_template").appendChild(card);
        }
        document.getElementById("TemplateCardHome").appendChild(divCarouselActive)
    }

    for (let i = 4; i < eventos.length; i += 4) {

        let divCarouselGeneral = document.createElement('div');
        divCarouselGeneral.className = 'carousel-item';
        divCarouselGeneral.innerHTML = `<div class="container">
              <div class="row" id="card_template"> 
              </div>
            </div>
            `;

        for (let j = i; j < i + 4; j++) {

            if (eventos[j] != undefined) {
                let card = newCard(eventos[j]);
                divCarouselGeneral.querySelector('#card_template').appendChild(card);
            }
        }
        document.getElementById('TemplateCardHome').appendChild(divCarouselGeneral);
    }
}
const details_card = document.querySelector("details_card");

function detalleCard(id) {
    for (let i = 0; i < ArrayData.eventos.length; i++) {
        if (ArrayData.eventos[i].id === parseInt(id)) {
            localStorage.clear();
            return localStorage.setItem(
                "detail_temp",
                JSON.stringify(ArrayData.eventos[i])
            );
        }
    }
}

newCard(arrayTemplateHome);
tarjetasHome(arrayTemplateHome);


// filtering data
let categoriasUnique = [];

function categoriasUnicas(Data) {
    Data.forEach((data) => {
        for (let i = 0; i < data.eventos.length; i++) {
            if (!categoriasUnique.includes(data.eventos[i].category)) {
                categoriasUnique.push(data.eventos[i].category);
            }
        }
    });
}

categoriasUnicas(ArrayData);

function newCategory(categoryUnique) {

    const divCategory = document.createElement('div');
    divCategory.innerHTML = `
    <li class="nav-item" >
                            <input type="checkbox" id="${categoryUnique}" class="class_check"  onclick="getValueCheckbox()" value="${categoryUnique}">
                            <label class="text-dark" for="${categoryUnique}">${categoryUnique}</label>
                        </li>`
    return divCategory;
}

function templateCategoryCheckboxHome() {

    const rowCategory = document.querySelector('#templateCategory');

    for (let i = 0; i < categoriasUnique.length; i++) {
        const templateCategoryCheckbox = newCategory(categoriasUnique[i])
        rowCategory.appendChild(templateCategoryCheckbox)
    }
}

let templateCategory = [];

function getValueCheckbox() {

    let filtrado; // almacenar nuevo objeto filtrado 
    let arrayHome; // array de eventos inicial

    let MultiCheckedCategory = Array.from(document.querySelectorAll('.class_check:checked')).map(val => val.value)

    ArrayData.forEach(data => {
        arrayHome = data.eventos;
        filtrado = data.eventos.filter(data => MultiCheckedCategory.includes(data.category))
    })

    if (MultiCheckedCategory.length > 0) {
        resetTemplateCardHome();
        tarjetasHome(filtrado);
    } else {
        resetTemplateCardHome();
        tarjetasHome(arrayHome);
    }
}

templateCategoryCheckboxHome();

function searchCards() {
    // Obtener referencia al campo de búsqueda y al contenedor del carrusel
    const searchInput = document.querySelector('#search');
    const carouselContainer = document.querySelector('#carousel2-container');


    // Agregar un evento "input" al campo de búsqueda
    searchInput.addEventListener('input', function(event) {
        // Obtener el valor del campo de búsqueda
        const searchTerm = event.target.value.trim().toLowerCase();

        // Iterar sobre cada diapositiva del carrusel
        const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            // Obtener las tarjetas (cards) de la diapositiva actual
            const cards = item.querySelectorAll('.card');
            let filteredCards = [];

            // Iterar sobre cada tarjeta de la diapositiva actual
            cards.forEach(card => {
                const eventName = card.querySelector('.card-title').textContent.trim().toLowerCase();

                // Si la tarjeta coincide con el término de búsqueda, agregarla a la lista de tarjetas filtradas
                if (eventName.includes(searchTerm)) {
                    filteredCards.push(card);
                } else {
                    // Ocultar la card si no coincide con la búsqueda
                    card.style.display = 'none';
                }
            });

            // Mostrar solo las tarjetas filtradas
            filteredCards.forEach(card => card.style.display = 'block');
        });
    });

}

// Llamar a la función de búsqueda
searchCards();