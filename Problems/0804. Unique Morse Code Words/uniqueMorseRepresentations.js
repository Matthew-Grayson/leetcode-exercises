/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let key = {"a":".-","b":"-...","c":"-.-.","d":"-..","e":".","f":"..-.","g":"--.","h":"....","i":"..","j":".---","k":"-.-","l":".-..","m":"--","n":"-.","o":"---","p":".--.","q":"--.-","r":".-.","s":"...","t":"-","u":"..-","v":"...-","w":".--","x":"-..-","y":"-.--","z":"--.."},
        set = new Set(),
        word;
    for(let i = words.length - 1; i >= 0; i--) {
        word = "";
        for(let j = words[i].length; j >= 0; j--) {
            word = key[words[i][j]] + word;
        }
        set.add(word);
    }
    return set.size;
}