function changeStyleSheet(sheet) {
    document.getElementById('feuilleStyle').setAttribute('href', sheet);
}

function articleToPdf2() {
    //  /_layouts/15/skema.internet.2016/site/branding/css/skema-internet-pdf.css
	//  https://rawgit.com/Pierre-LouisTALBOT/downloadSite/master/files/test.css
    changeStyleSheet("https://raw.githubusercontent.com/Pierre-LouisTALBOT/downloadSite/master/files/test.css");
    setTimeout(function () {
        window.print();
    }, 1000);
    setTimeout(function () {
        changeStyleSheet("null");
    }, 4000);
}