/**
 *  "use strict" is a directive that tells the browser to execute the code in strict mode.
 *  Strict mode is a way to secure JavaScript code by making it more robust and less error-prone.
 * 
 *  "use strict" should be placed at the top of the file or function.
 *  only comments can be placed above "use strict".
 */

// with "use strict"
'use strict';
x = 3.14; // This will cause an error because x is not declared
console.log(x); // ReferenceError: x is not defined

// without "use strict"
x = 3.14; // This will not cause an error
console.log(x); // 3.14
