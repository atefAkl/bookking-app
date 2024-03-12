/* Eslint window */
const Hotels = [
  {
    id: 1,
    stars: 6,
    city: "Hurghada",
    name: "El Gouna Tourist Resort",
    desc: "El Gouna is a tourist resort located in Hurghada on the Red Sea coast. The resort dates back to 1990 when Orascom Hotels and Development developed it on a group of islands as one of its tourism projects. El Gouna is 22 km north of Hurghada International Airport, 470 km from Cairo",
    cover: "/images/hotels/elgouna-cover.png",
    image: "/images/hotels/El_Gouna_02.jpg",
    rating: [0, 500, 2000, 75, 1000],
    prices: [
      {
        name: "Single Room",
        min: 50,
        max: 120,
        meals: "Breakfast, Dinner",
        remain: 22,
      },
      {
        name: "Double Room",
        min: 80,
        max: 180,
        meals: "Breakfast, Dinner",
        remain: 9,
      },
      {
        name: "Suit 2 rooms",
        min: 220,
        max: 500,
        meals: "Breakfast, Dinner",
        remain: 2,
      },
    ],
    offers: [],
    history: [
      "Thirty years ago Samih Sawiris, Chairman of Orascom Development Holding, El Gouna’s parent company, found that beautiful spot, conveniently located just north of Hurghada on the west coast of the Red Sea. It wasn’t long before Sawiris’ friends, struck by the splendor of the azure waters and dramatic backdrop of mountains, asked to join him, and the town slowly blossomed into the vibrant community that it is today.",
    ],
    contact: [
      {
        type: "Phone Number",
        val: "+20653549702",
      },
      {
        type: "Fax Number",
        val: "+20653549065",
      },
      {
        type: "Customer Support Email",
        val: "info@elgouna.com",
      },
    ],
    images: [
      "/images/hotels/elg-AmUniv.jpg",
      "/images/hotels/El-gouna1.jpg",
      "/images/hotels/elg-sea-view.jpg",
      "/images/hotels/elg-turtles-hour.jpg",
      "/images/hotels/Elg-Yakts.jpg",
    ],
  },
  ///////////////////////////////////////////////////End Of Hotel Object Data
  {
    id: 2,
    stars: 5,
    city: "Luxur",
    name: "Winter Palace Hotel",
    desc: "Winter Palace Hotel, also known as Old Winter Palace Hotel, is a historic 5-star hotel and resort located on the east bank of the Nile in Luxor, close to the Temple of Luxor (to the south of it), with 86 rooms and 6 suites, owned and operated by Legacy Hotels, a subsidiary of Talaat Moustafa Group.",
    cover: "/images/hotels/winter-cover.jpg",
    image: "/images/hotels/Winter_Palace_main.jpg",
    rating: [0, 5000, 200, 75, 12],
    prices: [
      {
        name: "Single Room",
        min: 60,
        max: 130,
        meals: "Breakfast, Dinner",
        remain: 30,
      },
      {
        name: "Double Room",
        min: 100,
        max: 220,
        meals: "Breakfast, Dinner",
        remain: 17,
      },
      {
        name: "Flat Room",
        min: 250,
        max: 600,
        meals: "Breakfast, Dinner",
        remain: 2,
      },
    ],
    offers: [],
    history: [
      "Thirty years ago Samih Sawiris, Chairman of Orascom Development Holding, El Gouna’s parent company, found that beautiful spot, conveniently located just north of Hurghada on the west coast of the Red Sea. It wasn’t long before Sawiris’ friends, struck by the splendor of the azure waters and dramatic backdrop of mountains, asked to join him, and the town slowly blossomed into the vibrant community that it is today.",
    ],
    contact: [
      {
        type: "Phone Number",
        val: "+20653549702",
      },
      {
        type: "Fax Number",
        val: "+20653549065",
      },
      {
        type: "Customer Support Email",
        val: "info@elgouna.com",
      },
    ],
    images: [
      "/images/hotels/elg-AmUniv.jpg",
      "/images/hotels/El-gouna1.jpg",
      "/images/hotels/elg-sea-view.jpg",
      "/images/hotels/elg-turtles-hour.jpg",
      "/images/hotels/Elg-Yakts.jpg",
    ],
  },
  {
    id: 3,
    city: "Aswan",
    name: "Kempinski Hotel Soma Bay",
    desc: "Kempinski Hotel Soma Bay is a five-star hotel belonging to the Kempinski Hotel chain, located in Soma Bay, Egypt.The hotel opened in 2009 and has 325 rooms and suites, three restaurants, one large bar, a resort, and a small exercise room.",
    cover: "/images/hotels/Kempinski-cover.jpeg",
    image: "/images/hotels/camb-main.jpg",
    rating: [0, 500, 200, 4000, 120],
    prices: [
      {
        name: "Single Room",
        min: 50,
        max: 120,
        meals: "Breakfast, Dinner",
        remain: 22,
      },
      {
        name: "Double Room",
        min: 80,
        max: 180,
        meals: "Breakfast, Dinner",
        remain: 9,
      },
      {
        name: "Flat Room",
        min: 220,
        max: 500,
        meals: "Breakfast, Dinner",
        remain: 2,
      },
    ],
    offers: [
      {
        offer: "Discount 50% returnd clients",
        endsIn: "20/4/2024",
        status: false,
      },
      {
        offer: "extra meal for double rooms",
        endsIn: "20/5/2024",
        status: true,
      },
    ],
    history: [
      "Thirty years ago Samih Sawiris, Chairman of Orascom Development Holding, El Gouna’s parent company, found that beautiful spot, conveniently located just north of Hurghada on the west coast of the Red Sea. It wasn’t long before Sawiris’ friends, struck by the splendor of the azure waters and dramatic backdrop of mountains, asked to join him, and the town slowly blossomed into the vibrant community that it is today.",
    ],
    contact: [
      {
        type: "Phone Number",
        val: "+20653549702",
      },
      {
        type: "Fax Number",
        val: "+20653549065",
      },
      {
        type: "Customer Support Email",
        val: "info@elgouna.com",
      },
    ],
    images: [
      "/images/hotels/k_1.jpeg",
      "/images/hotels/El-gouna1.jpg",
      "/images/hotels/elg-sea-view.jpg",
      "/images/hotels/elg-turtles-hour.jpg",
      "/images/hotels/Elg-Yakts.jpg",
    ],
  },
];

function renderList(arr) {
  const content = arr.map((hotel) => {
    const [votes, rate] = calcRating(hotel.rating);

    return `
      <div class="box">
          <div class="card-img" style="background-image: url('${
            hotel.image
          }')"></div>
          <div class="card-content">
              <h1>${hotel.name}</h1>
              <h5>${hotel.city}</h5>
              <p>${hotel.desc}</p>
              <p> [${votes}] <span style="color: ${setStarsColor(
      rate
    )}">${drowStars(rate)}</span> [${rate}]</p>
              <a href="/pages/hotel.html?id=${
                hotel.id
              }" class="explore">Explore Offers</a>
          </div>
      </div>`;
  });
  return content;
}

function calcRating(arr) {
  const totalvotes = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const rate = (
    (arr[0] * 1 + arr[1] * 2 + arr[2] * 3 + arr[3] * 4 + arr[4] * 5) /
    totalvotes
  ).toFixed(2);
  return [totalvotes, rate];
}

function createStar(rate) {
  if (rate <= 0) {
    return `<i class="fas fa-star"></i>`;
  } else {
    if (rate < 1) {
      return `<i class="fas fa-star-half-alt"></i>`;
    } else {
      return `<i class="far fa-star"></i>`;
    }
  }
}
function setStarsColor(rate) {
  if (rate <= 1) {
    return "#F20D2D";
  }
  if (rate > 1 && rate <= 2) {
    return "#F7680C";
  }
  if (rate > 2 && rate <= 3) {
    return "#F78E12";
  }
  if (rate > 3 && rate <= 4) {
    return "#F5C71B";
  }
  if (rate > 4) {
    return "#F3DE02";
  }
}

function drowStars(rate) {
  x = "";
  for (let l = 1; l <= 5; l++) {
    let n = l - rate;
    x += createStar(n);
  }
  return x;
}
