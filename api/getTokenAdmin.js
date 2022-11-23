const getTokenAdmin = (myHeaders) => {
  const localTokens = localStorage.getItem("tokensAdmin");
  const tokenAdmin = JSON.parse(localTokens);
  myHeaders.append("token", tokenAdmin);
};

export default getTokenAdmin;
