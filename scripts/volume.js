let volumeBar = document.querySelector(".volume-bar .progress");
let slideVolume = document.querySelector(".volume-bar .slide");

function moveVolumeBar() {
	volumeBar.style.transform = `translateX(${slideVolume.value - 100}%)`;
    console.log(slideVolume.value);
}
