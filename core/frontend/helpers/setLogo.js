const proxy = require('./proxy');
const SafeString = proxy.SafeString;

module.exports = function setLogo(navigation, options) {

    // Stringified version of the navigation links
    let stringy = JSON.stringify(navigation);

    let logoFilePath = "/content/images/logos/BusRidesPublicationLogo.png";
    let altText = "Bus Rides Logo";

    // Searching for the nav language class and seeing if the current class active with it (indicates which language is active)
    if (stringy.includes("nav-francais nav-current")){
        logoFilePath = "/content/images/logos/BusRidesPublicationLogoFr.png";
        altText = "Trajets en Bus sigle";
    }

    return new SafeString(`<img class="site-logo" src="${logoFilePath}" alt="${altText}"/>`);
};
