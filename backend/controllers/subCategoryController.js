
const SubCategory = require('../models/SubCategory');

// Create SubCategory
exports.createSubCategory = async (req, res) => {
  try {
    const subCategory = new SubCategory(req.body);
    await subCategory.save();
    
    // Populate category details
    await subCategory.populate('category');
    
    res.status(201).json({
      success: true,
      message: 'Subcategory created successfully',
      data: subCategory
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get All SubCategories
exports.getAllSubCategories = async (req, res) => {
  try {
    const { categoryId } = req.query;
    
    // Build query
    const query = {};
    if (categoryId) {
      query.category = categoryId;
    }
    
    const subCategories = await SubCategory.find(query)
      .populate('category')
      .sort({ createdAt: -1 });
      
    res.status(200).json({
      success: true,
      count: subCategories.length,
      data: subCategories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get SubCategory by ID
exports.getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id)
      .populate('category');
      
    if (!subCategory) {
      return res.status(404).json({
        success: false,
        message: 'Subcategory not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: subCategory
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update SubCategory
exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('category');
    
    if (!subCategory) {
      return res.status(404).json({
        success: false,
        message: 'Subcategory not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Subcategory updated successfully',
      data: subCategory
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete SubCategory
exports.deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    
    if (!subCategory) {
      return res.status(404).json({
        success: false,
        message: 'Subcategory not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Subcategory deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};