"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const prefix = "dng!";
const BOT = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
BOT.once("ready", () => {
    var _a;
    console.log(`Logged in as ${(_a = BOT.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
});
BOT.on("messageCreate", (message) => {
    var _a, _b, _c, _d, _e;
    if (message.author.bot)
        return;
    if (!message.content.startsWith(prefix))
        return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
    if (command === "where") {
        const innerCircle = (_c = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.roles.cache.find((role) => role.name.toLowerCase().includes("inner"))) === null || _c === void 0 ? void 0 : _c.id;
        const dongGuards = (_e = (_d = message.guild) === null || _d === void 0 ? void 0 : _d.roles.cache.find((role) => role.name.toLowerCase().includes("dong"))) === null || _e === void 0 ? void 0 : _e.id;
        message.reply(`<@${message.author.id}> just call for duty <@&${innerCircle}> <@&${dongGuards}>`);
    }
});
BOT.login(process.env.BOT_TOKEN);
