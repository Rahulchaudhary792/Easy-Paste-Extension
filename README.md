# Easy-Paste-Extension
# Bypass Paste Restrictions Chrome Extension

This Chrome extension is designed to help users bypass copy-paste restrictions on websites that prevent copying and pasting text. With this extension, users can enable pasting functionality even on sites where it is restricted.

## Features

- **Enable Paste**: Allows you to paste text into input fields on websites that restrict pasting.
- **Popup Interface**: Simple and intuitive interface to activate paste functionality.
- **Works on All Websites**: Designed to work across all websites by injecting JavaScript to enable paste functionality.
- **Bypass JavaScript Restrictions**: The extension bypasses JavaScript restrictions that prevent copying and pasting.

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** in the top right corner.
4. Click **Load unpacked** and select the extension folder where the files are located.
5. The extension icon will appear in the toolbar.

## Usage

1. Click the extension icon in the Chrome toolbar to open the popup.
2. The popup will have a **Paste** button.
3. Press the **Paste** button to paste the copied content into the input fields that have copy-paste restrictions.
4. The extension will work on most websites, allowing paste functionality even when it is normally disabled.

## How It Works

The extension uses JavaScript to interact with the page and enable paste functionality. It circumvents common JavaScript restrictions on input fields that block pasting via the clipboard. When you click the "Paste" button, it simulates a paste action using the `document.execCommand('paste')` method or other appropriate methods.

## Permissions

This extension requires the following permissions:

- **activeTab**: Allows the extension to access the current active tab.
- **clipboardRead**: Grants permission to read the clipboard content.
- **clipboardWrite**: Allows the extension to write content to the clipboard.
- **scripting**: Enables the extension to inject scripts into web pages.

## Known Issues

- Some websites might use advanced techniques to prevent paste actions that this extension cannot bypass.
- If the extension doesn't work on a specific site, it may be due to newer security measures implemented by the website.

## Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

### How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/copypasteextension.git
