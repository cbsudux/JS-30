hourHand = document.querySelector(".hour-hand")
minuteHand = document.querySelector(".minute-hand")
secondHand = document.querySelector(".second-hand")

setInterval(() => {
    const d = new Date()
    hours = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()


    hourAngle = (hours > 12 ? hours - 12 : hours) / 12 * 360
    minutesAngle = minutes / 60 * 360
    secondsAngle = seconds / 60 * 360
    console.log(hourAngle)
    hourHand.style.transform = `rotate(${hourAngle + 90}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle + 90}deg)`;
    secondHand.style.transform = `rotate(${secondsAngle + 90}deg)`;


}, 1000)