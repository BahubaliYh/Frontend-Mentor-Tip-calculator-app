const billAmmount = document.getElementById("billAmmount")
const noOfPeople = document.getElementById("people")
console.log("billAmmount", billAmmount.value)

document
  .querySelectorAll(".btn-primary")
  .forEach((btn) => btn.addEventListener("click", btnClick))

document.getElementById("resetBtn").addEventListener("click", resetAllFields)
function btnClick() {
  console.log("btn value this value", this.value)
  const discountPer = this.value
  let billAmmount1 = parseFloat(billAmmount.value)
  let noOfPeople1 = parseInt(noOfPeople.value)
  parseInt(discountPer)
  // console.log("inside people", noOfPeople)
  if (billAmmount1 <= 0 || billAmmount1 === null) {
    console.log("inside bill value")
    document.getElementById("billAmmount").classList.add("error")
  } else {
    document.getElementById("billAmmount").classList.remove("error")
    // calculateBill()
  }
  if (noOfPeople <= 0 || noOfPeople === null) {
    console.log("inside people", noOfPeople)
    document.getElementById("people").classList.add("error")
    document.getElementById("errorMsg").innerText = "Can't be Zero"
  } else {
    document.getElementById("people").classList.remove("error")
    document.getElementById("errorMsg").innerText = ""
    calculateBill()
  }

  function calculateBill() {
    let tipAmmount = billAmmount * (discountPer / 100)
    let tipAmmountPerPerson = tipAmmount / noOfPeople
    let billAmmountPerPerson = billAmmount / noOfPeople
    console.log("tipAmmount", tipAmmount)
    console.log("billAmmount", billAmmount)
    let total = tipAmmountPerPerson + parseFloat(billAmmountPerPerson)
    total = parseFloat(total).toFixed(2)
    tipAmmountPerPerson = tipAmmountPerPerson.toFixed(2)

    // console.log("nan", tipAmmount, discountPer, billAmmount)
    document.getElementById("tipAmmount").innerText = `$${tipAmmountPerPerson}`
    document.getElementById("totalAmount").innerText = `$${total}`
  }
}

function resetAllFields() {
  document.getElementById("tipAmmount").innerText = `$0.00`
  document.getElementById("totalAmount").innerText = `$0.00`
  billAmmount.value = ""
  noOfPeople.value = ""
}
