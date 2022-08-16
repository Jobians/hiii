/*CMD
  command: /AddressCreatePayment
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message == "❌ Cancel"){
  Bot.runCommand("/start")
return
}
if (message.includes("@gmail.com")) {
User.setProperty("withdrawADDR", message)
Bot.runCommand("/sendPayment")

} else {
Bot.sendMessage("❌ Wrong Wallet Address")
Bot.runCommand("/start")
//Coinbase also check it
  return
}

