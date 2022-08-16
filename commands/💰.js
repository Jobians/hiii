/*CMD
  command: 💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var verify = User.getProperty("verify")
if(!verify){
return}

var currency = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})

//Libs.MembershipChecker.check()
var res = Libs.ResourcesLib.userRes("balance");

Bot.sendMessage("🏦 Balance: "+res.value().toFixed(6) + " "+currency+"")
