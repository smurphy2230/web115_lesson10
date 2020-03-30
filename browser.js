function getBrowserName() {
    let typeBrowser = navigator.userAgent;

    if (typeBrowser.indexOf("Edge") >= 0) {
        return "Edge";
    } else if (typeBrowser.indexOf("Firefox") >= 0) {
        return "Firefox";
    } else if (typeBrowser.indexOf("Chrome") >= 0) {
        return "Chrome";
    } else if (typeBrowser.indexOf("Safari") >= 0) {
        return "Safari";
    } else if (typeBrowser.indexOf("Opera") >= 0) {
        return "Opera";
    }
    else if (typeBrowser.indexOf("Trident") >= 0) {
            return "IE";
        }
    else {
        return "UNKNOWN";
    }
}

function getBrowserVersion() {
    const ua = navigator.userAgent;
    const browser = getBrowserName();
    const findIndex = ua.indexOf(browser) + browser.length + 1;
    const browserVersion = parseFloat(ua.substring(findIndex, findIndex + 3));

    return browserVersion;
}
let browserName = getBrowserName();
let browserVersion = getBrowserVersion();
let windowHeight = window.screen.availHeight;
let windowWidth = window.screen.availWidth;

document.write("You are using version " + browserVersion + " of the "
    + browserName + "  browser to view this page in a browser whose inner window that is " 
    + windowWidth + "  pixels wide and  " +
    windowHeight + "  pixels tall.");
