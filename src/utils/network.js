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
