/*CMD
  command: /bondsu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var raamo = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "refer" // field name
})
var refb = parseFloat(raamo)
var cur = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})
var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
var refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balanceref.add(refb)
  Bot.sendMessageToChatWithId(refUser.chatId, "+"+raamo+" "+cur+" Added\n*Referral :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}}
