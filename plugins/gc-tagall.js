const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*@usxr.naay:* ${pesan}`;
  let teks = `*-ˋˏ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 💕*\n\n ${oi}\n\n-ˋˏღˏˋ\n`;
  for (const mem of participants) {
    teks += `*🌸 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* ㅤㅤ▸ 𝑵𝒂𝒂𝒚 𝑩𝒐\n\n*💕*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;