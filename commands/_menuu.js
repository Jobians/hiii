/*CMD
  command: /menuu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ā¬ļø return, ā cancel
CMD*/

var verify = User.getProperty("verify")
if(!verify){
return}

var currency = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})
var res = Libs.ResourcesLib.userRes("balance");

if(params == "r"){
Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}

Bot.sendKeyboard("š° Balance " +res.value().toFixed(8)+" "+currency+"\nš Referral,š¤ Payout\nš Rules,ā¼ Earn More\nš BroToBoss", "ā¹ļø Welcome Bro")
