/*CMD
  command: /sendPayment
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: 💸 Send me how much you want to withdraw...

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance");
var currency = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "currency" // field name
})
var mini = AdminPanel.getFieldValue({
  panel_name: "Admin", // panel name
  field_name: "mwithdraw" // field name
})

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(message)) {
  Bot.sendMessage("❌ Only Number allowed", { is_reply: true})
  return}

if (message < mini) {
  Bot.sendMessage(
    "😢 Your amount is too small to withdraw.\n\nMinimum withdrawal: "+mini+" "+currency+"")
return}

if (message > balance.value()) {
    Bot.sendMessage(
      "_🚫 You Can Withdraw Maximum:_ " + balance.value().toFixed(5) + " "+currency+""
    )
return}

var wallet = User.getProperty("withdrawADDR")
var crypto = User.getProperty("withdrawcoin")

// get CB all accounts from property
var accounts = Bot.getProperty("CBAPI-accounts");  
var account;

// search account by currency code
for(var ind in accounts){
  account = accounts[ind];
  if(account.currency==crypto){ break }
}
if (account) {

Libs.CoinbaseApi.createPayment({
  account: account.id,
  currency: crypto,
  address: wallet,
  amount: message,
  onSuccess: "/getWithdraw"
})

/*
 NOTE: bot_ remove withdraw amount after successful transaction in getWithdraw command
*/

return}
Bot.sendMessage("Unknown Error Occurred")

