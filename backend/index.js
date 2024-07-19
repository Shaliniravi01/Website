const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 if process.env.PORT is not defined

// Middleware
app.use(cors({
  origin: 'https://marvelous-choux-b4f5c4.netlify.app' // Allow requests from your frontend URL
}));
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://Shaliniravi:Shalinirv04@cluster0.lswplxu.mongodb.net/Contactdetails?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message Sent Successfully', contact });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error, Please try after sometime', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
