document.addEventListener('DOMContentLoaded', function () {
    var address = document.getElementById('serveraddress');
    chrome.storage.local.get('serveraddress', function(rst) {
        if(rst['serveraddress'] !== undefined){
            address.value = rst['serveraddress'];
        }
    });
});

document.getElementById('save').addEventListener('click', function() {
    var address = document.getElementById('serveraddress').value;
    chrome.storage.local.set({'serveraddress': address}, function() {
        window.close();
    });
});

document.getElementById('erase').addEventListener('click', function() {
    chrome.storage.local.remove('serveraddress', function() {});
    var address = document.getElementById('serveraddress');
    address.value = '';
});
