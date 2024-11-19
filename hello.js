const { spawn } = require('child_process');

const childPython = spawn('python', ['codespace.py', 'python_script']);

childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);  // Cambiado a comillas invertidas
});

childPython.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);  // Cambiado a comillas invertidas
});

childPython.on('close', (code) => {
    console.log(`child process exited with code: ${code}`);  // Cambiado a comillas invertidas
});