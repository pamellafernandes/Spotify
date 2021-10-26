let musicBar = document.querySelector(".player-bar .music-bar");
let slidePlayer = document.querySelector(".player-bar .slide");

function moveBar() {
	musicBar.style.transform = `translateX(${slidePlayer.value - 100}%)`;
}
