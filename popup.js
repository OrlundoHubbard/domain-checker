document.addEventListener('DOMContentLoaded', function() {
    let checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click', function() {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let domain = document.getElementById('domain').value;
       })
    })
})