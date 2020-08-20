function calculateExp() {
	// this code I copied from stackoverflow: 
	// https://stackoverflow.com/questions/4076321/javascript-age-calculation
	let startDate = new Date("2008-07-14");
    let diff = new Date().getTime() - startDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

window.onload = function() {
	const expYearsSpan = document.querySelector("#numberOfYears");
	let expYears = calculateExp();
	expYearsSpan.innerHTML = expYears;	
}

