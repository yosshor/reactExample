window.onload = function() {
    var logContainer = document.getElementById('logContainer');

    // Replace 'logs/' with the path to your log files
    var logFilesPath = 'C:\\inetpub\\wwwroot\\logs\\2024-03-19/';

    // Fetch log files from the server
    fetchLogFiles(logFilesPath);

    function fetchLogFiles(path) {
        fetch(path)
            .then(response => response.text())
            .then(data => displayLogs(data))
            .catch(error => console.error('Error fetching log files:', error));
    }

    function displayLogs(logs) {
        var logLines = logs.split('\n');
        logLines.forEach(logLine => {
            if (logLine.includes('[ERROR]')) {
                appendLog(logLine, 'error');
            } else if (logLine.includes('[WARNING]')) {
                appendLog(logLine, 'warning');
            } else if (logLine.includes('[INFO]')) {
                appendLog(logLine, 'info');
            } else if (logLine.includes('[DEBUG]')) {
                appendLog(logLine, 'debug');
            } else {
                appendLog(logLine, '');
            }
        });
    }

    function appendLog(logLine, logLevel) {
        var logElement = document.createElement('div');
        logElement.textContent = logLine;

        // Add specific class based on log level
        if (logLevel) {
            logElement.classList.add(logLevel);
        }

        logContainer.appendChild(logElement);
    }
}
