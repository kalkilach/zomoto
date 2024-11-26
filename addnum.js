function addNumbers() {
    var nums = [];
    for (var n = 0; n < arguments.length; n++) {
        nums[n - 0] = arguments[n];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3, 4);
addNumbers(10, 30, 20, 60, 35);
