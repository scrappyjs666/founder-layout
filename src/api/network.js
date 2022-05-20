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
