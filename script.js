const input = document.getElementById('cronInput');
const output = document.getElementById('output');

input.addEventListener('input', updateCron);

function updateCron() {
    const cronVal = input.value.trim();
    
    if (!cronVal) {
        output.textContent = "Waiting for input...";
        output.className = "";
        return;
    }
    
    try {
        // Uses the cronstrue library loaded via CDN in the HTML
        const description = cronstrue.toString(cronVal);
        output.textContent = description;
        output.className = "";
    } catch (e) {
        output.textContent = "Invalid cron expression";
        output.className = "error";
    }
}
