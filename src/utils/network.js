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
