function getBrowserName() {
    var lsBrowser = navigator.userAgent;

    if (lsBrowser.indexOf("Edge") >= 0) {
        return "Edge";
    } else if (lsBrowser.indexOf("Firefox") >= 0) {
        return "Firefox";
    } else if (lsBrowser.indexOf("Chrome") >= 0) {
        return "Chrome";
    } else if (lsBrowser.indexOf("Safari") >= 0) {
        return "Safari";
    } else if (lsBrowser.indexOf("Opera") >= 0) {
        return "Opera";
    }
    else if (lsBrowser.indexOf("Trident") >= 0) {
            return "IE";
        }
    else {
        return "UNKNOWN";
    }
}

function getBrowserVersion() {
    var ua = navigator.userAgent;
    var browser = getBrowserName();
    var findIndex = ua.indexOf(browser) + browser.length + 1;
    var browserVersion = parseFloat(ua.substring(findIndex, findIndex + 3));

    return browserVersion;
}
var browserName = getBrowserName();
var browserVersion = getBrowserVersion();
var windowHeight = window.screen.availHeight;
var windowWidth = window.screen.availWidth;

document.write("You are using version " + browserVersion + " of the "
    + browserName + "  browser to view this page in a browser whose inner window that is " 
    + windowWidth + "  pixels wide and  " +
    windowHeight + "  pixels tall.");
