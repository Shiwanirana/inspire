import clockService from "../Services/ClockService.js";
import Clock from "../Models/Clock.js";
import {ProxyState} from "../AppState.js";

function _drawClock() {
  let myDate= new Date()
  let hrs = myDate.getHours()
  let greet= null
  if(hrs<12){
    greet='Good Morning'
  }else if(hrs>=12 && hrs<=17){
    greet = 'Good Afternoon'
  }else if(hrs>=17 && hrs<=24){
    greet='Good Evening'
  }
  document.getElementById("greeting").innerHTML = '<b>'+ greet+'</b>'
}

function updateTime(i) {
  if (i < 10) {
    return "0" + i;
  } else {
    return i;
  }
}

function currentTime() {
  let date = new Date();
  var hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerHTML = '<b>'+hour + " : " + min + " : " + sec+'</b>';
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

function updateHour(i) {
  if (i < 10) {
    return "0" + i;
  } else if(i>12){
    return i-12;
  }else if(i>=10 && i<=12){
    return i
  }
}

function currentTime1() {
  let date = new Date();
  var hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateHour(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerHTML = '<b>'+hour + " : " + min + " : " + sec+'</b>';
  let t = setTimeout(function () {
    currentTime1();
  }, 1000);
}

export default class ClockController {
  constructor() {
    _drawClock();
    currentTime();
    // currentTime1()
    ProxyState.on("clock", _drawClock);
  }

  
  
   currentTime1() {
  let date = new Date();
  var hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateHour(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerHTML = '<b>'+hour + " : " + min + " : " + sec+'</b>';
  let t = setTimeout(function () {
    currentTime1();
  }, 1000);
}
}