const jwt = require('jsonwebtoken');
const secret="yfgh"
const encrypt = (payload) => {
  // encrypt the payload and return token
  const tocken= jwt.sign(payload, secret, { expiresIn: 60 * 60 });
  return tocken
}

const decrypt = (token) => {
  // return decoded payload
  var decoded = jwt.verify(token,secret);
    return decoded
}

module.exports = {
  encrypt,
  decrypt
}
