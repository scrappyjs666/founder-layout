export const getApiResource = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: 'token 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',
      },
    });

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
