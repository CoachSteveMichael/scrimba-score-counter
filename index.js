let homeScore = document.getElementById("home-score")

homeTeamScore = 0

const homePlusOne = () => {
    homeTeamScore += 1;
    homeScore.textContent = homeTeamScore;
    if (homeTeamScore > guestTeamScore) {
        homeScore.style.background = "white" 
    } else {
        homeScore.style.background = "black"    
    }
    if (guestTeamScore > homeTeamScore) {
        guestScore.style.background = "white"
    } else {
        guestScore.style.background = "black"
    }
}

const homePlusTwo = () => {
    homeTeamScore += 2;
    homeScore.textContent = homeTeamScore;
    if (homeTeamScore > guestTeamScore) {
        homeScore.style.background = "white" 
    } else {
        homeScore.style.background = "black"    
    }
    if (guestTeamScore > homeTeamScore) {
        guestScore.style.background = "white"
    } else {
        guestScore.style.background = "black"
    }
}

const homePlusThree = () => {
    homeTeamScore +=3;
    homeScore.textContent = homeTeamScore;
    if (homeTeamScore > guestTeamScore) {
        homeScore.style.background = "white" 
    } else {
        homeScore.style.background = "black"    
    }
    if (guestTeamScore > homeTeamScore) {
        guestScore.style.background = "white"
    } else {
        guestScore.style.background = "black"
    }
}

let guestScore = document.getElementById("guest-score");

guestTeamScore = 0;

const guestPlusOne = () => {
    guestTeamScore +=1;
    guestScore.textContent = guestTeamScore;
    if (homeTeamScore > guestTeamScore) {
        homeScore.style.background = "white" 
    } else {
        homeScore.style.background = "black"    
    }
    if (guestTeamScore > homeTeamScore) {
        guestScore.style.background = "white"
    } else {
        guestScore.style.background = "black"
    }
}

const guestPlusTwo = () => {
    guestTeamScore += 2;
    guestScore.textContent = guestTeamScore;
    if (homeTeamScore > guestTeamScore) {
        homeScore.style.background = "white" 
    } else {
        homeScore.style.background = "black"    
    }
    if (guestTeamScore > homeTeamScore) {
        guestScore.style.background = "white"
    } else {
        guestScore.style.background = "black"
    }
}

const guestPlusThree = () => {
    guestTeamScore += 3;
    guestScore.textContent = guestTeamScore;
    if (homeTeamScore > guestTeamScore) {
        homeScore.style.background = "white" 
    } else {
        homeScore.style.background = "black"    
    }
    if (guestTeamScore > homeTeamScore) {
        guestScore.style.background = "white"
    } else {
        guestScore.style.background = "black"
    }
}

const reset = () => {
    guestScore.textContent = 0;
    homeScore.textContent = 0;
    homeScore.style.background = "black";
    guestScore.style.background = "black";
    guestTeamScore = 0;
    homeTeamScore = 0;
}


