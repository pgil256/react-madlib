const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("inserts comma", () => {
    const resp = addCommas(1234)
    expect(resp).toEqual('1,234')
   });
  test("inserts commas", () => {
    const resp = addCommas(1000000)
    expect(resp).toEqual('1,000,000')
   });
  test("inserts commas", () => {
    const resp = addCommas(987654321)
    expect(resp).toEqual('9,876,543,210')
   });
  test("does not insert comma", () => {
    const resp = addCommas(6)
    expect(resp).toEqual('6')
   });
  test("inserts comma, keeps negative sign", () => {
    const resp = addCommas(-5678)
    expect(resp).toEqual('-5,678')
   });
});

