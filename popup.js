document.getElementById("pasteBtn").addEventListener("click", async () => {
  try {
    const clipboardText = await navigator.clipboard.readText();
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: pasteIntoActiveElement,
        args: [clipboardText],
      });
    });
  } catch (error) {
    console.error("Error reading clipboard: ", error);
    alert("Failed to read clipboard content. Check permissions.");
  }
});
function pasteIntoActiveElement(text) {
  const activeElement = document.activeElement;
  if (
    activeElement &&
    (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")
  ) {
    activeElement.value = text;
    const event = new Event("input", { bubbles: true });
    activeElement.dispatchEvent(event);
    alert("Text pasted into the input field.");
  } else {
    alert("No editable field is focused. Please click on a field before pasting.");
  }
}
