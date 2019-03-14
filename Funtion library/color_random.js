function colorRdm() {
    var r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}