const regex = require('../utils/regex')
const commandName = "input"
const get = (bot,sendInputMsg,waitForReply) => async (msg) => {
    const chatId = msg.chat.id;
    const x = 'Cevap ver len!';
    const sendX = await sendInputMsg(chatId, x);
    const gelenCevap = await waitForReply(chatId,sendX.message_id)
    await bot.sendMessage(chatId, gelenCevap.text)
};


const serviceMetadata = {
    command: commandName,
    isShow: true,
    desc: "Input Reply Test Command",
    regex: regex(commandName, "default"),
};

module.exports = {
    details: serviceMetadata,
    status: true,
    get: get,
};
