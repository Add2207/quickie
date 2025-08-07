import dotenv from "dotenv";

const API_KEY = "your_secret_api_key_here";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "generateAiResponse") {
    if (API_KEY === "your_secret_api_key_here") {
      sendResponse({
        error: "API key is not set. Please add it to the service worker.",
      });

    } else {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: request.prompt }] }],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            sendResponse({ error: data.error.message });
          } else {
            const responseText =
              data.candidates?.[0]?.content?.parts?.[0]?.text ||
              "No response text found.";
            sendResponse({ answer: responseText });
          }
        })
        .catch((error) => {
          sendResponse({
            error: "An error occurred while fetching the response.",
          });
        });
    }

    return true;
  }
});
