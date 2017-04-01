/**
 *    Accepts a string an array of substrings to be removed
 *    @param  {String} str - string to be cleaned
 *    @param  {Array}  finds - array of substrings to be removed
 *    @return {String} a "cleaned" string
 */


const removeAllFromStr = (str, finds) => {
    let cleanStr = str;
    finds.forEach(find => {
        cleanStr = cleanStr.split(find).join('');
    });
    return cleanStr;
};

module.exports = removeAllFromStr;
