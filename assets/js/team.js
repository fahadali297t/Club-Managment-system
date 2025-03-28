const eventsData = [
  {
    source: "./assets/images/team8.jpg",
    name: "Ayesha Khan",
    position: "CEO",
  },
  {
    source: "./assets/images/team9.jpg",
    name: "Hamza Malik",
    position: "General Manager",
  },
  {
    source: "./assets/images/team3.jpg",
    name: "Faisal Sheikh",
    position: "Fitness Trainer",
  },
  {
    source: "./assets/images/team4.jpg",
    name: "Bilal Ahmed",
    position: "Membership Coordinator",
  },
  {
    source: "./assets/images/team5.jpg",
    name: "Imran Raza",
    position: "Hospitality Manager",
  },
  {
    source: "./assets/images/team7.jpg",
    name: "Usman Javed",
    position: "Cricket Coach",
  },
  {
    source: "./assets/images/team6.jpg",
    name: "Zainab Ali",
    position: "Events Manager",
  },
  {
    source: "./assets/images/team1.jpg",
    name: "Daniyal Mirza",
    position: "Security and Operation Head",
  },
];

const teamContent = document.querySelector(".teamContent");
let teamCardStatment = ``;

eventsData.map((i) => {
  teamCardStatment += `<div class="teamCard mt-4">
          <div class="teamCard_img">
            <img src="${i.source}" alt="" />
          </div>
          <div class="teamCard_content">
            <h3 class="text-center">${i.name}</h3>
            <p class="text-center">${i.position}</p>
          </div>
        </div>`;
  teamContent.innerHTML = teamCardStatment;
});
