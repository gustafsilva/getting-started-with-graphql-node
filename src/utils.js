const jwt = require("jsonwebtoken");
const APP_SECRET = "GraphQL-is-aw3some";

const getUserId = (context) => {
  const Authorization = context.request.get("Authorization");
  if(Authorization) {
    const token = Authorization.replace("Bearer", "");
    const user = jwt.verify(token, APP_SECRET);
    
    return user.userID;
  }

  throw new Error("Not authorization");
}

module.exports = {
  APP_SECRET,
  getUserId
}