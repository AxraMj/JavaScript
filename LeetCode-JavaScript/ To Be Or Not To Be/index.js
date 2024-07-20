function expect(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

try {
    const func = () => expect(5).toBe(5);
    console.log({"value": func()});
} catch (e) {
    console.log(e.message);
}

try {
    const func = () => expect(5).notToBe(3);
    console.log({"value": func()});
} catch (e) {
    console.log(e.message);
}

try {
    const func = () => expect(5).toBe(3);
    console.log({"value": func()});
} catch (e) {
    console.log(e.message);
}

try {
    const func = () => expect(5).notToBe(5);
    console.log({"value": func()});
} catch (e) {
    console.log(e.message);
}
