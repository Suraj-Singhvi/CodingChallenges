describe('Basic tests', () => {
    Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
});

describe("Random tests", () => {
    const sol = a => `(${a.slice(0, 3).join('')}) ${a.slice(3, 6).join('')}-${a.slice(6).join('')}`;
    for (let i = 0; i < 100; i++) {
        const a = Array.from({ length: 10 }, _ => Math.floor(Math.random() * 10)),
            exp = sol(a);
        Test.assertEquals(createPhoneNumber(a), exp);
    }
});