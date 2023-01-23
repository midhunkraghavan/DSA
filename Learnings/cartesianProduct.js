
function cartesian(arr1, arr2) {

    let cartesianProduct = []
    for (let i of arr1) {
        for (let j of arr2) {
            cartesianProduct.push([i, j])
        }
    }
    return cartesianProduct
}

console.log(cartesian([1, 2], [3, 4, 5]))