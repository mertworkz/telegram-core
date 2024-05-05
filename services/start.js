const regex = require('../utils/regex')
const commandName = "start"
const get = (bot) => (msg) => {
    const chatId = msg.chat.id;
    const resp = 'Hello!';
    bot.sendMessage(chatId, resp);
};


const serviceMetadata = {
    command: commandName,
    isShow: true,
    desc: "Start Bot Command",
    regex: regex(commandName, "default"),
};

module.exports = {
    details: serviceMetadata,
    status: true,
    get: get,
};
