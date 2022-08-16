/*CMD
  command: Referrallist
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var refList = Libs.ReferralLib.getRefList();

var users_rows = ""
var users = refList.getUsers();

for (var ind in users) {
  users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( users[ind] )}

 
if (!refList.exist) {
Api.editMessageText({
    message_id: request.message.message_id,
    text: "*ℹ️ No Referral Found*",parse_mode: "Markdown",disable_web_page_preview: true
})
return
}
var msg =
  "*Total Users You Invited:* " +
  Libs.ReferralLib.getRefCount() +
  "\n\n---------" +
  users_rows

Api.editMessageText({
    message_id: request.message.message_id,
    text: ""+msg+"",parse_mode: "Markdown",disable_web_page_preview: true
})
var refList = Libs.ReferralLib.getRefList();

var users_rows = ""
var users = refList.getUsers();

for (var ind in users) {
  users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( users[ind] )}

 

