const CONTEXT_MENU_ID = "spendlytime-context-menu";

/**
 * Remove function is required execute because catch runtime.LastError,
 * "Cannot create item with duplicate id..." this function on load extension
 * delete exist context menu and create new in callback func.
 */
chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: CONTEXT_MENU_ID,
        title: "Start timer",
        contexts: ["all"],
    });
});

chrome.contextMenus.onClicked.addListener((event) => {
    if (event.menuItemId === CONTEXT_MENU_ID) {
        console.log("Clicked on context menu option.");
    }
});

//  Cannot create item with duplicate id
