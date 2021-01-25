import DBClient from "../index";

const STORE_NAME = "amountStore";
const TEST_KEY = "test";
const TEST_VAL = "4";

const dbClient = new DBClient();

describe("DBClient", () => {
  beforeEach(async () => {
    await dbClient.init();
  });

  it("снимок", () => {
    expect.hasAssertions();
    expect(dbClient.db).toMatchSnapshot();
  });
});
