const { rocaInDir } = require("../util");

describe("foo", () => {
    it("foos", async () => {
        let results = await rocaInDir(__dirname);

        expect(results.stats).toMatchObject({
            suites: 1,
            tests: 2,
            passes: 2,
            pending: 0,
            failures: 0
        });


        expect(results.passes).toMatchObject([
            { fullTitle: "test suite has a test case" },
            { fullTitle: "test suite has another test case" }
        ]);
    });
});
