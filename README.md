# Shutterline Studio — Photography Website

A full-stack photography studio site: React + Vite frontend, Express + MongoDB backend.

## Features
- Navbar: logo + studio name (left), Home / Sample Clicks / About / Contact Us + My Orders (right)
- Home: 6 bookable shoot types (Birthday, Marriage, Outdoor, Model, Puberty Function, Grand Opening) each with budget tiers
- Sample Clicks: a 4-image slider ("contact sheet") per shoot category
- About: studio description + ratings + reviews
- Contact Us: call link, WhatsApp direct chat link, email link
- My Orders: shows "Your order successful — photographer will reach you soon" + saved order details
- Orders are saved to MongoDB through the Express API (with a local-storage fallback so the UI still works if the backend isn't running)

## Folder structure
```
photo-studio/
  frontend/   React + Vite app
  backend/    Express API + MongoDB models
```

## Setup steps

### 1. Prerequisites
- Node.js 18+ and npm
- MongoDB running locally, OR a free MongoDB Atlas cluster (recommended if you don't want to install MongoDB)

### 2. Backend setup
```bash
cd backend
npm install
cp .env.example .env
```
Edit `.env`:
```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/shutterline_studio
```
- For local MongoDB: install MongoDB Community Server, then run `mongod` (or start the MongoDB service) so it's listening on port 27017.
- For MongoDB Atlas: create a free cluster at https://www.mongodb.com/cloud/atlas, create a database user, allow your IP, copy the connection string (looks like `mongodb+srv://user:pass@cluster.mongodb.net/shutterline_studio`) and paste it as `MONGODB_URI`.

Start the API:
```bash
npm start
```
You should see `Connected to MongoDB` and `Shutterline Studio API running on port 5000`.

### 3. Frontend setup
In a new terminal:
```bash
cd frontend
npm install
npm run dev
```
Open the printed local URL (typically http://localhost:5173). The Vite dev server proxies `/api/*` requests to `http://localhost:5000`, so make sure the backend is running first.

### 4. Using the site
1. Go to Home, pick a shoot, choose a budget tier, fill the form, and click **Confirm order**.
2. You'll land on **My Orders**, which shows the confirmation message and the order pulled from MongoDB.
3. Check your MongoDB database (`shutterline_studio` → `orders` collection) to see the stored document.

### 5. Building for production
```bash
cd frontend
npm run build
```
This outputs static files to `frontend/dist`, which you can serve from any static host (or have the Express server serve them — point `express.static` at that folder and remove the Vite proxy).

### 6. Customizing
- Replace the placeholder Sample Clicks images (`picsum.photos` URLs in `frontend/src/components/SampleClicks.jsx`) with real photos.
- Update phone/WhatsApp/email in `frontend/src/components/ContactUs.jsx`.
- Adjust shoot descriptions and budget tiers in `frontend/src/data/shoots.js`.
