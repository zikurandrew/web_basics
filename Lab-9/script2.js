const maxStars = 29;  //9, 17, 23, 27, 29, 29, 27, 23, 17, 9

const step = 4;

for (let i = 9; i <= maxStars; i += step) {
  console.log('*'.repeat(i));
}

for (let i = maxStars; i >= 9; i -= step) {
  console.log('*'.repeat(i));
}
