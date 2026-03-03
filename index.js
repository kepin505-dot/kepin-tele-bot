import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    bot.sendMessage(chatId, "Halo bang 😎 Bot aktif!");
  }

  if (text === "/ping") {
    bot.sendMessage(chatId, "Pong 🏓");
  }
});
