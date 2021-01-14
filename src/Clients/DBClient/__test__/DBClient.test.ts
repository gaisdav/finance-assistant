import DBClient from "../index";

const db = new DBClient();

describe("DBClient", () => {
  beforeAll(async () => {
    await db.init();
  });

  it("should DBClient", () => {
    db.set("asd", 4);
  });
});
