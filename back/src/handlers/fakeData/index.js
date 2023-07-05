const { generateFakeData } = require('../../controllers/fakeData');

const getFakeData = async (req, res) => {
  try {
    const result = await generateFakeData();
    res.status(200).json({ message: 'Data Generated', data: result });
  } catch (err) {
    res.status(400).json(err);
  }
};
//

module.exports = { getFakeData };
