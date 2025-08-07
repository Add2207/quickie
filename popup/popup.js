const promptInput = document.getElementById('prompt-input');
const submitBtn = document.getElementById('submit-btn');
const responseContainer = document.getElementById('response-container');

submitBtn.addEventListener('click', () => {
    const prompt = promptInput.value.trim();
    if (!prompt) return;

    submitBtn.disabled = true;
    responseContainer.innerHTML = 'Thinking...';

    chrome.runtime.sendMessage({ type: "generateAiResponse", prompt: prompt }, (response) => {
        if (chrome.runtime.lastError) {
            responseContainer.innerHTML = `Error: ${chrome.runtime.lastError.message}`;
        } else if (response.error) {
            responseContainer.innerHTML = `Error: ${response.error}`;
        } else {
            responseContainer.textContent = response.answer;
        }
        submitBtn.disabled = false;
    });
});