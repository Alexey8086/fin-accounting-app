export const reverseArray = (arr) => {
    let reversed_array =  [...arr].map(arr.pop, arr)
    return reversed_array
}