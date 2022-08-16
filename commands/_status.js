/*CMD
  command: /status
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

var spent = Libs.ResourcesLib.anotherChatRes("budget", "global")

var budget = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "budget" // field name
})

var currency = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})

var ch1 = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "Channel1" // field name
})

var ch2 = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "Channel2" // field name
})

if (spent.value() == budget) {
  Bot.sendMessage(
    "❌ "+currency+" Budget For This Giveaway Have Exceeded\n\nJoin Our Channels For More Updates\n◼️ "+ch1+"\n◼️ "+ch2+"")
return}

if(currency){
Bot.sendMessage(
    "🎁 "+currency+" Giveaway Running")
return }
 Bot.sendMessage(
    "❌ No Giveaway Running\n\nJoin Our Channels For More Updates\n◼️ "+ch1+"\n◼️ "+ch2+"")
