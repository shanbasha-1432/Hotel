const Item = require('../models/itemschema');  


const deleteItem = async (req, res) => {
  const { itemId } = req.body; 
  try {
    const deletedItem = await Item.findOneAndDelete({ itemId }); 
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully', deletedItem });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error: error.message });
  }
};
module.export = deleteItem