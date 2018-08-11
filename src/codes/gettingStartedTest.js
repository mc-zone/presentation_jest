// __test__/foo.test.js
const foo = require("./foo");

test("the first test", () => {
  expect(foo()).toBe("bar");
});
