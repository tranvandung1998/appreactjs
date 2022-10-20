import React from 'react';
import "./countdown.style.scss";

export default function Countdown() {
    const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

    const $ = setInterval(function() {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
      document.getElementById("days").innerHTML = days;
                    
      document.getElementById("hrs").innerHTML = hours;
                    
      document.getElementById("mins").innerHTML = minutes;
                    
      document.getElementById("secs").innerHTML = seconds;
    }, 1000);
  return (
    <div>
    <div class="timer">
  <div class="box">
    <h2 id="days"></h2>
    <h4>Days</h4>
  </div>
  <div class="box">
    <h2 id="hrs"></h2>
    <h4>Hours</h4>
  </div>
  <div class="box">
    <h2 id="mins"></h2>
    <h4>Minutes</h4>
  </div>
  <div class="box">
    <h2 id="secs"></h2>
    <h4>Seconds</h4>
  </div>
</div>
    </div>
  )
}
