chrome.tabs.onActivated.addListener(function(){
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
        let tab = tabs[0];
        chrome.storage.local.set({currentUrl: tab.url});
    });
});