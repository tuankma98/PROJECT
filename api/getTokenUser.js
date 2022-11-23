const getTokenUser = (myHeaders) => {
  const localTokens = localStorage.getItem("tokens");
  const token = JSON.parse(localTokens);
  myHeaders.append("token", token);
};

export default getTokenUser;
