/*CMD
  command: /getWithdraw
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

if (!content) { return }
var info = JSON.parse(content)
var error_1 = info.errors

if (!error_1){
var id = info.data.id
var code = info.data.amount.currency
var debit = info.data.amount.amount
var email = info.data.to.email
var balance = Libs.ResourcesLib.userRes("balance");
var payout = Libs.ResourcesLib.userRes("payout")
var budget = Libs.ResourcesLib.anotherChatRes("budget", "global")
var cha = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "withdraw_channel" // field name
})


/*Bot.sendInlineKeyboard([ {title: "🖇️ Get Transaction Details", command: "/tx "+id+" "+code+""} ], "✅ Transaction Successful, Check Your Wallet")*/
Bot.sendMessage("✅ Transaction Successful, Check Your Wallet\n\nJoin Our Payment Channel\n◼️ "+cha+"")
balance.add(parseFloat(debit))
payout.add(parseFloat(debit.replace(/^-/, "")))
budget.add(parseFloat(debit.replace(/^-/, "")))

var botlink = '<a href="https://t.me/'+bot.name+'">'+bot.name+' </a>'
var now = new Date();
var time = Libs.DateTimeFormat.format(now, "ddd mmm dd yyyy HH:MM:ss T");

var line = "\n• ━━━━━━━━━━━━━━━━━ •\n"
var text = "<b>✅ NEW WITHDRAWAL SENT </b>"+line+"<b>👨 User: </b>"+user.telegramid+"\n<b>💳 Method:</b> Coinbase\n<b>🌐 Address:</b> "+email.slice(0,4)+"****@gmail.com\n<b>💵 Amount: </b><code>"+debit.replace(/^-/, "")+" "+code+"</code>\n<b>🤖 Bot Link:</b> "+botlink+"\n<b>📅 Date And Time:</b> "+time+"M"
Api.sendMessage({ 
  chat_id: cha,
  text: text, parse_mode : "HTML" , disable_web_page_preview: true });

return}
var meg = "*❌ Coinbase Error (Internal)*\n\n`"+info.errors[0].message+"`"

Bot.sendMessage(meg)
//Api.sendMessage({ chat_id: "admin id", text: meg, parse_mode: "Markdown" })
