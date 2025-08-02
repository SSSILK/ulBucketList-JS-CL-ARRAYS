/**
 * This ensures that the jsdom test environment is being leveraged to help manage issues
 * with jest when attempting to run when access the DOM inside of the .js files
 * 
 * @jest-environment jsdom
 */
const {arr, arrLength, arrPop, arrPush} = require('./Arrays')

/**
 * A basic test of the arrLength function to confirm it's the size of our array
 * defined in the Arrays.js
 */
test ('find array length', () =>{
    expect(arrLength()).toBe(arr.length)
})

/**
 * A basic test of the arrPush function to confirm it's adding the specified item
 * to the arr array.
 */
test ('add to Array', () =>{
    arrPush(1)
    expect(arr).toEqual(expect.arrayContaining([1]))
})

/**
 * A basic test of the arrPop function to confirm it's removing the last item (testString)
 * included into the arr array.
 */
test('remove last from an array', ()=>{
    testString = "test suite element"
    arr[arr.length] = testString
    arrPop()
    expect(arr).not.toEqual(expect.arrayContaining([testString]))
})