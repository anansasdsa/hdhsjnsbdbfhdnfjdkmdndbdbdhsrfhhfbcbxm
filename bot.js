const Discord = require('discord.js');
const client = new Discord.Client({ fetchAllMembers: true });
const fs = require("fs");
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const Canvas = require('canvas')
const jimp = require('jimp')
const moment = require('moment');
const dateFormat = require('dateformat');
let done = {};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`*help | *invite `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    console.log(`[INFO] ${bot.user.username}`)
    console.log(`[INFO] ${bot.users.size}`)
    console.log(`[INFO] ${bot.guilds.size}`)
    console.log(`[BOT] Auto Role `)
});

bot.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', role));
});
