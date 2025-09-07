const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "😁سلام! این بات برای نمایش رزومه امیرمحمد ساخته شده. با انتخاب یکی از دکمه ها ادامه دهید."
  )
);
bot.help((ctx) => ctx.reply("برای پیدا کردن معرفی امیرمحمد /introduce بزن"));
bot.command("introduce", (ctx) =>
  ctx.reply(
    `امیر محمد برنامه نویس فرانت اند هست با 2 سال تجربه در این حوزه و مسلط به:  
    HTML, CSS, Tailwind, JavaScript, TypeScript, Redux, Zustand, React Query, React, Next.js.  
    گیت‌هاب: https://github.com/Amir-mohammad-ahmady-1234 👽`
  )
);

bot.on("text", (ctx) => ctx.reply(`این جزو دستورات بات نیست😑`));

const PORT = process.env.PORT || 3000;
bot.telegram.setWebhook(
  `https://${process.env.LIARA_APP_DOMAIN}/bot${process.env.BOT_TOKEN}`
);
bot.startWebhook(`/bot${process.env.BOT_TOKEN}`, null, PORT);
