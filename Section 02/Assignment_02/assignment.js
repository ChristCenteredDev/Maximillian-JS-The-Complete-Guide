const task3Element = document.getElementById('task-3');

const alertMe = () => {
  alert('ALERT ALERT!!!');
};

const alertName = (name) => {
  alert(`Alert ${name}`);
};

alertMe();
alertName("Jesus Christ");
task3Element.addEventListener('click', alertMe);

const concatMyStrings = (str1, str2, str3) => {
  return str1 + str2 + str3;
}

alert(concatMyStrings('Hel', 'lo ', 'World'));