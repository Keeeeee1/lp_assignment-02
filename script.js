const conceptSwiper = new Swiper(".swiper--concept", {
  slidesPerView:3,
  loop: true,
  speed: 3000, // 少しゆっくり(デフォルトは300)
  autoplay: { // 自動再生
    delay: 1500, // 1.5秒後に次のスライド
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween:30,
});





/************************************
 * 画像リスト（ここに画像を追加/変更する）
 ************************************/
let images01 = [
  "img/works01-01.jpg",
  "img/works01-02.jpg",
  "img/works01-03.jpg",
  "img/works01-04.jpg",
  "img/works01-05.jpg"
];

/************************************
 * Swiper 初期化（thumb：2×2 grid）
 ************************************/
const thumb01Swiper = new Swiper(".swiper__works--thumb-01", {
  slidesPerView: 2,
  grid: { rows: 2 },
  spaceBetween: 10,
});

const main01Swiper = new Swiper(".swiper__works--main-01", {
  slidesPerView: 1,
  spaceBetween: 10,
});

/************************************
 * Main Swiper のスライドを描画
 ************************************/
function renderMainSlides() {
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

/************************************
 * Thumbnail Swiper の 4枚を描画
 * （Mainの画像は除外）
 ************************************/
function renderThumbSlides(activeIndex) {
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

/************************************
 * Main とクリックした Thumb を入れ替える
 ************************************/
function swapimages01(mainIndex, clickedThumbIndex) {
  const mainImg = images01[mainIndex];

  // クリックされた thumb の位置を実画像 index に変換
  const realThumbIndex =
    clickedThumbIndex >= mainIndex
      ? clickedThumbIndex + 1
      : clickedThumbIndex;

  const clickedImg = images01[realThumbIndex];

  // main と clicked thumb の画像を入れ替え
  images01[mainIndex] = clickedImg;
  images01[realThumbIndex] = mainImg;
}

/************************************
 * 初期表示
 ************************************/
renderMainSlides();
renderThumbSlides(0);

/************************************
 * main が切り替わったら thumbnail を更新
 ************************************/
main01Swiper.on("slideChange", function () {
  const mainIndex = main01Swiper.activeIndex;
  renderThumbSlides(mainIndex);
});

/************************************
 * サムネクリック時：Mainと画像を入れ替え
 ************************************/
thumb01Swiper.on("click", function (swiper) {
  const clickedThumbIndex = swiper.clickedIndex; // 0〜3
  const mainIndex = main01Swiper.activeIndex;

  // 入れ替え実行
  swapimages01(mainIndex, clickedThumbIndex);

  // 再描画
  renderMainSlides();
  renderThumbSlides(mainIndex);

  // メイン表示位置維持
  main01Swiper.slideTo(mainIndex);
});




/************************************
 * Lightbox（モーダル）処理
 ************************************/

const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-image");

// main画像クリック→モーダル表示
document.querySelector(".swiper__works--main-01")
  .addEventListener("click", function () {

    const mainIndex = main01Swiper.activeIndex;
    const imgSrc = images01[mainIndex];

    modalImg.src = imgSrc;
    modal.style.display = "flex";    // モーダル表示
  });

// モーダルのどこをクリックしても閉じる
modal.addEventListener("click", function () {
  modal.style.display = "none";
});

// ESCキーで閉じる
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});















/* ===============================
   works-02 thumbnail swiper
================================*/
const thumb02Swiper = new Swiper(".swiper__works--thumb-02", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 10,
  watchSlidesProgress: true,
});

/* ===============================
   works-02 main swiper
================================*/
const main02Swiper = new Swiper(".swiper__works--main-02", {
  slidesPerView: 1,
  spaceBetween: 10,
  thumbs: {
    swiper: thumb02Swiper,
  },
});

/* ===============================
   Lightbox（works-02）
================================*/
document.querySelectorAll(".swiper__works--main-02 img")
  .forEach((img) => {
    img.addEventListener("click", () => {
      // すでに上で定義している modal / modalImg をそのまま使う
      modalImg.src = img.src;
      modal.style.display = "flex";
    });
  });









const cardSwiper = new Swiper(".cardSwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type:"progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});





document.querySelectorAll('.toggle__btn').forEach(btn =>{
  btn.addEventListener('click',()=>{
    const content =btn.nextElementSibling;
    content.classList.toggle('is-open');
    btn.classList.toggle('is-open')
  });
});