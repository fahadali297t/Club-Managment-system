const reviews = [
  {
    name: "Ali Raza",
    field: "Fitness Enthusiast",
    review:
      "Gymkhana Club has been a game-changer for my fitness journey. The state-of-the-art facilities and expert trainers have helped me achieve my goals faster than ever. Highly recommend it to anyone serious about fitness!",
    imgSrc: "./assets/images/reviewer1.jpg",
  },
  {
    name: "Sarah Khan",
    field: "Corporate Lawyer",
    review:
      "The Gymkhana Club is my go-to place to unwind after a hectic day. Whether it's a tennis match, a relaxing spa session, or just a quiet evening at the lounge, this club offers the perfect escape from city life.",
    imgSrc: "./assets/images/reviewer2.jpg",
  },
  {
    name: "Usman Ahmed",
    field: "Entrepreneur",
    review:
      "From networking events to golf tournaments, Gymkhana Club provides an excellent social and professional environment. I've made some great business connections here while enjoying top-class facilities.",
    imgSrc: "./assets/images/reviewer3.jpg",
  },
  {
    name: "Ayesha Malik",
    field: "Doctor",
    review:
      "The wellness programs at Gymkhana are fantastic! Yoga, meditation, and spa therapies have significantly improved my work-life balance. The serene environment is just what I need to de-stress.",
    imgSrc: "./assets/images/reviewer4.jpg",
  },
  {
    name: "Hassan Siddiqui",
    field: "Software Engineer",
    review:
      "As someone who enjoys both fitness and tech, I love the modern approach Gymkhana Club has taken. The digital booking system, personalized training plans, and high-end equipment make my visits smooth and enjoyable.",
    imgSrc: "./assets/images/reviewer5.jpg",
  },
  {
    name: "Maria Aslam",
    field: "Artist",
    review:
      "I find so much inspiration at the Gymkhana Club, whether it’s through the art exhibitions, music nights, or cultural meetups. It’s a great place for creative minds to gather and share ideas.",
    imgSrc: "./assets/images/reviewer6.jpg",
  },
];

const reviewCards = document.querySelector(".review_cards");
let reviewStatment = ``;
reviews.map((i) => {
  reviewStatment += `<div class="review">
            <span style="color: #eb5310"
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i
            ></span>
            <p>
              ${i.review}
            </p>
            <div
              class="lowerContent d-flex justify-content-between align-items-center"
            >
              <span
                class="d-flex align-items-center justify-content-center gap-3"
              >
                <img src="${i.imgSrc}" alt="" />
                <span
                  ><h4 class="text-center">${i.name}</h4>
                  <p >${i.field}</p></span
                >
              </span>
              <i
                style="font-size: 3rem; color: #eb5310"
                class="fa-solid fa-quote-right"
              ></i>
            </div>
          </div>`;
});
reviewCards.innerHTML = reviewStatment;
