/*CMD
  command: 🗂 BroToBoss
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var verify = User.getProperty("verify")
if(!verify){return}

var giveaway = User.getProperty("giveaway")
  if (giveaway) {
    Bot.sendMessage("_🙄 You Already Recieved Giveaway, Try To Invite Your Friends To Earn More_")
    return 
  }

var amount = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "bonus" // field name
})

var currency = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})

User.setProperty("giveaway", Date.now(), "integer")
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(parseFloat(amount))
Bot.sendMessage(
  "🎁 Congrats , you Received "+amount+" "+currency+""
)
