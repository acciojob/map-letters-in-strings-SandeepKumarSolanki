//your JS code here. If required.

function  mapArray(str) {
	let arr = [];
	let map = new Map();
	for(let t of str){
		if(map.has(t)){
			map.set(t,(arr.push(indexOf(map.get(t)))
		}else{
			map.set(t,indexOf(map.get(t)));
		}
	}
	// return map;
	return Object.fromEntries(map);
}
let str = "dodo";
console.log(mapArray(str));