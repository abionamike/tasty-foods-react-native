import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  review: [reviewSchema]
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;