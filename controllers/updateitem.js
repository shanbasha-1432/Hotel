const Item = require('../models/itemschema')
 
 const updateItem = async (req, res) => {
    const { itemId, updates } = req.body;  
    try {
      const updatedItem = await Item.findOneAndUpdate({ itemId }, updates, { new: true }); 
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json({ message: 'Item updated successfully', updatedItem });
    } catch (error) {
      res.status(500).json({ message: 'Error updating item', error: error.message });
    }
  };
  
  module.exports =  updateItem