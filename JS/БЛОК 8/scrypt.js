'use strict'





let filterByType = (firstArgs,...arr) => {
    const type = arr.filter( item => {
        return typeof item == firstArgs
    });
    return type;
};

// filterByType('string', 1, 2, 3, 'boolean', true, false, 'string', 'number', 5);
// filterByType('number', 1, 2, 3, 'boolean', true, false, 'string', 'number', 5);
// filterByType('boolean', 1, 2, 3, 'boolean', true, false, 'string', 'number', 5);