let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeReset = document.getElementById("home-reset");
let guestReset = document.getElementById("guest-reset");

const homeScoreBtn1 = document.getElementById("home-score-btn-1");
const homeScoreBtn2 = document.getElementById("home-score-btn-2");
const homeScoreBtn3 = document.getElementById("home-score-btn-3");
const guestScoreBtn1 = document.getElementById("guest-score-btn-1");
const guestScoreBtn2 = document.getElementById("guest-score-btn-2");
const guestScoreBtn3 = document.getElementById("guest-score-btn-3");

// initialize homecount to 0
homeCount = 0;

// listen for click on the homescoreButton1
homeScoreBtn1.addEventListener("click", () => {
  // increment the home score of 1
  homeCount += 1;
  // change the home-score in the HTML to reflect the new home score
  homeScore.textContent = homeCount;
});

// listen for click on the homescoreButton2
homeScoreBtn2.addEventListener("click", () => {
  // increment the home score of 2
  homeCount += 2;
  // change the home-score in the HTML to reflect the new home score
  homeScore.textContent = homeCount;
});

// listen for click on the homescoreButton3
homeScoreBtn3.addEventListener("click", () => {
  // increment the home score of 3
  homeCount += 3;
  // change the home-score in the HTML to reflect the new home score
  homeScore.textContent = homeCount;
});

// listen for click on the home reset button
homeReset.addEventListener("click", () => {
  // change the home-score in the HTML to 0
  homeScore.textContent = 0;
  // restart the homecount from 0
  homeCount = 0;
});

// initialize the guestcount to 0
guestCount = 0;
// listen for click on the guestscoreButton1
guestScoreBtn1.addEventListener("click", () => {
  // increment the guest score of 1
  guestCount += 1;
  // change the guest-score in the HTML to reflect the new guest score
  guestScore.textContent = guestCount;
});

// listen for click on the guestscoreButton2
guestScoreBtn2.addEventListener("click", () => {
  // increment the guest score of 2
  guestCount += 2;
  // change the guest-score in the HTML to reflect the new guest score
  guestScore.textContent = guestCount;
});

// listen for click on the guestscoreButton3
guestScoreBtn3.addEventListener("click", () => {
  // increment the guest score of 3
  guestCount += 3;
  // change the guest-score in the HTML to reflect the new guest score
  guestScore.textContent = guestCount;
});

// listen for click on the guest reset button
guestReset.addEventListener("click", () => {
  // change the guest-score in the HTML to 0
  guestScore.textContent = 0;
  // restart the guestcount from 0
  guestCount = 0;
});

if (homeCount > guestCount) {
  homeScore.style.color = "green";
}
