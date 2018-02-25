module.exports.parse = function (content) {
    const keyData = content.split('\n')[0].split(' ').map(string => parseInt(string));
    const lines = content.split('\n');
    lines.shift();
    lines.pop();

    return {
        rows: keyData[0],
        cols: keyData[1],
        minIng: keyData[2],
        maxSize: keyData[3],
        matrix: lines.map(line => line.split(''))
    }
}