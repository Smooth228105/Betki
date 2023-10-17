const Seconds1 = 3665;
const hours = Math.floor(Seconds1 / 3600);
const minutes = Math.floor((Seconds1 % 3600) / 60);
const seconds2 = Seconds1 % 60;
console.log("Время:", hours, "ч", minutes, "мин", seconds2, "сек");