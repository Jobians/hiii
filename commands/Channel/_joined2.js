/*CMD
  command: /joined2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var channel = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "Channel2" // field name
})
  var id = user.telegramid
Api.getChatMember({ 
    chat_id : channel,
    user_id : id,
    on_result :"/check2"
  })
