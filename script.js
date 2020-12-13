
setInterval(setClock, 1000)
    console.log('logging hour hand.. ');
    const hourHand = document.querySelector('[data-hour-hand]')
    const minuteHand = document.querySelector('[data-minute-hand]')
    const secondHand = document.querySelector('[data-second-hand]')

    function setClock(){
        const currentDate = new Date()
        const secondsRatio = currentDate.getSeconds()/60;
        console.log('secondsRatio:', secondsRatio);
        const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
        const hourRatio = (minutesRatio + currentDate.getHours())/ 12;
        setRotation(secondHand, secondsRatio)
        setRotation(minuteHand, minutesRatio)
        setRotation(hourHand, hourRatio)

    }

    function setRotation(element, rotationRatio){
        element.style.setProperty('--rotation', rotationRatio *360)
    }
    setClock()
