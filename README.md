# The Pen Spot - Online Stationery Shop

![The Pen Spot](/public/assets/home-page.png)

## 🚀 Live Demo

- **Client:** [The Pen Spot (Live)](https://client-nayms-projects.vercel.app/)
- **Server:** [API Server (Live)](https://server-wine-alpha.vercel.app/)
- **GitHub Repository:** [The Pen Spot (GitHub)](https://github.com/naymHdev/the-pen-spot)

## 📖 About The Project

**The Pen Spot** is an online stationery store that provides a seamless shopping experience for stationery lovers. Users can explore a variety of products, add them to their cart, and make purchases with ease. The platform is designed with a modern UI, ensuring responsiveness and a smooth user experience.

## ✨ Features

- 🛍 **Product Browsing** - View a wide range of stationery products.
- 🔍 **Advanced Filtering & Sorting** - Find the exact product you need with dynamic search, filters, and sorting.
- 🛒 **Cart & Checkout** - Add products to your cart and proceed with an easy checkout process.
- 👤 **User Authentication** - Secure login and signup functionality.
- 📦 **Order Management** - View past orders and track your purchases.
- 📱 **Mobile-Friendly Design** - Fully responsive UI for seamless browsing on any device.
- 🌍 **Optimized Performance** - Fast load times and smooth interactions.

## 🛠️ Built With

### **Frontend (Client)**

- **React.js** - UI library for building interactive components.
- **TypeScript** - Strongly typed JavaScript for better maintainability.
- **Tailwind CSS v4** - Modern styling with utility classes.
- **ShadCN UI** - Elegant UI components for a better user experience.
- **Redux Toolkit** - State management and API calls handling.

### **Backend (Server)**

- **Node.js & Express.js** - RESTful API development.
- **MongoDB & Mongoose** - Database and schema modeling.
- **Zod** - Input validation to ensure data consistency.
- **Cloudinary** - Image upload and management.

## ⚙️ Installation & Setup

To run the project locally, follow these steps:

### **1️⃣ Clone the repository:**

```sh
 git clone https://github.com/naymHdev/the-pen-spot.git
 cd the-pen-spot
```

### **2️⃣ Install dependencies:**

For the client (frontend):

```sh
cd client
npm install
```

For the server (backend):

```sh
cd server
npm install
```

### **3️⃣ Environment Variables**

Create a `.env` file in the `server` directory and add necessary environment variables such as:

```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### **4️⃣ Run the project:**

For the frontend:

```sh
npm run dev
```

For the backend:

```sh
npm start
```

The application will be available at `http://localhost:3000`

## 📸 Screenshots

### Cart Page
![The Pen Spot Cart Page](/public/assets/cart.png)

### About Us Page
![The Pen Spot About Page](/public/assets/about.png)

## 🛡️ Security & Best Practices

- JWT-based authentication for secure user login.
- Data validation with Zod to ensure API integrity.
- Optimized queries for performance improvements.

## 💡 Future Enhancements

- 🏷 **Discount & Coupons System** - Implement promo codes.
- 📦 **Order Tracking** - Enhance user experience with real-time order tracking.
- 📊 **Admin Dashboard** - Manage users, orders, and inventory efficiently.

## 🤝 Contribution

Want to improve the project? Feel free to fork, create a feature branch, and submit a PR! 🎉

## 📩 Contact

For any inquiries or issues, reach out to me via GitHub or email.

---

© 2025 **The Pen Spot** - All Rights Reserved.
