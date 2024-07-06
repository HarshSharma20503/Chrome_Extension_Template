import axios from "axios";

// Function to perform an action using axios
function performAction() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      const responseData = response.data;
      console.log("Response:", responseData);

      // Send the data to the service worker
      chrome.runtime.sendMessage({
        type: "contentScriptData",
        data: responseData,
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Call performAction when the content script is executed
performAction();
