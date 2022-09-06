/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let unique = Array.from(new Set(s.split('')));
    let output = [];
    unique = unique.map((range) => {
        return [range, s.indexOf(range), s.lastIndexOf(range)]
    })
    let start = unique[0][1],
        end = unique[0][2],
        cSta,
        cEnd;
    for(let i = 1; i < unique.length; i++) {
        cLet = unique[i][0];
        cSta = unique[i][1];
        cEnd = unique[i][2];
        if(cSta >= end) {
            output.push(end - start + 1);
            start = cSta;
            end = Math.max(end, cEnd);
        } else if(cSta < end) {
            end = Math.max(end, cEnd);
        }
        if(cEnd === s.length - 1) {
            output.push(cEnd - start + 1);
            return output;
        }
    }
    output.push(end - start + 1);
    return output;
}