const os = require('os');

// Get the operating system name
console.log('OS Type:', os.type()); 
// Output: 'Linux', 'Darwin' (for Mac), 'Windows_NT' (for Windows)

// Get the platform
console.log('Platform:', os.platform()); 
// Output: 'linux', 'win32', 'darwin'

// Get total system memory (in bytes)
console.log('Total Memory:', os.totalmem());

// Get free system memory (in bytes)
console.log('Free Memory:', os.freemem());

// Get home directory
console.log('Home Directory:', os.homedir());

// Get system uptime (in seconds)
console.log('System Uptime (seconds):', os.uptime());

// Get CPU information
console.log('CPU Info:', os.cpus());

// Get network interfaces
console.log('Network Interfaces:', os.networkInterfaces());
