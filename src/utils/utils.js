export const calculateTimeLeft = () => {
  let year = new Date().getFullYear() + 1;
  let month = new Date().getMonth() - 4;
  let day = new Date().getDate() - 3;

  const difference = +new Date(`${year}-${month}-${day}`) - +new Date();

  let timeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
