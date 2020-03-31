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

chrome.runtime.onStartup.addListener(function(){
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