function toLowerCase(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s.charCodeAt(i);
        if(c >= 65 && c <= 90) {
            if(i < s.length - 1) {
                s = s.slice(0, i) + String.fromCharCode(c + 32) + s.slice(i+1);
            } else {
                s = s.slice(0, i) + String.fromCharCode(c + 32);
            }
        }
    }
    return s;
}