const TeamSection = document.getElementById("team-section");
const shuffleBtnContainer = document.getElementById("button-container");

shuffleBtnContainer.innerHTML = `<button onclick=shuffleUsers()>Click here to shuffel</button>`;

var users = [
  {
    id: 1,
    name: "Oliver",
    age: 25,
    imgSrc: "images/1.jpg",
    title: "Speak up",
    availability: true,
  },
  {
    id: 2,
    name: "Ola",
    age: 30,
    imgSrc: "images/10.jpg",
    title: "Ear Damger",
    availability: true,
  },
  {
    id: 3,
    name: "Ramesh",
    age: 25,
    imgSrc: "images/6.png",
    title: "Silent Still Alive",
    availability: true,
  },
  {
    id: 4,
    name: "Norman",
    imgSrc: "images/4.jpeg",
    title: "Talks a lot",
    age: 25,
    availability: true,
  },
  {
    id: 5,
    name: "Viking V.",
    imgSrc: "images/12.jpg",
    title: "Team talkative",
    age: 25,
    availability: true,
  },
  {
    id: 6,
    name: "Henrik",
    imgSrc: "images/5.jpg",
    title: "world is about to end",
    age: 25,
    availability: true,
  },
  {
    id: 7,
    name: "Aasha G.",
    imgSrc: "images/7.jpg",
    title: "lets talk more",
    age: 26,
    availability: true,
  },
  {
    id: 8,
    name: "Leo L.",
    imgSrc: "images/8.jpg",
    title: "Talk same always",
    age: 25,
    availability: true,
  },
  {
    id: 9,
    name: "Su Ann",
    imgSrc: "images/11.jpg",
    title: "today is her talk day",
    age: 10,
    availability: true,
  },
  {
    id: 10,
    name: "Victor",
    imgSrc: "images/9.jpg",
    title: "let me talk,please",
    age: 20,
    availability: true,
  },
];

const shuffleUsers = () => {
  var currentIndex = users.length;

  // Iterate over each element in the array
  while (currentIndex !== 0) {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the current element with the random element
    var temporaryValue = users[currentIndex];
    users[currentIndex] = users[randomIndex];
    users[randomIndex] = temporaryValue;
  }
  console.log(users);

  printCards();

  return users;
};

const offline = (e) => {
  console.log(e.id);
  users = users.map((item) => {
    if (item.id == e.id) {
      return { ...item, availability: false };
    } else {
      return item;
    }
  });
  printCards();
};

const online = (e) => {
  console.log(e.id);
  users = users.map((item) => {
    if (item.id == e.id) {
      return { ...item, availability: true };
    } else {
      return item;
    }
  });
  printCards();
};

const printCards = () => {
  TeamSection.innerHTML = "";
  TeamSection.innerHTML += users
    .map((item) => {
      return `
    <div class="profile-card">
    ${
      item.availability
        ? `<div onclick=offline(this) id=${item.id} class="badge-green">wants to speak</div>`
        : `<div onclick=online(this) id=${item.id} class="badge-red" >Doesnt want to speak</div>`
    }

        <img src=${item.imgSrc} class="team-image" alt="" />
        <div class="card-title">
          <h2 class="primary-text">${item.name}</h2>
          <div class="description"></div>
          <p class="secondary-text">${item.title}</p>
          <p class="secondary-text">${item.age + " years old"}</p>
        </div>
      </div>
    `;
    })
    .join("");
};

printCards();
