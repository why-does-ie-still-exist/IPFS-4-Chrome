chrome.omnibox.onInputEntered.addListener(
    function (text, disposition) {
        chrome.tabs.create({ url: `https://cloudflare-ipfs.com/ipfs/${text}`, active: true });
    }
)