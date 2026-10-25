import firebot from "@crowbartools/firebot-types";
import plugin from "../src/main";

jest.mock("@crowbartools/firebot-types", () => ({
  __esModule: true,
  default: {
    logger: {
      info: jest.fn(),
    },
  },
}));

const mockedFirebot = firebot as unknown as {
  logger: { info: jest.Mock };
};

beforeEach(() => {
  mockedFirebot.logger.info.mockClear();
});

test("default export is the plugin definition", () => {
  expect(plugin).not.toBeUndefined();
  expect(plugin.manifest).not.toBeUndefined();
  expect(plugin.onLoad).not.toBeUndefined();
});

test("manifest declares the plugin type", () => {
  expect(plugin.manifest.type).toBe("plugin");
});

test("parametersSchema exposes the message parameter", () => {
  expect(plugin.parametersSchema).not.toBeUndefined();
  expect(plugin.parametersSchema?.[0]?.name).toBe("message");
});

test("onLoad logs the configured message", () => {
  const expectedMessage = "foobar";

  plugin.onLoad?.({
    parameters: { message: expectedMessage },
  } as Parameters<NonNullable<typeof plugin.onLoad>>[0]);

  expect(mockedFirebot.logger.info).toHaveBeenCalledTimes(1);
  expect(mockedFirebot.logger.info).toHaveBeenCalledWith(expectedMessage);
});
