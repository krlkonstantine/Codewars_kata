function filter_list(l) {
    let res = l.filter(e => typeof e === "number")
    return res
}

console.log(filter_list([1,'a','b',0,15]))