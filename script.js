// write js code here if required
function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

function updateTimer() {
    const now = new Date();
    const day = padNumber(now.getDate());
    const month = padNumber(now.getMonth() + 1); // Months are zero-based
    const year = now.getFullYear();
    const hours = padNumber(now.getHours());
    const minutes = padNumber(now.getMinutes());
    const seconds = padNumber(now.getSeconds());

    const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    document.getElementById('timer').innerText = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();