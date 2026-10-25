import firebot, { Plugin } from "@crowbartools/firebot-types";
import exampleEffect from "./example-effect";

type Params = {
  message: string;
};

const plugin: Plugin<Params> = {
  manifest: {
    name: "Starter Plugin",
    description: "A starter Firebot plugin",
    icon: {
      type: "font-awesome",
      name: "fa-flask",
      color: "#a106de",
    },
    version: "1.0",
    author: "SomeDev"
  },
  parametersSchema: [
    {
      name: "message",
      type: "string",
      default: "Hello World!",
      title: "Hello!",
      description: "Logged to the console when the plugin loads",
    },
  ],
  registers: {
    effects: [exampleEffect],
  },
  onLoad: (context) => {
    firebot.logger.info(context.parameters.message);
  },
};

export default plugin;
