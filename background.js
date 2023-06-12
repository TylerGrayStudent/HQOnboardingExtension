chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.url.includes('login/employee')) {
      chrome.cookies.getAll({url: 'https://invitations.microsoft.com/'}, function(cookies) {
        for (let i = 0; i < cookies.length; i++) {
          chrome.cookies.remove({url: 'https://invitations.microsoft.com' + cookies[i].path, name: cookies[i].name});
        }
      });
      chrome.cookies.getAll({url: 'https://login.microsoftonline.com/'}, function(cookies) {
        for (let i = 0; i < cookies.length; i++) {
          chrome.cookies.remove({url: 'https://login.microsoftonline.com' + cookies[i].path, name: cookies[i].name});
        }
      });
    }

  },
  {urls: ['<all_urls>']},
  ['blocking']
);
