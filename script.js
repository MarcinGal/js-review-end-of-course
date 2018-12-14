
const arr1 = [2, 3, 5, 9, 20, 21]
const arr2 = [2, 3, 5, 9, 20]
const arr3 = [2, 3, 5, 9, 20, 35, 65, 19, 95, 87, 32]
const arr4 = [1, -1, 38, 49, 2, 3, 5, 9, 20]
const arr5 = []


const arrayArithmeticAverage = array => array.reduce((reduced, element) => element = reduced + element
    , 0) / array.length

const arrayMedian = array => {
    return (
        array.length === 0
            ? 0
            : array.sort((a, b) => a - b) &&
            (array.length % 2
                ? array[Math.floor(array.length / 2)]
                : (array[array.length / 2] + array[array.length / 2 + 1]) / 2
            )
    )
}

const arraySmallestNumber = array => {
    return (
        array.length === 0
            ? 0
            : array.sort((a, b) => a - b)[0]
    )
}

const arrayBiggestNumber = array => {
    return (
        array.length === 0
            ? 0
            : array.sort((a, b) => a - b)[array.length - 1]
    )
}



