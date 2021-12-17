const main = document.getElementById("mainpage");
const vorbereitung = document.getElementById("trainingsvorbereitung");
const durchfuehrung = document.getElementById("durchfuehrung");
const elemente = document.getElementById("elemente");
const video = document.getElementById('video');

function vorbereitungclicked(){
  main.style.display ="none";
  vorbereitung.style.display="block";
  durchfuehrung.style.display="none";
  elemente.style.display="none";
  video.style.display="none";
}

function videoclicked(){
  main.style.display ="none";
  vorbereitung.style.display="none";
  durchfuehrung.style.display="none";
  elemente.style.display="none";
  video.style.display="block";
}

function ausruestungclicked(){
  main.style.display ="none";
  vorbereitung.style.display="none";
  durchfuehrung.style.display="none";
  elemente.style.display="block";
  video.style.display="none";}

function homeclicked(){
  main.style.display ="block";
  vorbereitung.style.display="none";
  durchfuehrung.style.display="none";
  elemente.style.display="none";
  video.style.display="none";}

function durchfuehrungclicked(){
  main.style.display ="none";
  vorbereitung.style.display="none";
  durchfuehrung.style.display="block";
  elemente.style.display="none";
  video.style.display="none";}


