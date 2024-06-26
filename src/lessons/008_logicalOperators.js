/**
 * OR (||)
 */
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

/**
 * OR (||) finds the first truthy value
 */
console.log('' || 'Hello'); // Hello
console.log('Hello' || 'World'); // Hello
console.log(1 || 0); // 1
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (1 is the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

/**
 * AND (&&)
 */
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

/**
 * AND (&&) finds the first falsy value
 */
console.log('' && 'Hello'); // ''
console.log('Hello' && 'World'); // World (all truthy, returns the last value)
console.log(1 && 0); // 0
console.log(null && 1); // null
console.log(null && 0 && 1); // null
console.log(undefined && null && 0); // undefined

/**
 * NOT (!)
 */
console.log(!true); // false
console.log(!false); // true
console.log(!'Hello'); // false
console.log(!''); // true

/**
 * Nullish Coalescing Operator (??)
 * 
 * Difference between || and ??
 * || returns the first truthy value
 * ?? returns the first defined value (not null or undefined)
 */
console.log(undefined ?? 'Default Value'); // Default Value
console.log(null ?? 'Default Value'); // Default Value
console.log(0 ?? 'Default Value'); // 0
console.log('' ?? 'Default Value'); // ''
console.log(false ?? 'Default Value'); // false
console.log('Hello' ?? 'Default Value'); // Hello
