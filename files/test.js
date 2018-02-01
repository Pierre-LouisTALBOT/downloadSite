var changeStyle;
var vprint;

function changeStyleSheet(sheet) {
    document.getElementById('feuilleStyle').setAttribute('href', sheet);
    if (changeStyle != null) {
        clearTimeout(changeStyle);
        changeStyle = null;
    }
}

function articleToPdf2() {
    changeStyleSheet("/_layouts/15/skema.internet.2016/site/branding/css/skema-internet-pdf.css");
    console.log("ok1");
    vprint = setTimeout(printWindow(), 2000);
    console.log("ok2");
    changeStyle = setTimeout(changeStyleSheet("null"), 7000);
    console.log("ok3");
}

function printWindow() {
    window.print();
    if (vprint != null) {
        clearTimeout(vprint);
        vprint = null;
    }
}