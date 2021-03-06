// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator x < y uses GetValue
 *
 * @path ch11/11.8/11.8.1/S11.8.1_A2.1_T3.js
 * @description If GetBase(y) is null, throw ReferenceError
 */

//CHECK#1
try {
  1 < y;
  $ERROR('#1.1: 1 < y throw ReferenceError. Actual: ' + (1 < y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1 < y throw ReferenceError. Actual: ' + (e));  
  }
}


