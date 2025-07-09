
# NexChat 🌐 | Connect, Communicate & Collaborate Across the World


🚀 Highlights

🌐 Real-time Messaging
Instant chat with typing indicators, emoji reactions, and message status updates.

📹 1-on-1 Video Calls
High-quality video calls with screen sharing and recording support using Stream.

🔐 Secure Authentication
Fully protected routes with JWT-based authentication and session management.

🌍 Language Exchange Platform
Designed for meaningful global conversations, featuring 32 dynamic UI themes.

⚡ Modern Tech Stack
Built with React, Express, MongoDB, TailwindCSS, and TanStack Query for fast, scalable performance.

🧠 State Management with Zustand
Lightweight and powerful global state management across the app.

🚨 Robust Error Handling
Graceful error feedback on both frontend and backend for a reliable UX.

🎯 Built for Scale
Leveraging Stream SDKs and scalable architecture for real-time communication.

⏳ More to Explore
From friend requests, profile avatars, and dark mode, to mobile responsiveness– NexChat keeps evolving.


🧪 .env Setup

🔧 Backend (/backend)

Create a .env file inside the /backend folder with the following:

PORT=5001

MONGO_URI=your_mongo_uri

STREAM_API_KEY=your_stream_api_key

STREAM_API_SECRET=your_stream_api_secret

JWT_SECRET_KEY=your_jwt_secret

NODE_ENV=development

🎨 Frontend (/frontend)

Inside the /frontend folder, create a .env or .env.local file:

VITE_STREAM_API_KEY=your_stream_api_key

🛠️ Run the Backend

cd backend

npm install

npm run dev

💻 Run the Frontend

cd frontend

npm install

npm run dev
