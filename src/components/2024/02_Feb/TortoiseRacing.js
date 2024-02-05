function race(v1, v2, g) {
    if (v1 > v2) return null;

    let time = g / (v2 - v1);

    const hours = Math.floor(time);
    const minutes = Math.floor((time * 60) % 60);
    const seconds = Math.floor((time * 3600) % 60);

    return [hours, minutes, seconds];
}

console.log(race(720, 850, 70))
console.log(race(80, 91, 37))