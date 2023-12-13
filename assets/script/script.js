// Toggle Class Active
const navbarNav = document.querySelector("nav ul");
// Ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika klik di luar sidebar menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Menu actived ketika scrolling halaman
const sectionAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    const sectionId = current.getAttribute("id");
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector('a[href*="' + sectionId + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('a[href*="' + sectionId + '"]')
        .classList.remove("active");
    }
  });
});

// Contdown
const countdownDate = new Date("2023-12-15T10:00:00").getTime();

const interval = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // Sembunyikan keterangan countdown has ended jika ada
  document.getElementById("countdown-ended").style.display = "none";

  if (distance < 0) {
    //Jika Waktu Habis akan set menjadi 00

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    // Tampilkan keterangan countdown telah berakhir
    document.getElementById("countdown-ended").style.display = "block";

    clearInterval(interval);
  }
}, 1000);
