let saveBtn;
let loadBtn; 
let emailInput;
let activeTab;

function storeEmail(email){
  console.log("storeEmail:" + email)
  chrome.storage.local.set({ "email": email }, function(){
    
  });

}
function loadEmail(callback){
  chrome.storage.local.get("email", function(result){
    console.log("Loading "+ result.email)
    callback(result.email, emailInput)
  });
}

// On document ready of the popup
document.addEventListener('DOMContentLoaded', function() {

  console.log("DOM Loaded")
  saveBtn     = document.getElementById('saveBtn');
  loadBtn     = document.getElementById('loadBtn');
  emailInput  = document.getElementById('saveMyEmail');

  chrome.tabs.getSelected(null, function(tab) {
    d = document;
    console.log("getSelected")
    loadEmail(setEmailInputValue);
  });

  // Listen clicks on save
  saveBtn.addEventListener('click', function() {
    storeEmail(emailInput.value)
  }, false);

  loadBtn.addEventListener('click', function() {
    loadEmail(setEmailInputValue)
  }, false);


}, false);