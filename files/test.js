function changeStyleSheet(sheet) {
	console.log("changeStyleSheet");
    document.getElementById('feuilleStyle').setAttribute('href', sheet);
}

function articleToPdf2() {
    changeStyleSheet("/_layouts/15/skema.internet.2016/site/branding/css/skema-internet-pdf.css");
    console.log("ok1");
    setTimeout(function() { 
		window.print();
		console.log("printWindow");
	}, 2000);
    console.log("ok2");
    setTimeout(function() { 
		console.log("changeStyleSheet");
		changeStyleSheet("null");
	}, 7000);
    console.log("ok3");
}