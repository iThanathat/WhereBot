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
    var _a;
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
        message.reply(`<@${message.author.id}> just call for duty @everyone`);
    }
});
BOT.login(process.env.BOT_TOKEN);
