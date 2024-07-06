// background.js

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "contentScriptData") {
    console.log("Received data from content script:", message.data);

    // Perform further actions with the received data
    // For example, store data, send it to another endpoint, etc.
  }
});
