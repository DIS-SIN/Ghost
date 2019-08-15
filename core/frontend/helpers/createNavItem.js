const proxy = require('./proxy');
const SafeString = proxy.SafeString;

module.exports = function createNavItem(slug, current, url, label, options) {
    
    let navCurrent = current ? "nav-current" : "";

    let navItem = `<li class="nav-${slug} ${navCurrent}"><a href="${url}">${label}</a></li>`;

    return new SafeString(navItem);
};
