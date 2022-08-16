/*CMD
  command: /start
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
if(verify){
Bot.runCommand("/menuu")
return}

var url = Libs.Webhooks.getUrlFor({
  command: "onWebhook",
  user_id: user.id
})

var webPage = "https://api.jobians.top/captcha/pro?id=072c2&webhookUrl="+encodeURIComponent(url)+"&back=https://t.me/"+bot.name+""

Bot.sendMessage("ℹ️ [Please Verify Yourself By Clicking This Link]("+webPage+")\n\n - please we don't allow multiple account\n - don't on vpn when visiting the link.",{ disable_web_page_preview: true })

var trackOptions = {
  onAtractedByUser: doAtractedByUser
}
Libs.ReferralLib.currentUser.track(trackOptions);

function doAtractedByUser(refUser) {
/*Bot.sendMessageToChatWithId(refUser.chatId, "*💠 New Referral - *"+"[" +user.first_name+"]" + "(" + "tg://user?id=" + user.telegramid + ")"+"*\nReward only if user pass our verification!*");*/
}

var broadcast = Bot.getProperty("Broadcast") ?
Bot.getProperty("Broadcast") : []
if(!broadcast.includes(user.telegramid)){
broadcast.push(user.telegramid);
Bot.setProperty("Broadcast", broadcast, "json")
}
