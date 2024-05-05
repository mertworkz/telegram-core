function generateRegex(command, type) {
    if (type === "match") {
        return new RegExp(`^/${command} (.+)$`);
    } else if (type === "default") {
        return new RegExp(`^/${command}$`);
    }
    return new RegExp(`^/${command}$`);
}

module.exports = generateRegex;
