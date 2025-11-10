
const Product = require('../models/Product');
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');

// Get All Products with Pagination, Search, and Filters
exports.getAllProducts = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 50, 
      search = '', 
      categoryId, 
      subCategoryId 
    } = req.query;

    // Build query
    const query = {};

    // Search across product name, description, and populate for category/subcategory names
    if (search) {
      // First, find matching categories and subcategories
      const categories = await Category.find({ 
        name: { $regex: search, $options: 'i' } 
      }).select('_id');
      
      const subCategories = await SubCategory.find({ 
        name: { $regex: search, $options: 'i' } 
      }).select('_id');

      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { category: { $in: categories.map(c => c._id) } },
        { subCategory: { $in: subCategories.map(sc => sc._id) } }
      ];
    }

    // Filter by category
    if (categoryId) {
      query.category = categoryId;
    }

    // Filter by subcategory
    if (subCategoryId) {
      query.subCategory = subCategoryId;
    }

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get total count
    const totalCount = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limitNum);

    // Fetch products
    const products = await Product.find(query)
      .populate('category', 'name description')
      .populate('subCategory', 'name description')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    res.status(200).json({
      success: true,
      currentPage: pageNum,
      totalPages,
      totalCount,
      limit: limitNum,
      data: products
    });
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('category', 'name description')
      .populate('subCategory', 'name description');

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    // Populate category and subcategory
    await product.populate('category', 'name description');
    await product.populate('subCategory', 'name description');

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
      .populate('category', 'name description')
      .populate('subCategory', 'name description');

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: product
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};