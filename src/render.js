let count = 0;

// async function main() {
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//checkStatus
function checkStatus() {
    switch(true){
    case count < 10:
        document.getElementById("checkStatus").innerHTML = "Rosa is sad 😥";
        break;
    case count < 20:
        document.getElementById("checkStatus").innerHTML = "Rosa is okay 🙂";
        break;
    case count < 30:
        document.getElementById("checkStatus").innerHTML = "Rosa is happy 😄";
        break;
    case count < 40:
        document.getElementById("checkStatus").innerHTML = "Rosa is ecstatic 🤩";
        break;
    case count < 50:
        document.getElementById("checkStatus").innerHTML = "Rosa is overjoyed 🤗";
        break;
    case count >= 60:
        document.getElementById("checkStatus").innerHTML = "Rosa is in love 😍";
        displayConfetti();
        break;
    }
}

//display confetti
function displayConfetti() {
    const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    confetti({
    ...defaults,
    particleCount: 5,
    scalar: 2,
    });

    confetti({
    ...defaults,
    particleCount: 2,
    scalar: 3,
    });

    confetti({
    ...defaults,
    particleCount: 1,
    scalar: 4,
    });
}

document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
    checkStatus();
}

document.getElementById("hyenaImg").onclick = function() {
    document.getElementById("hyenaImg").src = "hyena_boop.png";
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
    sleep(200).then(() => {
        document.getElementById("hyenaImg").src = "hyena.png";
    });
    checkStatus();
}
