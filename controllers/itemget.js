const itemdata = require('../models/itemschema');

const getitems = async (req, res) => {
  const allitems = await itemdata.find();
  const categories = [];
  allitems.forEach(item => categories.includes(item.category)  || categories.push(item.category));
  res.status(200).json({ category_data: categories });
};

module.exports = getitems ;  