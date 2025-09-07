const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "😁 سلام! این بات برای نمایش رزومه امیرمحمد ساخته شده. با انتخاب یکی از دکمه‌ها ادامه دهید."
  )
);

bot.help((ctx) => ctx.reply("برای معرفی امیرمحمد /introduce بزن"));

bot.command("introduce", (ctx) =>
  ctx.reply(
    `امیرمحمد برنامه‌نویس فرانت‌اند با 2 سال تجربه هست.  
    مهارت‌ها: HTML, CSS, Tailwind, JavaScript, TypeScript, Redux, Zustand, React Query, React, Next.js.  
    گیت‌هاب: https://github.com/Amir-mohammad-ahmady-1234 👽`
  )
);

bot.on("text", (ctx) => ctx.reply("این جزو دستورات بات نیست 😑"));

const PORT = process.env.PORT || 3000;
const URL = `https://${process.env.LIARA_APP_DOMAIN}`;

bot.telegram.setWebhook(`${URL}/bot${process.env.BOT_TOKEN}`);
bot.startWebhook(`/bot${process.env.BOT_TOKEN}`, null, PORT);
