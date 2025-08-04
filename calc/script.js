function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  let display = document.getElementById("display");
  if (display.value.startsWith('-')) {
    display.value = display.value.substring(1);
  } else if (display.value !== "") {
    display.value = '-' + display.value;
  }
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// ✅ Keyboard Support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const allowedKeys = "0123456789+-*/.=EnterBackspaceDelete()";

  if (allowedKeys.includes(key)) {
    if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      deleteLast();
    } else if (key === "Delete") {
      clearDisplay();
    } else if (key === "=") {
      calculate();
    } else {
      appendValue(key);
    }
  }
});