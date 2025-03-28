const upcomingEvents = [
  {
    id: 1,
    title: "Fitness Bootcamp & Wellness Day",
    day: "13",
    month: "Dec",
    description:
      "Join expert-led fitness sessions, yoga, and wellness talks. Get a fresh start with health-focused meals and energizing group workouts!",
  },
  {
    id: 2,
    title: "Annual Golf Championship",
    day: "20",
    month: "Dec",
    description:
      "Compete with top golf players and enjoy a day on the greens. Open for all skill levels!",
  },
  {
    id: 3,
    title: "Gala Night & Dinner",
    day: "25",
    month: "Dec",
    description:
      "An evening of fine dining, live music, and networking. Dress code: Formal.",
  },
  {
    id: 4,
    title: "Tennis Doubles Tournament",
    day: "23",
    month: "Dec",
    description:
      "Pair up and compete in an exciting tennis tournament. Prizes for the winners!",
  },
  {
    id: 5,
    title: "New Year's Eve Party",
    day: "31",
    month: "Dec",
    description:
      "Ring in the new year with a grand celebration, fireworks, and a live DJ!",
  },
  {
    id: 6,
    title: "Sunday Brunch & Networking",
    day: "5",
    month: "Jan",
    description:
      "Relax and enjoy a delicious brunch while meeting fellow club members and professionals.",
  },
];
const pastEvents = [
  {
    title: "Spring Tennis Championship",
    day: 10,
    month: "Jun",
    description:
      "A thrilling tennis tournament featuring top players from the club. The finals were intense, with an exciting finish that had the audience on their feet!",
  },
  {
    title: "Annual Gala Dinner",
    day: 15,
    month: "Jun",
    description:
      "An elegant evening with live music, a gourmet dinner, and awards for outstanding club members. A night of sophistication and celebration!",
  },
  {
    title: "Summer Golf Tournament",
    day: 20,
    month: "Jun",
    description:
      "A challenging yet enjoyable golf tournament that brought together enthusiasts from all skill levels. The lush greens and competitive spirit made it a memorable event.",
  },
  {
    title: "Fitness & Wellness Retreat",
    day: 25,
    month: "Jun",
    description:
      "A refreshing day focused on fitness, mindfulness, and relaxation. Members enjoyed expert-led yoga sessions, meditation, and wellness talks.",
  },
  {
    title: "Cultural Music Night",
    day: 28,
    month: "Jun",
    description:
      "An enchanting evening filled with live performances, cultural dances, and a showcase of diverse musical talents from club members.",
  },
  {
    title: "Networking & Business Brunch",
    day: 30,
    month: "Jun",
    description:
      "A fantastic opportunity for professionals to connect, share ideas, and expand their networks over a delicious brunch at the club.",
  },
];

const eventsContent = document.getElementById("events");
const pastEventContainer = document.getElementById("pastEvents");
console.log(eventsContent);
let upEventStatment = ``;
let pastEventStatment = ``;

upcomingEvents.map((i) => {
  upEventStatment += `<div class="eventscard row">
          <div class="date">
            <p>${i.day}</p>
            <p>${i.month}</p>
          </div>
          <div
            class="eventscard_img col-4"
            style="background-color: #eb5310"
          ></div>
          <div
            class="eventscard_content d-flex justify-content-around flex-column align-items-left col-8"
          >
            <h3>${i.title}</h3>
            <p>
              ${i.description}
            </p>
          </div>
        </div>`;
});
eventsContent.innerHTML = upEventStatment;

pastEvents.map((i) => {
  pastEventStatment += `<div class="eventscard row">
          <div class="date">
            <p>${i.day}</p>
            <p>${i.month}</p>
          </div>
          <div
            class="eventscard_img col-4"
            style="background-color: #eb5310"
          ></div>
          <div
            class="eventscard_content d-flex justify-content-around flex-column align-items-left col-8"
          >
            <h3>${i.title}</h3>
            <p>
              ${i.description}
            </p>
          </div>
        </div>`;
});
pastEventContainer.innerHTML = pastEventStatment;
