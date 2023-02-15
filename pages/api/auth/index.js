/* const jwtSecret = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");

exports.adminAuth = (req, res, next) => {
  console.log(jwt);
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      }
      if (decodedToken.role !== "admin") {
        return res.status(401).json({ message: "Not authorized" });
      }
      next();
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};

exports.userAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      }
      if (decodedToken.role !== "Basic" && decodedToken.role !== "admin") {
        return res.status(401).json({ message: "Not authorized" });
      }
      next();
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};
 */
