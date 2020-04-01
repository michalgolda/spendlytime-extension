const CONTEXT_MENU_ID = "spendlytime-context-menu";

chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "Start track timer",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener((event) => {
    if(event.menuItemId === CONTEXT_MENU_ID){
        console.log("Clicked on context menu option.");
    }
});