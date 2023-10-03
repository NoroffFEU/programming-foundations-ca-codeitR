const TeamSection = document.getElementById("team-section");
const shuffleBtnContainer = document.getElementById("button-container");

shuffleBtnContainer.innerHTML = `<button onclick=shuffleUsers()>Click here to huffel and left top card goes first</button>`;

var users = [
  {
    id: 1,
    name: "Oliver",
    imgSrc: "images/1.jpg",
    title: "One Way Traffic",
    availability: true,
  },
  {
    id: 2,
    name: "Talitha",
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
    name: "Martin",
    imgSrc: "images/4.jpeg",
    title: "Talks a lot",
    availability: true,
  },
  {
    id: 5,
    name: "Helen",
    imgSrc: "images/12.jpg",
    title: "Team talkative",
    availability: true,
  },
  {
    id: 6,
    name: "Mariya",
    imgSrc: "images/5.jpg",
    title: "world is about to end",
    availability: true,
  },
  {
    id: 7,
    name: "Aaisha",
    imgSrc: "images/7.jpg",
    title: "lets talk more",
    availability: true,
  },
  {
    id: 8,
    name: "Neil",
    imgSrc: "images/8.jpg",
    title: "Talk same always",
    availability: true,
  },
  {
    id: 9,
    name: "Su Ann",
    imgSrc: "images/11.jpg",
    title: "today is her talk day",
    availability: true,
  },
  {
    id: 10,
    name: "Victor",
    imgSrc: "images/9.jpg",
    title: "let me talk,please",
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
        </div>
      </div>
    `;
    })
    .join("");
};

printCards();