import DBClient from "../index";

const STORE_NAME = "amountStore";
const TEST_KEY = "test";
const TEST_VAL = "4";

const db = new DBClient([{ storageName: STORE_NAME }]);

describe("DBClient", () => {
  beforeEach(async () => {
    await db.init();
  });

  it("снимок", () => {
    expect.hasAssertions();
    expect(db.db).toMatchSnapshot();
  });

  describe("set", () => {
    it("должен вернуть правильный ключ, после записи в IndexedDB", async () => {
      expect.hasAssertions();
      expect(await db.set(STORE_NAME, TEST_KEY, TEST_VAL)).toStrictEqual(
        TEST_KEY
      );
    });
  });

  describe("get", () => {
    it("должен получить правильное значение из IndexedDB", async () => {
      expect.hasAssertions();
      await db.set(STORE_NAME, TEST_KEY, TEST_VAL);
      expect(await db.get(STORE_NAME, TEST_KEY)).toStrictEqual(TEST_VAL);
    });
  });

  describe("delete", () => {
    it("должен удалить значение из IndexedDB", async () => {
      expect.hasAssertions();
      await db.set(STORE_NAME, TEST_KEY, TEST_VAL);
      await db.delete(STORE_NAME, TEST_KEY);
      expect(await db.get(STORE_NAME, TEST_KEY)).toBeNull();
    });
  });

  describe("dismiss", () => {
    it.todo("должен очистить IndexedDB");
  });
});
