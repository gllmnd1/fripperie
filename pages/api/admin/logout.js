export default function handler(req, res){
  // clear cookie
  const cookie = `fripperie_admin=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict`
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json({ ok:true })
}
