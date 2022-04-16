// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Operation {
  int public result = 0;
  
  function add (int x, int y) public {
    result = x + y;
  }

  function sub (int x, int y) public {
    result = x - y;
  }
}