# Starter Firebot Plugin

A template for building [Firebot](https://firebot.app) plugins (formerly known as "startup scripts") in TypeScript, bundled with [tsdown](https://tsdown.dev).

> [!IMPORTANT]
> This template targets the new plugin API that only works with **Firebot v5.67.0 or newer**. Earlier versions of Firebot are not supported.

### Setup

1. Create a new repo based off this template (click "Use this Template" above) or fork it.
2. `npm install`

### Building

```
npm run build
```

The compiled plugin is written to `dist/<pluginOutputName>.js` as a single file.

### Installing in Firebot
1. Run `npm run build:dev`. This builds the plugin and automatically copies the `.js` file into Firebot's `scripts/` folder.
2. In Firebot, open the plugin manager, click Install, and select your plugins `.js` file in your `scripts/` folder.

During development you can rerun `npm run build:dev` to have the latest code rebuilt and copied over again.

If Firebot is running, the command will also instruct Firebot to reload the plugin automatically as a form of hot-reload.

### Testing

```
npm test
```

### Notes

- Keep the plugin definition object (the one with `manifest`, `parametersSchema`, and `onLoad`) in `src/main.ts`. The build minifies output but preserves function names, which Firebot relies on to load the plugin.
- `@crowbartools/firebot-types` is treated as an external dependency and is provided by Firebot at runtime - it is not bundled into your output.
- Edit the `"pluginOutputName"` property in `package.json` to change the filename of the built plugin.
