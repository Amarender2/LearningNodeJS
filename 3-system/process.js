process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    process.stdout.write("Data : " + chunk);
});

process.stdin.on('end', function () {
    process.stderr.write("Ended");
});
// ctrl + D

process.on('SIGTERM', function () {
    process.stderr.write("This process is being terminated by external program");
});
// kill -TERM pid

console.log("Node is running as process " + process.pid);