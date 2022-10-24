// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-template-pwa/sw.js", {
    scope: "/ICS2O-template-pwa/",
  })
}

/**
 * This function calculates area and perimeter of rectangle.
 */
function myButtonClicked() {
  //input
  const hours = parseFloat(document.getElementById("hours-worked").value)
  const rate = parseFloat(document.getElementById("hourly-rate").value)
  const cats = parseInt(document.getElementById("cats-owned").value)

  //process
  const TAX_RATE = 0.18
  const payment = hours * rate * (1.0 - TAX_RATE)
  const taxes = hours * rate * TAX_RATE

  //output
  document.getElementById(
    "pay"
  ).innerHTML = `Your pay will be: $ ${payment.toFixed(2)}`
  document.getElementById(
    "tax"
  ).innerHTML = `The government will take: $ ${taxes.toFixed(2)}`

  if (cats < 5) {
    document.getElementById("cat").innerHTML = "you should get one more cat"
  } else {
    document.getElementById("cat").innerHTML = "thats enough cats..."
  }
}
