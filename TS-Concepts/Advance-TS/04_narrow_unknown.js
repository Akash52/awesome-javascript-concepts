function range(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('Incorrect type');
    }
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
console.log(range('A', 10));
