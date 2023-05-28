// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

describe('Test the functionality of isPhoneNumber', () => {
    // Test 1
    test('Checks if 858-203-4928 is a valid phone number', () => {
        expect(functions.isPhoneNumber("858-203-4928")).toBe(true);
    });

    // Test 2
    test('Checks if 465-023-4522 is a valid phone number', () => {
        expect(functions.isPhoneNumber("465-023-4522")).toBe(true);
    });

    // Test 3
    test('Checks if 465-023-522 is a valid phone number', () => {
        expect(functions.isPhoneNumber("465-023-522")).toBe(false);
    });

    // Test 4
    test('Checks if 4650234522 is a valid phone number', () => {
        expect(functions.isPhoneNumber("4650234522")).toBe(false);
    });
});


describe('Test the functionality of isEmail', () => {
    // Test 1
    test('Checks if nakul@nandhakumar.net is a valid email', () => {
        expect(functions.isEmail("nakul@nandhakumar.net")).toBe(true);
    });

    // Test 2
    test('Checks if NaKuL@gmail.com is a valid email', () => {
        expect(functions.isEmail("NaKuL@gmail.com")).toBe(true);
    });

    // Test 3
    test('Checks if nakulnandhakumar.net is a valid email', () => {
        expect(functions.isEmail("nakulnandhakumar.net")).toBe(false);
    });

    // Test 4
    test('Checks if nakulnandhakumar@net is a valid email', () => {
        expect(functions.isEmail("nakulnandhakumar@net")).toBe(false);
    });
});

describe('Test the functionality of isStrongPassword', () => {
    // Test 1
    test('Checks if hashtagsrC0Ol is a strong password', () => {
        expect(functions.isStrongPassword("hashtagsrC0Ol")).toBe(true);
    });

    // Test 2
    test('Checks if Un_iversity is a strong password', () => {
        expect(functions.isStrongPassword("Un_iversity")).toBe(true);
    });

    // Test 3
    test('Checks if morethan15characters is a strong password', () => {
        expect(functions.isStrongPassword("nakulnandhakumar.net")).toBe(false);
    });

    // Test 4
    test('Checks if 0number is a strong password', () => {
        expect(functions.isStrongPassword("nakulnandhakumar@net")).toBe(false);
    });
});

describe('Test the functionality of isDate', () => {
    // Test 1
    test('Checks if 05/29/2023 is a valid date', () => {
        expect(functions.isDate("05/29/2023")).toBe(true);
    });

    // Test 2
    test('Checks if 5/9/2023 is a valid date', () => {
        expect(functions.isDate("5/29/2023")).toBe(true);
    });

    // Test 3
    test('Checks if 5/29/23 is a valid date', () => {
        expect(functions.isDate("5/29/23")).toBe(false);
    });

    // Test 4
    test('Checks if 005/29/2023 is a valid date', () => {
        expect(functions.isDate("005/29/2023")).toBe(false);
    });
});

describe('Test the functionality of isHexColor', () => {
    // Test 1
    test('Checks if Fa0 is a valid hex color', () => {
        expect(functions.isHexColor("Fa0")).toBe(true);
    });

    // Test 2
    test('Checks if Fa0F2B is a valid hex color', () => {
        expect(functions.isHexColor("Fa0F2B")).toBe(true);
    });

    // Test 3
    test('Checks if Fg0 is a valid hex color', () => {
        expect(functions.isHexColor("Fg0")).toBe(false);
    });

    // Test 4
    test('Checks if Fa0F2B1 is a valid hex color', () => {
        expect(functions.isHexColor("Fa0F2B1")).toBe(false);
    });
});