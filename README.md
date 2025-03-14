# TweeterCLone 🐦

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.8+-green.svg)
![Django](https://img.shields.io/badge/Django-3.x-green.svg)
![React](https://img.shields.io/badge/React-17.x-blue.svg)

A modern Twitter-like social media platform built with Django REST Framework and React. Share your thoughts, follow other users, and engage with content!


## ✨ Features

- User authentication (login, logout, session management)
- Create, read, update, and delete tweets
- Like and unlike tweets
- Retweet functionality
- Feed of tweets from followed users
- User profiles with tweet history
- Responsive design for desktop and mobile

## 🛠️ Technologies Used

### Backend
- Django
- Django REST Framework
- SQLite/PostgreSQL

### Frontend
- React
- JavaScript ES6+
- CSS

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Backend Setup

1. Clone the repository
```bash
git clone https://github.com/mehdidinari/tweeterclone.git
cd tweeterclone
```

2. Create a virtual environment and activate it
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the dependencies
```bash
pip install -r requirements.txt
```

4. Run migrations
```bash
python manage.py migrate
```

5. Create a superuser
```bash
python manage.py createsuperuser
```

6. Start the development server
```bash
python manage.py runserver
```

The API will be available at http://localhost:8000/api/

### Frontend Setup

1. Navigate to the frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install  # or: yarn install
```

3. Start the development server
```bash
npm start  # or: yarn start
```

The application will be available at http://localhost:3000/

## 📝 Usage

### Creating a Tweet

1. Log in to your account
2. Type your message in the tweet input box (max 280 characters)
3. Click the "Tweet" button to publish

### Interacting with Tweets

- Click the ❤️ button to like a tweet
- Click the 🔁 button to retweet
- Click on a tweet to view details and replies

## 🗄️ Project Structure

```
tweetme/
│
├── tweets/                  # Django app for tweets functionality
│   ├── api/                 # DRF API views and serializers
│   ├── models.py            # Database models
│   └── views.py             # Django views
│
├── accounts/                # Django app for user authentication
│   ├── api/                 # DRF API for authentication
│   └── models.py            # User model extensions
│
├── frontend/                # React frontend
│   ├── src/                 # Source files
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   └── App.js           # Main React component
│   ├── public/              # Static files
│   └── package.json         # Node.js dependencies
│
├── static/                  # Static files (CSS, JS, images)
├── templates/               # Django templates
└── manage.py                # Django management script
```

## 📡 API Endpoints

| Endpoint                  | Method | Description                       | Authentication Required |
|---------------------------|--------|-----------------------------------|------------------------|
| `/api/tweets/`            | GET    | Get all tweets                    | No                     |
| `/api/tweets/feed/`       | GET    | Get tweets from followed users    | Yes                    |
| `/api/tweets/create/`     | POST   | Create a new tweet                | Yes                    |
| `/api/tweets/<id>/`       | GET    | Get a specific tweet              | No                     |
| `/api/tweets/<id>/delete/`| DELETE | Delete a tweet                    | Yes                    |
| `/api/tweets/action/`     | POST   | Like, unlike, or retweet          | Yes                    |
| `/api/auth/login/`        | POST   | Log in                            | No                     |
| `/api/auth/logout/`       | POST   | Log out                           | Yes                    |
| `/api/auth/status/`       | GET    | Check authentication status       | No                     |

## 🔒 Authentication

The application uses Django's session-based authentication. To authenticate:

1. Send a POST request to `/api/auth/login/` with username and password
2. All subsequent requests will use the session cookie for authentication
3. CSRF protection is enabled, so make sure to include the CSRF token in requests

Example login request:
```javascript
fetch('http://localhost:8000/api/auth/login/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': csrfToken,
  },
  credentials: 'include',
  body: JSON.stringify({
    username: 'your_username',
    password: 'your_password'
  })
})
```

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by [Mehdi Dinari](https://github.com/mehdidinari)
