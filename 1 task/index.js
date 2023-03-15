const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        const timeInterval = setInterval(() => {
            const hour = Math.floor(seconds / 60 / 60),
                  minute = Math.floor(seconds / 60) - (hour * 60),
                  second = seconds % 60

            // Склонение величин времени
            function decOfNum(num, arrOfWords) {
                let m = Math.abs(num) % 100;
                let n1 = m % 10;
                if (m > 10 && m < 20) {
                    return arrOfWords[2];
                }
                if (n1 > 1 && n1 < 5) {
                    return arrOfWords[1];
                }
                if (n1 === 1) {
                    return arrOfWords[0];
                }
                return arrOfWords[2];
            }

            // Фильтр для времени (добавление 0)
            let timeFormatted = [hour,minute,second]
                .map(v => v < 10 ? "0" + v : v)
                .filter((v,i) => v !== "00" || i > 0)
                .join(":")

            timerEl.innerHTML = `${timeFormatted} - 
            ${hour} ${decOfNum(hour, ["час", "часа", "часов"])},
            ${minute} ${decOfNum(minute, ["минута", "минуты", "минут"])},
            ${second} ${decOfNum(second, ["секунда", "секунды", "секунд"])}`

            seconds = seconds - 1

            // Очистка setInterval'a
            if (seconds < 0) {
                alert("Внимание! Время таймера вышло!")
                clearInterval(timeInterval);
            }
        }, 1000)

    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Регулярное выражение которое одобряет только числа
    inputEl.value = inputEl.value.replace(/[^0-9+]/g, '');
    // Очистите input так, чтобы в значении
    // оставались только числа
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    // В ТЗ не было значений: дни, недели, месяцы и т.д. Поэтому сделал ограничение таймера до 24 часов
    if (seconds < 86400) {
        animateTimer(seconds)
    } else {
        timerEl.innerHTML = 'Вы ввели значение которое больше 24 часов (86400 секунд)'
    }

    inputEl.value = '';
});