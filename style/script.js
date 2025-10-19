const starCount = window.innerWidth < 600 ? 80 : 200;
for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (1 + Math.random() * 2) + "s";
    star.style.opacity = Math.random();
    document.body.appendChild(star);
}

const lanternImages = [];
for (let i = 1; i <= 9; i++) lanternImages.push(`./style/img/lantern/ld (${i}).png`);

const messages = [
    { text: "Bớt nghiệp nghe mệ", img: "./style/img/Anh (1).jpg" },
    { text: "Uống lẹ chớ không công an tớiiii", img: "./style/img/Anh (7).jpg" },
    { text: "Bất ngờ chưa bà giàaaaaaa", img: "./style/img/Anh (3).jpg" },
    { text: "Quá đõaaa", img: "./style/img/Anh (4).jpg" },
    { text: "Bớt nghiệp nghe mệ", img: "./style/img/Anh (1).jpg" }, 
    { text: "Uống lẹ chớ không công an tớiiii", img: "./style/img/Anh (7).jpg" }, 
    { text: "Bất ngờ chưa bà giàaaaaaa", img: "./style/img/Anh (3).jpg" }, 
    { text: "Đồng nghiệp thân yêu, chúc chị em có một ngày 20/10 thật ấm áp và bớt nhiều chiện lại", img: "./style/img/Anh (6).jpg" }, 
    { text: "Đồng nghiệp thân yêu, chúc chị em có một ngày 20/10 thật ấm áp và bớt nhiều chiện lại", img: "https://1.bp.blogspot.com/-2MInP1REQh8/XWCNsIUaglI/AAAAAAAAPm0/XyBoNNDclrASfWfY2rmlJwmkf9gBL3awwCLcBGAs/s400/h%25E1%25BB%2593ng%2B%25C4%2591%25E1%25BB%258F%2Btr%25E1%25BA%25AFng.gif" }, 
    { text: "Đồng nghiệp thân yêu, chúc chị em có một ngày 20/10 thật ấm áp và bớt nhiều chiện lại", img: "https://i.pinimg.com/originals/3c/c6/53/3cc653f3e18e266c218ff9d0d9f647b3.gif" }, 
    { text: "Quá đõaaa", img: "./style/img/Anh (4).jpg" }, 
    { text: "Đồng nghiệp thân yêu, chúc chị em có một ngày 20/10 thật ấm áp và bớt nhiều chiện lại", img: "./style/img/Anh (6).jpg"}
];

const lanternsContainer = document.getElementById("lanternsContainer");
let maxLanterns = window.innerWidth < 600 ? 15 : 30;
let lanternInterval = null;

function createLantern() {
    if (lanternsContainer.querySelectorAll(".lantern").length >= maxLanterns) return;

    let lantern = document.createElement("img");
    lantern.src = lanternImages[Math.floor(Math.random() * lanternImages.length)];
    lantern.className = "lantern";

    // Giới hạn lantern không tràn màn hình
    let startX = Math.random() * 85; // 0% -> 85%
    lantern.style.left = startX + "vw";

    // random horizontal drift
    let driftX = (Math.random() - 0.5) * 50; // ±25vw
    lantern.style.setProperty('--x', driftX + 'vw');

    let duration = 10 + Math.random() * 10;
    lantern.style.animationDuration = duration + "s";

    lantern.addEventListener("click", () => {
    let randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("popupText").innerText = randomMsg.text;
    document.getElementById("popupImg").src = randomMsg.img;
    document.getElementById("popup").classList.add("show");
    document.getElementById("overlay").classList.add("show");
    });

    lanternsContainer.appendChild(lantern);
    lantern.addEventListener("animationend", () => lantern.remove());
}

const song = document.getElementById("bgMusic");
document.getElementById("releaseBtn").addEventListener("click", () => {
    if (!lanternInterval) {
    song.currentTime = 57;
    song.play();
    lanternInterval = setInterval(() => {
        let count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) createLantern();
    }, 1200);
    document.getElementById("releaseBtn").style.display = "none";
    }
});

function closePopup() {
    document.getElementById("popup").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
}
document.getElementById("overlay").addEventListener("click", closePopup);