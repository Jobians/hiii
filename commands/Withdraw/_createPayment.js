/*CMD
  command: /createPayment
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*var text = "⏩ Send me your *"+params+"* wallet address..."*/
var text = "⏩ Send me your coinbase email address..."

Api.deleteMessage({
chat_id :  chat.chatid,
message_id : request.message.message_id
})
Bot.sendKeyboard("❌ Cancel",text)
User.setProperty("withdrawcoin",params)
Bot.runCommand("/AddressCreatePayment")
