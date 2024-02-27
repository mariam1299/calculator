//ფუნქცია calculator, რომელშიც მთლიანი ფუნქციონალია
function calculator() {
  let num1, action, num2, result;
  //do while ით ხდება მონაცემის დალუპვა იქამდე, სანამ არ შეივსება რიცხვით
  do {
    const input1 = prompt("შეიყვანეთ პირველი რიცხვი:");
    if (input1.trim() === "") {
      alert("შეიყვანეთ რიცხვი.");
      continue;
    }
    num1 = Number(input1);
    if (isNaN(num1)) {
      alert("არ არის რიცხვი");
    }
  } while (isNaN(num1));

  do {
    action = prompt(
      "შეიყვანეთ მათემატიკური ოპერაცია: (+,  -, /  ან  *)"
    );
    if (!["+", "-", "*", "/"].includes(action)) {
      alert("არ არის მათემატიკური ოპერაცია");
    }
  } while (!["+", "-", "*", "/"].includes(action));

  do {
    const input2 = prompt("შეიყვანეთ მეორე რიცხვი:");
    if (input2.trim() === "") {
      alert("შეიყვანეთ რიცხვი.");
      continue;
    }
    num2 = Number(input2);
    if (isNaN(num2)) {
      alert("არ არის რიცხვი");
    }
  } while (isNaN(num2));
  //მათემატიკური ოპერააციები კი ხდება switch case ით
  switch (action) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "ნულზე გაყოფა არ შეიძლება";
      } else {
        result = num1 / num2;
      }
      break;
  }
  alert(`${result}`);
  calculator();
}

calculator();

