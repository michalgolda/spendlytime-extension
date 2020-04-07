/**
 * This event listener is get active tab for user browser and set to local storage,
 * storage is forwarded to redux initital state.
 */
chrome.tabs.onActivated.addListener(function(){
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
        chrome.storage.local.set({
            state: {
                browserData: {
                    currentTab: tabs[0]
                }
            }
        });
    });
});