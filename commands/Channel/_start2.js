/*CMD
  command: /start2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var verify = User.getProperty("verify")
if(!verify){return}
Bot.sendInlineKeyboard([{title: "✅ Joined", command: "/joined"} ], "*ℹ️ Hello, Before We Start You Need To Join My Channels.*\n\n◼️ @BroToBoss\n◼️ @MetaAirdrops",{disable_web_page_preview: "true"}
)
