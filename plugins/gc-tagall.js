const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*@clan_sport.gang:* ${pesan}`;
  let teks = `*🔥𝙇𝙇𝘼𝙈𝘼𝘿𝙊 𝘼 𝙇𝙊𝙎 𝙎𝙂👺*\n\n ${oi}\n\n❗𝙄𝙉𝙏𝙀𝙂𝙍𝘼𝙉𝙏𝙀𝙎 ❗\n`;
  for (const mem of participants) {
    teks += `*・👺 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝙎𝙂-𝘽𝙊𝙏 👺\n\n*👺*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;