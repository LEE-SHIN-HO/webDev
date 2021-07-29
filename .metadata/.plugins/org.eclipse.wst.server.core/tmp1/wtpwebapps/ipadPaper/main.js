'use strict';

const nav_goggle = document.querySelector(".nav_toggle");
const nav_menu = document.querySelector(".nav_menu");
const nav_member = document.querySelector(".nav_member");

nav_goggle.addEventListener("click", function() {
	nav_menu.classList.toggle("nav_menu");
	
}, true);

let root = document.documentElement;
var ad_size = root.style.getPropertyValue('--ad_size');

let div = document.getElementById('slide_item');
var ad_size = window.getComputedStyle(div).getPropertyValue('--ad_size');

var adj_ad_size = "";	//보여줄 이미지 위치 재조정

document.querySelector(".control_1").addEventListener("click", function() {
	document.querySelector(".slide_wrapper").style.transform = "translate(-0px)";
})


document.querySelector(".control_2").addEventListener("click", function() {
	document.querySelector(".slide_wrapper").style.transform = "translate(-" + ad_size + ")";
})


document.querySelector(".control_3").addEventListener("click", function() {
	adj_ad_size = (Number(ad_size.substr(0, 3)) * 2) + "px";	//클릭시 보여줄 이미지 위치 재조정
	document.querySelector(".slide_wrapper").style.transform = "translate(-" + adj_ad_size + ")";
})


