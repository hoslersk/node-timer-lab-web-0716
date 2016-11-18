// INSTRUCTIONS
// Create a CLI app which takes number of seconds in the following format: ns for n seconds, e.g., and 5s for five seconds. The command for 5 seconds must look like node timer 5s.

var timeRemaining = 0

var argv = process.argv

var inputRequest = function() {
  console.log("Provide a time for countdown in either '1s' or '1min' format:")
  process.exit(1)
}

if (!argv[2]) {
  inputRequest()
} else if (argv[2].slice(-1) === "s") {
  timeRemaining = parseInt(argv[2].slice(0, -1), 10)
} else if (argv[2].slice(-1) === "n") {
  timeRemaining = parseInt(argv[2].slice(0, -3), 10) * 60
} else {
  console.log("Argument invalid.")
  inputRequest()
}

// Implement the timer in timer.js by printing the number of seconds left on a new line. For example, if you passed 10s as your argument, you should see the text "Left: 10s", "Left: 9s", etc. printed to the console.

var countdown = setInterval(function() {
  timeRemaining --
  console.log(`Left: ${timeRemaining}s`)
  if (timeRemaining == 0) {
    clearInterval(countdown)
    process.exit(0)
  }
}, 1000)

// Use global objects global.setInterval() and global.clearInterval()
// Enhance the app by adding minutes in the following format nmin, e.g., 1min for 1 minute. The command for 1 minute must look like node timer 1min.
// Utilize process.exit() to exit when there's an error and when there's no error but the time is up.
// Use process to access arguments from the command line.
// Test Timer with npm test
// EXTRA INFO
// You might want to consider using setInterval() and clearInterval() from Node Timers API which is identical to browser timer API. Most of front-end developers are already familiar with setInterval() so we won't duplicate and explain it here.
