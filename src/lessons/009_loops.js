/**
 * While loop
 */
let i = 0;
while (i < 3) {
    console.log(i); // 0, 1, 2
    i++;
}

/**
 * Do-While loop
 */
let j = 0;
do {
    console.log(j); // 0, 1, 2
    j++;
} while (j < 3);

/**
 * For loop
 */
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

/**
 * Break
 */
let k = 0;
while (k < 5) {
    console.log(k); // 0, 1, 2, 3
    if (k === 3) {
        break;
    }
    k++;
}

/**
 * Continue
 */
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;

    console.log(i); // 1, 3, 5, 7, 9
}
