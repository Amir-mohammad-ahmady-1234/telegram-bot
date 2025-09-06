const { Telegraf } = require("telegraf");

// ⚡️ توکن باتت رو از BotFather بگیر و اینجا بذار
const bot = new Telegraf(process.env.BOT_TOKEN);

// دستورات ساده
bot.start((ctx) => ctx.reply("سلام سلطان 👑 باتت روشن شد 🚀"));
bot.help((ctx) => ctx.reply("دستور /start رو بزن تا شروع کنیم"));
bot.on("text", (ctx) => ctx.reply(`تو گفتی: ${ctx.message.text}`));

// اجرا
bot.launch();
