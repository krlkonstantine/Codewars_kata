function peopleInBus(busStops) {
   let peopleInBus  = 0
    if (Array.isArray(busStops)){
        peopleInBus = busStops[0][0]
    }
    for (let i = 1; i < busStops.length; i++) {
        const [enter, exit] = busStops[i];
        peopleInBus += enter - exit;
    }
    return peopleInBus
}



console.log(peopleInBus([[10,0],[3,5],[5,8]]))