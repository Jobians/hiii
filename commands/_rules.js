/*CMD
  command: /rules
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📉 rules
CMD*/

var button = [[{text:"🤝 I Agree", callback_data:"/menuu r"}]]

var text = "*📄 Rules And Regulations:*\n\n1. Please Do Not Try To Scam My Bot.\n2. Do Not Create Multiple Accounts On The Bot\n3. *Users Who Try To Scam The Bot or Leave Our Channels Will Be Banned And Lose All Funds.*"

if(params == "r"){
Api.editMessageText({
  chat_id: user.telegramid,
  text: text,
  message_id: request.message.message_id,
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: button }
})
} else {
Bot.sendMessage(text)
}
