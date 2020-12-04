//  This code only runs on "matches": ["https://tableau.cabify.com//*"] as defined in the manifest
//  When you try to open a Tableau dashboard without being logged in you get redirected to the sign in page
//  That's why we're adding a timeout to check if the user got redirected

// Every 1 sec check if Tableau did the 
let timer = setInterval(function(){
  url = window.location.href
  match_object = url.match(/(tableau\.cabify\.com).*(signin)/); // "35"

  if(match_object){
    // Since there's no real document ready wait a bit for the page to render
    setTimeout(() => { onDocumentReady(); }, 1500); 
  
}, 1000)


// If after 10sec we're still on this URL, clear the interval since something went wrong
setTimeout(() => { clearInterval(timer);}, 10000);

var onDocumentReady = function(){

  console.log("Running onDocumentReady...")

  emailInputEl        = document.querySelector("input")
  chrome.storage.local.get("email", function(result){

    // console.log("Got the email form the store: "+result.email)
    // console.dir("Found this input: "+emailInputEl)

    setEmailInputValue(result.email, emailInputEl)
    // Tableau login page is built in angularJs so to fill the input field and for the value to be stored in the Store
    // we need to fire the change event after the input value has been changed
    var event = new Event('change');
    // Dispatch it...
    emailInputEl.dispatchEvent(event);
    // Click on the Login button and submit the form
    document.querySelector("button").click();
  });
};






