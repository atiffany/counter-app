function numberPrinter(event) {
  event.preventDefault();
  let input = document.getElementById("input").value;
  console.log(input);
  let orderedNumbers = [];
  for (let i = 1; i <= parseInt(input); i++) {
    orderedNumbers.push(i);
  }
  console.log(orderedNumbers);
}
