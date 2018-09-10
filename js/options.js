document.addEventListener('DOMContentLoaded', function () {
    console.log(localStorage["serveraddress"]);
    var serveraddress = localStorage["serveraddress"];
    if(serveraddress !== undefined){
        var address = document.getElementById("serveraddress");
        chrome.storage.local.get("serveraddress", function(rst) {
            if(rst["serveraddress"] !== undefined){
                address.value = rst["serveraddress"];
            }
        });
    }
});

document.getElementById("save").addEventListener('click', function() {
    console.log(document.getElementById("serveraddress").value);
    var address = document.getElementById("serveraddress").value;
    chrome.storage.local.set({'serveraddress': address}, function() {
        // alert("设置成功！");
        window.close();
    });
});

document.getElementById("erase").addEventListener('click', function() {
    chrome.storage.local.remove('serveraddress', function() {});
    var address = document.getElementById("serveraddress");
    address.value = '';
});
