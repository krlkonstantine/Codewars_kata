function parse(data) {
    let result = []
    let output = 0
    let tempValue = 0
    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case 'i':
                tempValue++;
                break;
            case 'd':
                tempValue--;
                break;
            case 's':
                tempValue *= tempValue;
                break;
            case 'o':
                output = tempValue;
                result.push(output);
                break;
            default:
                // Добавьте обработку других символов, если необходимо
                break;
        }
    }
    return result;

}

console.log(parse("iiisdoso"))