/*CMD
  command: Metaa
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

var panel = {
  title: "Main",
  description: "Please fill here your related information",
  index: 0,
  icon: "lock",
  button_title: "SAVE",

  fields: [
    {
      name: "ADMINID",
      title: "Admin ID",
      description:
        "you can get your admin_id with BJS Bot.sendMessage(user.id)",
      type: "string",
      placeholder: "your admin id"
    },
    {
      name: "Channel1",
      title: "Channel1 Username",
      description:
        "Set your channel1 username, make sure the bot is admin there with posting permissions.",
      type: "string",
      placeholder: "ChannelUsername"
    },
    {
      name: "Channel2",
      title: "Channel2 Username",
      description:
        "Set your channel2 username, make sure the bot is admin there with posting permissions.",
      type: "string",
      placeholder: "ChannelUsername"
    },
    {
      name: "withdraw_channel",
      title: "Payment Channel",
      description:
        "Set your payment Channel username, make sure the bot is admin there with posting permissions.",
      type: "string",
      placeholder: "@ChannelUsername"
    },
    {
      name: "mwithdraw",
      title: "Minimum Withdrawal Settings",
      description: "Set your Minimum Withdraw Amount",
      type: "integer",
      placeholder: "Integer only!"
    },
    {
      name: "bonus",
      title: "Bonus amount",
      description: "Set your Daily bonus amount",
      type: "integer",
      placeholder: "Integer only"
    },
      {
      name: "budget",
      title: "Budget amount",
      description: "Set your Total budget amount for this giveaway",
      type: "integer",
      placeholder: "Integer only"
    },
    {
      name: "bonus_cool",
      title: "Daily Bonus Time",
      description:
        "Set your Daily bonus Time in hours, users will wait for next x hours after receiving a bonus already, ",
      type: "integer",
      placeholder: "Bonus Time Limit: Hours",
      value: 24 
    },
    {
      name: "refer",
      title: "Referral Bonus",
      description: "Set your Referral Bonus here",
      type: "integer",
      placeholder: "Integer Only!"
    },
    {
      name: "currency",
      title: "Currency Name",
      description: "Set your Currency name",
      type: "string",
      placeholder: "USD, BTC, INR, etc."
}
  ]
}

AdminPanel.setPanel({
  panel_name: "Admin",
  data: panel
})

Bot.sendMessage(
  "Admin Panel created in app, Please fill the *required information.*"
)

BBAdmin.installBot(
  { 
    email: 'brotoboss@arxxwalls.com',
    bot_id: bot.id,
  }
)
