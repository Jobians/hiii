/*CMD
  command: /check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("/joined2")
}

if (user == "left") {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Please Join My @BroToBoss Channel",
  show_alert: true
})
}
