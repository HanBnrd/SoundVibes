// Open sidebar
function openSidebar() {
    browser.sidebarAction.open();
}

// Open sidebar on click
browser.browserAction.onClicked.addListener(openSidebar);
