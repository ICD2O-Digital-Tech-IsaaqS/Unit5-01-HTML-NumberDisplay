// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: June 2025
// This file contains the JS functions for index.html
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const outputDiv = document.getElementById('output');
const showNumbersBtn = document.getElementById('showNumbersBtn');

function isInteger(value) {
  // Check if value is an integer (no decimals)
  return /^-?\d+$/.test(value);
}

showNumbersBtn.addEventListener('click', () => {
  outputDiv.innerHTML = '';  // Clear previous output as HTML
  let min = minInput.value.trim();
  let max = maxInput.value.trim();

  // Validate inputs: must be integers (no decimals)
  if (!isInteger(min) || !isInteger(max)) {
    outputDiv.innerHTML = '<span class="error">Error: Please enter valid integer numbers for both min and max.</span>';
    return;
  }

  min = parseInt(min, 10);
  max = parseInt(max, 10);

  // Disallow negative numbers
  if (min < 0 || max < 0) {
    outputDiv.innerHTML = '<span class="error">Error: Negative numbers are not allowed.</span>';
    return;
  }

  if (min > max) {
    outputDiv.innerHTML = '<span class="error">Error: Min number cannot be greater than max number.</span>';
    return;
  }

  // Use a while loop to display numbers from min to max inclusive with <br> tags
  let current = min;
  let result = '';

  while (current <= max) {
    result += current + '<br>';
    current++;
  }

  outputDiv.innerHTML = result;
});