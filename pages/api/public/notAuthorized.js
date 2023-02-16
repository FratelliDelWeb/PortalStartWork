export default async function handler(req, res, next) {
  return res.status(400).json({ message: "Not Authorized" });
}
