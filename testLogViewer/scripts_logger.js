document.addEventListener("DOMContentLoaded", function () {
  // Code to load log data and update the log table
  loadLogData();
});

const displayLogFile = async () => {
  try {
    const response = await fetch("./api/logs/log.txt");
    if (!response.ok) {
      throw new Error(`Failed to fetch log file: ${response.statusText}`);
    }
    const fileContent = await response.text();
    console.log(fileContent);
    
    // Split the file content by lines
    const lines = fileContent.split("\n");

    // Parse each line into a log entry object
    const logData = lines.map((line) => {
      const [timezone, type, project, sector, message] = line.split("|");
      return { timezone, type, project, sector, message };
    });

    return logData; // Return the array of log data objects
  } catch (err) {
    console.error("Error reading file:", err);
    throw err; // Re-throw the error to propagate it to the caller
  }
};

const loadLogData = async () => {
  var logData = await displayLogFile();
  // Process the log data and update the log table
  updateLogTable(logData);
};


function updateLogTable(data) {
  const logTableContainer = document.getElementById("logTableContainer");

  // Create table element
  const table = document.createElement("table");
  table.classList.add("log-table");

  // Create table header row
  const headerRow = table.insertRow();
  ["Timezone", "Type", "Project", "Sector", "Message"].forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  // Create table rows with log data
  data.forEach((log) => {
    if (log) { // Check if log is not undefined or null
      const row = table.insertRow();
      ["timezone", "type", "project", "sector", "message"].forEach((key) => {
        const cell = row.insertCell();
        cell.textContent = log[key];
      });

      // Add background color based on log type if type property exists
      if (log.type) {
        console.log(log.type.toLowerCase());
        switch (log.type.toLowerCase()) {
          case "info":
            row.classList.add("info-log");
            break;
          case "error":
            row.classList.add("error-log");
            break;
          case "debug":
            row.classList.add("debug-log");
            break;
          case "fatal":
            row.classList.add("fatal-log");
            break;
          case "warn":
            row.classList.add("warn-log");
            break;
          default:
            // For other types, no specific color
            break;
        }
      }
    }
  });

  // Replace existing table with updated one
  logTableContainer.innerHTML = "";
  logTableContainer.appendChild(table);
}
