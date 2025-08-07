# Quickie ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/Add2207/quickie)
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-v1.0-blue.svg)](https://chrome.google.com/webstore)

A lightweight and super-fast Chrome extension to get instant answers from Google's Gemini AI without leaving your current tab.

---

## 🤔 Why Quickie?

Tired of breaking your focus by opening a new tab every time you have a quick question? With **Quickie**, the power of Google's Gemini AI is just a click away, right in your browser toolbar. Whether you're a student needing a quick definition, a developer looking for a code snippet, or just curious about a random fact, Quickie provides concise responses without interrupting your workflow.

## ✨ Features

- **Seamless Integration**: Sits quietly in your toolbar until you need it.
- **Instant Answers**: Leverages the speed and intelligence of Google's Gemini models.
- **Zero Distractions**: Get what you need without ever leaving your current page.
- **Simple & Clean UI**: No unnecessary features. Just a question box and a space for your answer.
- **Secure**: Your API key is stored locally and is not exposed in the code you push to GitHub.

## 🚀 Installation

### From the Chrome Web Store (Recommended for most users)

1.  Navigate to the [Quickie page on the Chrome Web Store](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID_HERE).
2.  Click "Add to Chrome".
3.  Pin the extension to your toolbar for easy access!

### For Developers (Manual Installation)

1.  Clone this repository to your local machine:
    ```bash
    git clone [https://github.com/Add2207/quickie.git](https://github.com/Add2207/quickie.git)
    ```
2.  Open Google Chrome and navigate to `chrome://extensions`.
3.  Enable **Developer mode** in the top right corner.
4.  Click on **Load unpacked**.
5.  Select the project folder you just cloned.

## 🛠️ Configuration (For Developers)

To use the extension locally, you need a Google Generative AI API key.

1.  **Get an API Key**: Visit the [Google AI Studio](https://aistudio.google.com/app/apikey) to create your free API key.
2.  **Create a `.env` file**: In the root of the project folder, create a new file named `.env`.
3.  **Add your key**: Add the following line to your `.env` file, replacing the placeholder with your actual key:
    ```
    GEMINI_API_KEY=AIzaSy...yourSecretKey
    ```
4.  **Manual Setup**: This project does not use a build tool. Before you can use the unpacked extension, you must manually copy the key from your `.env` file and paste it into the `API_KEY` placeholder variable in `background/service-worker.js`.

    > **Note**: Remember to revert this change before committing any code to keep your key safe! The `.gitignore` file is already configured to prevent your `.env` file from being uploaded.

## 📖 How to Use

1.  Click the **Quickie icon** (⚡) in your Chrome toolbar.
2.  Type your question or prompt into the text box.
3.  Click the **"Generate"** button.
4.  Your answer will appear in the box below!

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
