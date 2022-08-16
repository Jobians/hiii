/*CMD
  command: /onGetAccounts
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){return}

var accounts = options.info
Bot.setProperty("CBAPI-accounts", accounts, "json");

Bot.sendMessage("CoinbaseApi Lib Successful Setup")
