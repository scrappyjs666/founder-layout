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
      console.error('Could not fetch.', res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
};
