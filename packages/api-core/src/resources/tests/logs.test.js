import AvLogMessages from '../logs';

const mockHttp = jest.fn(() => Promise.resolve({}));
const mockMerge = jest.fn((...args) => Object.assign(...args));

describe('AvLogMessages', () => {
  let api;

  test('should be defined', () => {
    api = new AvLogMessages({
      http: mockHttp,
      promise: Promise,
      merge: mockMerge,
      config: {},
    });
    expect(api).toBeDefined();
  });

  test('send() should return {level, entries}', () => {
    api = new AvLogMessages({
      http: mockHttp,
      promise: Promise,
      merge: mockMerge,
      config: {},
    });
    const level = 'testLevel';
    const entries = 'testEntries';
    expect(api.send(level, entries)).toEqual({
      level,
      entries,
    });
  });

  test('send() should delete entries.level', () => {
    api = new AvLogMessages({
      http: mockHttp,
      promise: Promise,
      merge: mockMerge,
      config: {},
    });
    const level = 'testLevel';
    const entries = {
      value: 'testEntries',
    };
    const expectedResult = { level, entries };
    entries.level = 'testEntriesLevel';
    expect(api.send(level, entries)).toEqual(expectedResult);
  });

  describe('log levels', () => {
    const testEntries = 'testEntry';

    beforeEach(() => {
      api = new AvLogMessages({
        http: mockHttp,
        promise: Promise,
        merge: mockMerge,
        config: {},
      });
      api.send = jest.fn();
      api.create = jest.fn();
    });

    test("debug should create with level 'debug'", () => {
      api.debug(testEntries);
      expect(api.send).toHaveBeenLastCalledWith('debug', testEntries);
      expect(api.create).toHaveBeenCalled();
    });
    test("info should create with level 'info'", () => {
      api.info(testEntries);
      expect(api.send).toHaveBeenLastCalledWith('info', testEntries);
      expect(api.create).toHaveBeenCalled();
    });

    test("warn should create with level 'warn'", () => {
      api.warn(testEntries);
      expect(api.send).toHaveBeenLastCalledWith('warn', testEntries);
      expect(api.create).toHaveBeenCalled();
    });

    test("error should create with level 'error'", () => {
      api.error(testEntries);
      expect(api.send).toHaveBeenLastCalledWith('error', testEntries);
      expect(api.create).toHaveBeenCalled();
    });
  });
});
