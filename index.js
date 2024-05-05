const TelegramBot = require('node-telegram-bot-api');
const { TOKEN } = require('./config.json');
const bot = new TelegramBot(TOKEN, { polling: true });

require('./services')(bot);
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});

console.log("[BOT] Started...");
module.exports = {
    bot: bot
}
