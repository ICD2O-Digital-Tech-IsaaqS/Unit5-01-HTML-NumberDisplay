// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: June 2025
// This file contains the JS functions for index.html
showNumbersBtn.addEventListener('click', () => {
    outputDiv.innerHTML = '';  // clear previous output as HTML
    let min = minInput.value.trim();
    let max = maxInput.value.trim();
  
    if (!isInteger(min) || !isInteger(max)) {
      outputDiv.innerHTML = '<span class="error">Error: Please enter valid integer numbers for both min and max.</span>';
      return;
    }
  
    min = parseInt(min, 10);
    max = parseInt(max, 10);
  
    if (min < 0 || max < 0) {
      outputDiv.innerHTML = '<span class="error">Error: Negative numbers are not allowed.</span>';
      return;
    }
  
    if (min > max) {
      outputDiv.innerHTML = '<span class="error">Error: Min number cannot be greater than max number.</span>';
      return;
    }
  
    let current = min;
    let result = '';
  
    while (current <= max) {
      result += current + '<br>';  // use <br> for line breaks in HTML
      current++;
    }
  
    outputDiv.innerHTML = result;
  });