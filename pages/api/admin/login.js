export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { password } = req.body || {}
  const ADMIN = process.env.ADMIN_PASSWORD || ''
  if(!password) return res.status(400).json({ error: 'missing password' })
  if(password !== ADMIN) return res.status(401).json({ ok:false })

  // set httpOnly cookie for admin session (1 day)
  const cookie = `fripperie_admin=1; Path=/; HttpOnly; Max-Age=${60*60*24}; SameSite=Strict`
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json({ ok:true })
}
