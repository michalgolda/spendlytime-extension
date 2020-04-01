const CONTEXT_MENU_ID = "spendlytime-context-menu";

chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "Start track timer",
    contexts: ["all"]
});