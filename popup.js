document.addEventListener('DOMContentLoaded', function() {
    let checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click', function() {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let domain = document.getElementById('domain').value;
        let url = "https://www.whois.com/whois/" + domain;
        chrome.tabs.create({url: url, active: false}, function(tab) {
            chrome.tabs.executeScript(tab.id, {code})
        })
       })
    })
})