import { Client, GatewayIntentBits } from "discord.js";

const prefix = "dng!";
const BOT = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

BOT.once("ready", () => {
  console.log(`Logged in as ${BOT.user?.tag}!`);
});

BOT.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift()?.toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  if (command === "where") {
    message.reply(`<@${message.author.id}> just call for duty @everyone`);
  }
});

BOT.login(process.env.BOT_TOKEN);
