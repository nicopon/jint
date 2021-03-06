// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Number constructor has the property "prototype"
 *
 * @path ch15/15.7/15.7.3/S15.7.3_A1.js
 * @description Checking existence of the property "prototype"
 */

if(!Number.hasOwnProperty("prototype")){
  $ERROR('#1: The Number constructor has the property "prototype"');
}


