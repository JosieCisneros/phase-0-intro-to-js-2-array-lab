const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (string) {
    return string = cats.push(string)
}

function destructivelyPrependCat (string) {
    return string = cats.unshift(string)
}

function destructivelyRemoveLastCat (string) {
    return string = cats.splice(-1)
}

function destructivelyRemoveFirstCat(string) {
    return string = cats.splice(0,1)
}

function appendCat(string) {
    return string = [...cats, string]
}

function prependCat(string) {
    return string = [string, ...cats]
}

function removeLastCat(string) {
    return string = cats.slice(0,-1)
}

function removeFirstCat(string) {
    return string = cats.slice(1)
} 