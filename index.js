const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "😁سلام! این بات برای نمایش رزومه امیرمحمد ساخته شده. با انتخاب یکی از دکمه ها ادامه دهید."
  )
);
bot.help((ctx) => ctx.reply("برای پیدا معرفی امیرمحمد /interduce بزن"));
bot.interduce((ctx) =>
  ctx.reply(
    `امیر محمد برنامه نویس فرانت اند هست یا 2 سال تجربه در این حوزه و مسلط به : 
    html,css,tailsind, jsvascript, typescript,redux,zustand,reactQuery,react,nextjs.
    گیت هاب : https://github.com/Amir-mohammad-ahmady-1234 👽`
  )
);

bot.on("text", (ctx) => ctx.reply(`این جزو دستورات بات نیست😑`));

bot.launch();
