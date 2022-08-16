/*CMD
  command: /bondsu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
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
var count = Libs.ReferralLib.getRefCount(refUser.id)

if (count >= 1 && count <= 500) {
balanceref.add(refb)
Bot.sendMessageToChatWithId(refUser.chatId, "+"+raamo+" "+cur+" Added\n*Referral:* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")  
  
} else {
if (count >= 501 && count <= 1000) {
  var amo = 0.5*refb
balanceref.add(amo)
Bot.sendMessageToChatWithId(refUser.chatId, "+"+amo+" "+cur+" Added\n*Level 2 Referral:* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")

} else {
  var amo = 0.25*refb
balanceref.add(amo)
Bot.sendMessageToChatWithId(refUser.chatId, "+"+amo+" "+cur+" Added\n*Level 3 Referral:* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")
 
 }}}}}
