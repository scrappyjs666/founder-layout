export const getApiResource = async (url) => {
  try {
    const res = await fetch(
      url,
      {
        headers: {
          authorization: 'token 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',
        },
      },
    );
    if (!res.ok) {
      return false;
    }
    return await res.json();
  } catch (error) {
    return false;
  }
};
