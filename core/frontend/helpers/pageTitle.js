module.exports = function pageTitle(meta_title, options) {

    let title = meta_title;

    // Tests a string to see if it contains (Page X) where X is any number
    let regex = /([(]Page \d[)])/;
    
    if (regex.test(meta_title)){
        title = "Trajets en Bus";
    }

    return title;
};
