const involvementAPIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const countComments = async (appID, itemId) => {
  try {
    const response = await fetch(`${involvementAPIURL}/apps/${appID}/comments?itemId=${itemId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data.length;
  } catch (error) {
    return 0;
  }
};

export default countComments;