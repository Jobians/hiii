/*CMD
  command: 💰
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

var currency = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})

//Libs.MembershipChecker.check()
var res = Libs.ResourcesLib.userRes("balance");

var payout = Libs.ResourcesLib.userRes("payout")

Bot.sendMessage(
      "*🧰 Account Balance:*\n\n*🔻 Total Balance:* " +
        res.value().toFixed(5) +
        " *" +
        currency +
        "*\n*🔻 Total Payouts:* " +
        payout.value().toFixed(5) +
        " *" +
        currency +
        "*"
    )
