const users = document.getElementById("users");
const profilepie_container = document.getElementById("profilepic_container");
const profilepic = document.getElementById("profilepic");

profilepic.addEventListener("load", run);

function run() {
    profilepic_container.classList.add("fadein");

    setTimeout(() => profilepic.addEventListener("click", coinflip), 1000);
    function coinflip() {
        profilepic.classList.add("coinflip");
        setTimeout(() => profilepic.classList.remove("coinflip"), 1100);
    }
}
alert("a");
console.log("b");
