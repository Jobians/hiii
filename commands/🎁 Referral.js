/*CMD
  command: ๐ Referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var commission = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "refer" // field name
})

var currency = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})

if (!commission) {
  Bot.sendMessage("โ Oops! Refer commission isn't setupped by admin!")
  return
}

var users_rows = ""
var refList = Libs.ReferralLib.getRefList()

if (!refList.exist) {
  users_rows = "No any affiliated users"
}

var users = refList.getUsers();

for (var ind in users) {
  users_rows = users_rows + "\n๐ค " + Libs.commonLib.getLinkFor( users[ind] )
}


var msg
if (refList.count > 0) {
  msg = refList.count
} else {
  msg = "0"
}
var key = [[{ title: "๐ Referral List", command: "Referrallist"}]]

Bot.sendInlineKeyboard(key,"*Share Me With Your Friends & Earn "+commission+" "+currency+"*" + "\n\n*๐จ Total users:* " +
  Libs.ReferralLib.getRefCount() +
  "\n*๐ Referral bonus:* "+commission+" "+currency+"\n\n*๐น Your Referral Link :*\n"+Libs.ReferralLib.getLink()+"\n\n*Your Referral list โคต๏ธ*",{ disable_web_page_preview: true })

