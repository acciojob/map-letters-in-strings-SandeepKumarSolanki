//your JS code here. If required.

function mapArray(str) {
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (map.has(letter)) {
            map.get(letter).push(i);
        } else {
            map.set(letter, [i]);
        }
    }

    return Object.fromEntries(map);
}

let str = "dodo";
console.log(mapArray(str)); // { d: [0, 2], o: [1, 3] }
