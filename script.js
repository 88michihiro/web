
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // 3秒ごとに画像を変更
}



document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('show');
});








document.addEventListener("DOMContentLoaded", () => {
  // ページが新しく読み込まれた場合にローカルストレージをクリア
  if (!sessionStorage.getItem("pageReloaded")) {
      localStorage.clear();
  }
  sessionStorage.setItem("pageReloaded", false);

  // ローカルストレージからクリック状態を復元し、スタイルを適用
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (localStorage.getItem(key) === "clicked") {
          const clickedImage = document.getElementById(key);
          if (clickedImage) {
              clickedImage.classList.add("image-clicked");
          }
      }
  }

  // カウンターを更新
  updateCounter();
});

// ページ離脱時のイベントを設定
window.onbeforeunload = function() {
  sessionStorage.setItem("pageReloaded", true);
};

let count = 0;

// 画像クリック時の処理
function imageClicked(linkElement) {
    const image = linkElement.querySelector("img");
    const imageId = image.getAttribute("id") || 'image-' + Date.now();
    image.setAttribute("id", imageId);

    if (!localStorage.getItem(imageId)) {
        // カウンターを更新
        count++;
        updateCounter();

        // ローカルストレージに保存
        localStorage.setItem(imageId, "clicked");

        // 画像の色を変更するスタイルを適用
        image.classList.add("image-clicked");
    }
}


// カウンターの表示を更新
function updateCounter() {
  count = Object.keys(localStorage).length;
  document.getElementById("click-counter").innerHTML = 
      '<img src="足跡.png" alt="イラスト" style="width: 90px; height: 60px;"> : ' + count;
}








