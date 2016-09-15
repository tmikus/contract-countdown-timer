window.addEventListener("load", function ()
{
    var celebrationTime = moment("2016-12-31", "YYYY-MM-DD")

    function setDisplayValues(months, days, hours, minutes, seconds, millisecondsLeft)
    {
        monthsDisplay.innerText = months > 0 ? (months + " months, ") : "";
        daysDisplay.innerText = days > 0 ? (days + " days, ") : "";

        hoursDisplay.className = "number completed-" + Math.floor(minutes / 60 * 100)
        hoursDisplay.innerText = (hours < 10 ? "0" : "") + hours;

        minutesDisplay.className = "number completed-" + Math.floor(seconds / 60 * 100);
        minutesDisplay.innerText = (minutes < 10 ? "0" : "") + minutes;
        
        secondsDisplay.className = "number completed-" + Math.floor(millisecondsLeft / 10);
        secondsDisplay.innerText = (seconds < 10 ? "0" : "") + seconds;
    }

    function updateDisplays()
    {
        var now = moment();
        var monthsLeft = Math.floor(celebrationTime.diff(now, "months"));
        now.add(monthsLeft, "months");

        var daysLeft = Math.floor(celebrationTime.diff(now, "days"));
        now.add(daysLeft, "days");

        var hoursLeft = Math.floor(celebrationTime.diff(now, "hours"));
        now.add(hoursLeft, "hours");

        var minutesLeft = Math.floor(celebrationTime.diff(now, "minutes"));
        now.add(minutesLeft, "minutes");

        var secondsLeft = Math.floor(celebrationTime.diff(now, "seconds"));
        now.add(secondsLeft, "seconds");

        var millisecondsLeft = Math.floor(celebrationTime.diff(now, "milliseconds"));
        setDisplayValues(monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft, millisecondsLeft);
    }

    var monthsDisplay = document.getElementById("months");
    var daysDisplay = document.getElementById("days");
    var hoursDisplay = document.getElementById("hours");
    var minutesDisplay = document.getElementById("minutes");
    var secondsDisplay = document.getElementById("seconds");

    updateDisplays();
    setInterval(updateDisplays, 10);
});