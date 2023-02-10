const { SlashCommandBuilder} = require("discord.js")

module.exports = {

 data: new SlashCommandBuilder()
   .setName("Ping!")
   .setDescription("Responde com Pong!"),

async execute(interaction) {
    await interaction.reply("Pong!")
}
}