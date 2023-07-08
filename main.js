//Hamburger menu icon
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', transformHamburger)

function transformHamburger() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

document.querySelectorAll('nav ul li a').forEach(el => 
    el.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
}))


// Testimonial

let userPics = document.getElementsByClassName('user-pic');
let userTexts = document.getElementsByClassName('user-text');

for (let i = 0; i < userPics.length; i++) {
  userPics[i].addEventListener('click', () => {
    for (let j = 0; j < userPics.length; j++) {
      userPics[j].classList.remove('active-pic');
    }
    for (let k = 0; k < userTexts.length; k++) {
      userTexts[k].classList.remove('active-text');
    };

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
  });
}


//Food Menu

const menu = [
  {
    id: 1,
    title: "puffs",
    category: "pastries",
    img: "images/puffs.jpg",
    desc: `These golden, bite-sized delights are the perfect crunchy and airy snack, perfect for satisfying your cravings anytime!`,
  },
  {
    id: 2,
    title: "poundo and vegetable soup",
    category: "soups",
    img: "images/veggiesoup.jpg",
    desc: `Savor the taste of Nigeria with this hearty and comforting meal made with smooth pounded yam and a flavorful medley of vegetables.`,
  },
  {
    id: 3,
    title: "coconut rice",
    category: "rice",
    img: "images/coconutrice.jpg",
    desc: `Creamy, tropical, and flavorful rice dish that will transport your taste buds to paradise!`,
  },
  {
    id: 4,
    title: "chin chin",
    category: "pastries",
    img: "images/chinchin.jpg",
    desc: `These sweet and crunchy bite-sized treats are the perfect snack for any occasion, with a unique texture and irresistible flavor that will keep you coming back for more.`,
  },
  {
    id: 5,
    title: "poundo and banga soup",
    category: "soups",
    img: "images/banga.jpg",
    desc: `Rich, flavorful soup made from palm fruit extract, paired with smooth, satisfying yam. A must-try!`,
  },
  {
    id: 6,
    title: "jollof rice",
    category: "rice",
    img: "images/jollofrice.jpg",
    desc: `Aromatic, spicy, and celebratory rice dish that will make your taste buds dance with joy!`,
  },
  {
    id: 7,
    title: "meat pie",
    category: "pastries",
    img: "images/pie.jpg",
    desc: `A savory and flaky pastry filled with seasoned meat, vegetables, and spices, making for a perfect on-the-go snack or light meal.`,
  },
  {
    id: 8,
    title: "eba and egusi soup",
    category: "soups",
    img: "images/egusi.jpg",
    desc: `A hearty and filling Nigerian favorite that combines ground melon seeds, paired with garri`,
  },
  {
    id: 9,
    title: "veggies spaghetti",
    category: "rice",
    img: "images/veggiespag.jpg",
    desc: `A delicious and healthy twist on a classic dish, made with fresh and colorful vegetables, and served with perfectly cooked spaghetti.`,
  },
  {
    id: 10,
    title: "fried rice",
    category: "rice",
    img: "images/friedrice.jpg",
    desc: `A delicious Nigerian classic made with flavorful rice, veggies, and spices. The perfect comfort food for any occasion!`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

//contact form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//Smooth scrolling
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});
