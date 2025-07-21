const form = document.getElementById('ageForm');
const result = document.getElementById('result');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  result.innerText = '';
  message.innerText = '';

  const d = parseInt(document.getElementById('day').value);
  const m = parseInt(document.getElementById('month').value);
  const y = parseInt(document.getElementById('year').value);

  const today = new Date();
  const dob = new Date(y, m - 1, d);

  if (isNaN(d) || isNaN(m) || isNaN(y) || dob > today || dob.getDate() !== d || dob.getMonth() !== m - 1) {
    message.innerText = '⚠ Please enter a valid date of birth.';
    return;
  }

  message.style.color = 'black';
  message.innerText = '🔎 Calculating...';

  setTimeout(() => {
    let ageY = today.getFullYear() - y;
    let ageM = today.getMonth() - (m - 1);
    let ageD = today.getDate() - d;

    if (ageD < 0) {
      ageM--;
      ageD += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
    }

    if (ageM < 0) {
      ageY--;
      ageM += 12;
    }

    message.innerText = '';
    result.innerText = `🎉 You are ${ageY} years, ${ageM} months and ${ageD} days old.`;
  }, 500);
});

resetBtn.addEventListener('click', () => {
  form.reset();
  result.innerText = '';
  message.innerText = '';
});
