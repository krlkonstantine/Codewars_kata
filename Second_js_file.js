const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

function hello(name) {
    if (name === "") {
        return ("Hello, World!")
    } else if (typeof name === 'string' || name instanceof String) {
        return ("Hello, " + capitalize(name) + "!")
    }
}

hello("susan")

function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}`)
}