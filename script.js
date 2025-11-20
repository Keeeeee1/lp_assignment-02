document.addEventListener("DOMContentLoaded", () => {
  const menuBtn  = document.querySelector(".section__fv__menu-btn");
  const drawer   = document.querySelector(".section__fv__drawer");
  const closeBtn = document.querySelector(".section__fv__drawer__close");

  if (!menuBtn || !drawer || !closeBtn) return;

  const setOpen = (open) => {
    drawer.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open);
    drawer.setAttribute("aria-hidden", !open);
    document.body.classList.toggle("is-menu-open", open);
  };

  menuBtn.addEventListener("click", () => setOpen(true));
  closeBtn.addEventListener("click", () => setOpen(false));

  // 背景クリックで閉じる
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) setOpen(false);
  });

  // リンク押したら閉じる
  drawer.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setOpen(false));
  });
});




/* ===============================
   Concept スライダー
================================*/
const conceptSwiper = new Swiper(".swiper--concept", {
  slidesPerView: 3,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});


/* ===============================
   works-01 / works-02 共通：画像配列
================================*/
let images01 = [
  "img/works01-01.jpg",
  "img/works01-02.jpg",
  "img/works01-03.jpg",
  "img/works01-04.jpg",
  "img/works01-05.jpg"
];

let images02 = [
  "img/works02-01.jpg",
  "img/works02-02.jpg",
  "img/works02-03.jpg",
  "img/works02-04.jpg",
  "img/works02-05.jpg"
];


/* ===============================
   Swiper 初期化
================================*/
// works-01
// works-01
// ▼ Thumb（小画像）
// works-01 thumb
// works-01 thumb
const thumb01Swiper = new Swiper(".swiper__works--thumb-01", {
  spaceBetween: 8,
  direction: "horizontal",     
  slidesPerView: 1,            
  grid: { rows: 4, fill: "row" }, 

  breakpoints: {
    1081: {
      slidesPerView: 2,          
      grid: { rows: 2, fill: "row" }, 
      spaceBetween: 8,
    },
  },
});

// main
const main01Swiper = new Swiper(".swiper__works--main-01", {
  slidesPerView: 1,
  effect: "fade",
  thumbs: { swiper: thumb01Swiper },
});


const thumb02Swiper = new Swiper(".swiper__works--thumb-02", {
  spaceBetween: 8,
  direction: "horizontal",
  slidesPerView: 1,
  grid: { rows: 4, fill: "row" },

  breakpoints: {
    1081: {
      slidesPerView: 2,
      grid: { rows: 2, fill: "row" },
    },
  },
});

const main02Swiper = new Swiper(".swiper__works--main-02", {
  slidesPerView: 1,
  effect: "fade",
  thumbs: { swiper: thumb02Swiper },
});



/* ===============================
   works-01：描画 & 入れ替えロジック
================================*/
function renderMainSlides01() {
  main01Swiper.removeAllSlides();
  images01.forEach(src => {
    main01Swiper.appendSlide(`
      <div class="swiper-slide">
        <img src="${src}" alt="">
      </div>
    `);
  });
  main01Swiper.update();
}

function renderThumbSlides01(activeIndex) {
  thumb01Swiper.removeAllSlides();
  images01.forEach((src, index) => {
    if (index !== activeIndex) {
      thumb01Swiper.appendSlide(`
        <div class="swiper-slide">
          <img src="${src}" alt="">
        </div>
      `);
    }
  });
  thumb01Swiper.update();
}

function swapImages01(mainIndex, clickedThumbIndex) {
  const mainImg = images01[mainIndex];

  const realThumbIndex =
    clickedThumbIndex >= mainIndex
      ? clickedThumbIndex + 1
      : clickedThumbIndex;

  const clickedImg = images01[realThumbIndex];

  images01[mainIndex] = clickedImg;
  images01[realThumbIndex] = mainImg;
}

// 初期表示
renderMainSlides01();
renderThumbSlides01(0);

// main スワイプ時
main01Swiper.on("slideChange", function () {
  const mainIndex = main01Swiper.activeIndex;
  renderThumbSlides01(mainIndex);
});

// thumb クリック時
thumb01Swiper.on("click", function (swiper) {
  const clickedThumbIndex = swiper.clickedIndex;
  if (clickedThumbIndex == null) return;

  const mainIndex = main01Swiper.activeIndex;

  swapImages01(mainIndex, clickedThumbIndex);

  renderMainSlides01();
  renderThumbSlides01(mainIndex);

  main01Swiper.slideTo(mainIndex);
});


/* ===============================
   works-02：描画 & 入れ替えロジック（01コピペ版）
================================*/
function renderMainSlides02() {
  main02Swiper.removeAllSlides();
  images02.forEach(src => {
    main02Swiper.appendSlide(`
      <div class="swiper-slide">
        <img src="${src}" alt="">
      </div>
    `);
  });
  main02Swiper.update();
}

function renderThumbSlides02(activeIndex) {
  thumb02Swiper.removeAllSlides();
  images02.forEach((src, index) => {
    if (index !== activeIndex) {
      thumb02Swiper.appendSlide(`
        <div class="swiper-slide">
          <img src="${src}" alt="">
        </div>
      `);
    }
  });
  thumb02Swiper.update();
}

function swapImages02(mainIndex, clickedThumbIndex) {
  const mainImg = images02[mainIndex];

  const realThumbIndex =
    clickedThumbIndex >= mainIndex
      ? clickedThumbIndex + 1
      : clickedThumbIndex;

  const clickedImg = images02[realThumbIndex];

  images02[mainIndex] = clickedImg;
  images02[realThumbIndex] = mainImg;
}

// 初期表示
renderMainSlides02();
renderThumbSlides02(0);

// main スワイプ時
main02Swiper.on("slideChange", function () {
  const mainIndex = main02Swiper.activeIndex;
  renderThumbSlides02(mainIndex);
});

// thumb クリック時
thumb02Swiper.on("click", function (swiper) {
  const clickedThumbIndex = swiper.clickedIndex;
  if (clickedThumbIndex == null) return;

  const mainIndex = main02Swiper.activeIndex;

  swapImages02(mainIndex, clickedThumbIndex);

  renderMainSlides02();
  renderThumbSlides02(mainIndex);

  main02Swiper.slideTo(mainIndex);
});


/* ===============================
   Lightbox（共通）
================================*/
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-image");

// works-01 main クリック
document.querySelector(".swiper__works--main-01")
  .addEventListener("click", function () {
    const mainIndex = main01Swiper.activeIndex;
    const imgSrc = images01[mainIndex];
    modalImg.src = imgSrc;
    modal.style.display = "flex";
  });

// works-02 main クリック
document.querySelector(".swiper__works--main-02")
  .addEventListener("click", function () {
    const mainIndex = main02Swiper.activeIndex;
    const imgSrc = images02[mainIndex];
    modalImg.src = imgSrc;
    modal.style.display = "flex";
  });

// モーダル閉じる
modal.addEventListener("click", function () {
  modal.style.display = "none";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});


/* ===============================
   Plan の cardSwiper
================================*/
const cardSwiper = new Swiper(".cardSwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* ===============================
   Access アコーディオン
================================*/
document.querySelectorAll('.toggle__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('is-open');
    btn.classList.toggle('is-open');
  });
});
