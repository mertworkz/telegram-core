const fs = require('fs');


module.exports = async function(bot) {
    commandsArray = [];
    async function waitForReply(chatId, messageId) {
        return new Promise((resolve, reject) => {
          const listenerId = bot.onReplyToMessage(chatId, messageId, (msg) => {
            bot.removeReplyListener(listenerId);
            resolve(msg);
          });
          setTimeout(() => {
            bot.removeReplyListener(listenerId);
            reject(new Error('Yanıt bekleme süresi doldu.'));
          }, 300000);
        });
    }
    
    async function sendInputMsg(chatId,message) {
        const Sendmessage = await bot.sendMessage(chatId, message, {
            parse_mode: "HTML",
               reply_markup: {
                   force_reply: true
               }
        });
        return Sendmessage
    }
    const files = fs.readdirSync(__dirname);
    files.forEach(file => {
        if (file !== 'index.js') {
            const service = require(`./${file}`);
            if (service.status) {
                console.log(`[BOT] ${file} loaded.`);
                bot.onText(service.details.regex, service.get(bot,sendInputMsg,waitForReply));
                commandsArray.push({
                    command:service.details.command,
                    description:service.details.desc
                })
            } else {
                console.log(`[BOT] ${file} is maintance.`);
            }
        }
    });
    bot.setMyCommands(commandsArray)
};
