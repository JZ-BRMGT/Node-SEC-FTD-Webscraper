/**
 * Pause running script for defined time.
 * @param {number} ms Length of time in ms to pause for
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Returns a Date string of current time
 */
function nowTimeAsString() {
    const todayDateTime = new Date();
    return todayDateTime.toLocaleString()
}

/**
 * Pause running script for defined time.
 * @param {string} msg Display A message in console
 */
const keypress = async (msg) => {
    if (msg) {
        console.log(msg)
    }
    process.stdin.setRawMode(true)
    return new Promise(resolve => process.stdin.once('data', () => {
        process.stdin.setRawMode(false)
        resolve()
    }))
}


module.exports = {
    nowTimeAsString,
    sleep,
    keypress
    // a list of exported variables
}