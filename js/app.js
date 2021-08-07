const billAmmount = document.getElementById("bill")
const noOfPeople = document.getElementById("people")
const customTipPercentage = document.getElementById("customeTip")
const tipAmmountDisplay = document.getElementById("tipAmmount")
const totalAmmountDisplay = document.getElementById("totalAmount")
const resetButton = document.getElementById("resetBtn")
const tipButtons = document.querySelectorAll(".btn-primary")

tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipValue = e.target.value
    console.log(billAmmount.value)
    if (billAmmount.value === "" || billAmmount.value <= 0) {
      billAmmount.classList.add("error")
      return
    } else {
      billAmmount.classList.remove("error")
    }
    if (noOfPeople.value === "" || noOfPeople.value <= 0) {
      noOfPeople.classList.add("error")
      document.getElementById("errorMsg").innerText = "Can't be Zero"
      return
    } else {
      noOfPeople.classList.remove("error")
      document.getElementById("errorMsg").innerText = ""
    }

    calculateTip(
      parseFloat(billAmmount.value),
      parseInt(noOfPeople.value),
      parseInt(tipValue)
    )
  })
})

customTipPercentage.addEventListener("blur", (e) => {
  console.log(e.target.value)
  if (billAmmount.value === "" || billAmmount.value <= 0) {
    billAmmount.classList.add("error")
    return
  } else {
    billAmmount.classList.remove("error")
  }
  if (noOfPeople.value === "" || noOfPeople.value <= 0) {
    noOfPeople.classList.add("error")
    document.getElementById("errorMsg").innerText = "Can't be Zero"
    return
  } else {
    noOfPeople.classList.remove("error")
    document.getElementById("errorMsg").innerText = ""
  }

  calculateTip(
    parseFloat(billAmmount.value),
    parseInt(noOfPeople.value),
    parseFloat(e.target.value)
  )
})

function calculateTip(billAmmount, noOfPeople, tipValue) {
  console.log(
    "bill funtion calling",
    typeof billAmmount,
    typeof noOfPeople,
    typeof tipValue
  )

  let tipAmmount = (billAmmount * (tipValue / 100)) / noOfPeople
  let tip = tipAmmount.toFixed(2)

  let totalAmmount = (tipAmmount * noOfPeople + billAmmount) / noOfPeople
  totalAmmount = totalAmmount.toFixed(2)

  tipAmmountDisplay.innerText = `$${tip}`
  totalAmmountDisplay.innerText = `$${totalAmmount}`
}

resetButton.addEventListener("click", resetAll)
function resetAll() {
  billAmmount.value = ""
  noOfPeople.value = ""
  tipAmmountDisplay.innerText = "$0.00"
  totalAmmountDisplay.innerText = "$0.00"
}
