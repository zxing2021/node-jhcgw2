export let sortedArr = function (arr, column) {
	return arr.sort((a, b) => {
		return a[column] - b[column]
	})
}