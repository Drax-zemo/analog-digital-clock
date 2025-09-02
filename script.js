let hour_hand = document.querySelector(".hour-hand");
let min_hand = document.querySelector(".min-hand");
let sec_hand = document.querySelector(".sec-hand");
let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    // Rotations
    let hrotation = 30 * h + m / 2;
    let mrotation = 6 * m;
    let srotation = 6 * s;

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;

    // Digital clock (12-hour format with leading zeros)
    let displayH = h % 12 || 12; // Convert 0 → 12
    dh.innerHTML = displayH < 10 ? "0" + displayH : displayH;
    dm.innerHTML = m < 10 ? "0" + m : m;
    ds.innerHTML = s < 10 ? "0" + s : s;
}, 1000);
