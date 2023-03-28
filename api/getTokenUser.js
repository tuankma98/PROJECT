const getTokenUser = (myHeaders) => {
  const localTokens = localStorage.getItem('tokens');
  const token = JSON.parse(localTokens);
  myHeaders.append('Authorization', token);
};

export default getTokenUser;
