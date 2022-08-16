/*CMD
  command: /check2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Channel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var user = options.result.status
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  User.setProperty("status", user, "string")
  Bot.runCommand("/rules r")
  Bot.runCommand("/bondsu")
}

if (user == "left") {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Please Join My @MetaAirdrops Channel",
  show_alert: true
})
}
