const MENU_ID = "youtube-no-playlist@pushme.in";

// Create a context menu item for YouTube playlist links
chrome.contextMenus.create({
  title: chrome.i18n.getMessage("menuItemName"),
  contexts: ['link'],
  targetUrlPatterns: [
    "*://www.youtube.com/watch*?*list=*"
  ],
  id: MENU_ID
});

// Add the event listener for the menu item
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if(info.linkUrl) {
    let newTabProperties = {};
    // Remove list and index query parameters from url
    let url = new URL(info.linkUrl);
    let query = new URLSearchParams(url.search);
    query.delete("list");
    query.delete("index");
    url.search = query.toString();
    newTabProperties.url = url.href;
    newTabProperties.active = true;

    // Provide openerTabId if possible
    if(tab) {
      newTabProperties.openerTabId = tab.id;
    }

    chrome.tabs.create(newTabProperties);
  }
});

