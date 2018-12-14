
const arr1 = [2, 3, 5, 9, 20, 21]
const arr2 = [2, 3, 5, 9, 20]
const arr3 = [2, 3, 5, 9, 20, 35, 65, 19, 95, 87, 32]
const arr4 = [1, -1, 38, 49, 2, 3, 5, 9, 20]


const arrayArithmeticAverage = array => array.reduce((reduced, element) => element = reduced + element
    , 0) / array.length

const arrayMedian = array => {
    return (
        !(array.length % 2)
            ? (array[array.length / 2] + array[array.length / 2 + 1]) / 2
            : array[Math.floor(array.length / 2)]
    )
}
