function displayTime() {
    let specificTime = new Date();
    specificTime.setHours(23); 
    specificTime.setMinutes(0);
    specificTime.setSeconds(0);

    
    let hours = specificTime.getHours().toString().padStart(2, '0');
    let minutes = specificTime.getMinutes().toString().padStart(2, '0');
    let seconds = specificTime.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}
document.addEventListener('DOMContentLoaded', function() {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const monthDisplay = document.querySelector('.month span');
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function updateCalendar(month, year) {
        // Update the month display
        monthDisplay.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        // Update the days (this is a simplified example)
        const days = document.querySelector('.days');
        days.innerHTML = '';
        for (let i = 1; i <= 31; i++) {
            const day = document.createElement('li');
            day.textContent = i;
            days.appendChild(day);
        }
    }

    prev.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar(currentMonth, currentYear);
    });

    next.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar(currentMonth, currentYear);
    });

    updateCalendar(currentMonth, currentYear);
});