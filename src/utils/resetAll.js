export const resetAll = (
    setUserNickName, setUserProfile, setRepos, setinputValue, setLoading,
) => {
  githubPageref.current = 1;
  reposRef.current = [];
  setUserNickName = ('');
  setUserProfile = ('');
  setRepos = ([]);
  setinputValue = ('');
  setLoading = (false);
};
