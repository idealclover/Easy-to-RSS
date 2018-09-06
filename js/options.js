button.addEventListener('click', function() {
    chrome.storage.sync.set({
        color: item
    }, function() {
        console.log('color is ' + item);
    })
});
