const proxy = require('./proxy');
const SafeString = proxy.SafeString;

module.exports = function createNavItem(slug, current, url, label, options) {
    
    let navCurrent = current ? "nav-current" : "";

    let navItem = `<li class="nav-${slug} ${navCurrent}"><a href="${url}">${label}</a></li>`;

    // If the URL is / we know the language should be english
    // The onclick functions are located in site-nav.hbs
    if (url == "/"){
        navItem = `<li class="nav-${slug} ${navCurrent}" onclick="updateLang(true)"><a href="${url}">${label}</a></li>`;
    }
    // If the URL is /fr/ we know the language should be french
    else if (url == "/fr/"){
        navItem = `<li class="nav-${slug} ${navCurrent}" onclick="updateLang(false)"><a href="${url}">${label}</a></li>`;
    }

    return new SafeString(navItem);
};
