export default function handler(req, res){
  const isAdmin = req.cookies && req.cookies.fripperie_admin === '1'
  res.status(200).json({ admin: !!isAdmin })
}
