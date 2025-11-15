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

const works01Swiper = new Swiper(".swiper--works-01", {
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

const works02Swiper = new Swiper(".swiper--works-02", {
  slidesPerView:3,
  loop: true,
  speed: 2000, // 少しゆっくり(デフォルトは300)
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