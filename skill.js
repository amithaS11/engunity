let breathingIn = true;
let breathingPaused = false;
let circle = document.getElementById("circle");
let instructionText = document.getElementById("instructionText");
let startButton = document.getElementById("startButton");

function startBreathing() {
  if (breathingPaused) {
    breathingPaused = false;
    breathingIn = true;
    startBreathingCycle();
  } else {
    breathingPaused = true;
    instructionText.textContent = "Paused. Press 'Start' to continue.";
    startButton.textContent = "Start";
  }
}

function startBreathingCycle() {
  startButton.textContent = "Pause";
  instructionText.textContent = "Breathe In";
  circle.style.transition = "all 4s ease-in-out";
  
  setTimeout(() => {
    
    circle.style.transform = "scale(1.5)";
    instructionText.textContent = "Hold";

    setTimeout(() => {
      
      circle.style.transform = "scale(1.5)";
      instructionText.textContent = "Breathe Out";

      setTimeout(() => {
        
        circle.style.transform = "scale(1)";
        if (!breathingPaused) {
          
          startBreathingCycle();
        }
      }, 4000);
    }, 4000);
  }, 4000);
}

  