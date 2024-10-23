# Newzzz

![Screenshot (763)](https://github.com/user-attachments/assets/2840da00-6745-4dd0-83c1-a401a1c9d39a)

Newzzz is a React-based news aggregator application that delivers real-time, category-specific news from multiple sources around the globe. By integrating the News API, the app ensures that users always stay updated with the latest headlines. Built with a clean and responsive design, it features several useful functionalities to enhance the news consumption experience.

## Key Features:
### Dynamic News Categories:
The app offers a variety of news categories, including General, Business, Entertainment, Health, Science, Sports, and Technology, giving users access to a wide range of topics. With React Router, users can easily navigate between these categories.

![Screenshot (769)](https://github.com/user-attachments/assets/d244de71-e28e-4f91-b8c5-cf663bb3ef27)

### Live Loading Bar:
The application incorporates a Loading Bar (using react-top-loading-bar) that visually tracks and indicates the progress of news content being fetched from the API. This improves the user experience by providing feedback during data loading.

### Infinite Scroll:
News articles are loaded in batches with a smooth infinite scroll experience. As users scroll, the app automatically fetches and displays more content, offering a seamless browsing experience without the need for manual pagination.

![Screenshot (767)](https://github.com/user-attachments/assets/7c31d73e-f2a9-46b5-9e46-c2dc32bd94d3)

### Environment Variables for API Security:
The API key for fetching news is securely stored in environment variables using **process.env.REACT_APP_NEWS_API**, ensuring the application can be shared without exposing sensitive information.

### Router and Navigation:
The app uses **React Router** for a smooth navigation experience. Each category has its own dedicated route, making it easy for users to explore different sections of the app. Navigation links to the different categories are presented in the Navbar, providing quick access.

### Reusable Components:
The project is component-based, with reusable components such as **Navbar**, **News**, and **NewsItem**. This ensures clean, maintainable, and scalable code that can be extended easily.

![Screenshot (765)](https://github.com/user-attachments/assets/52fd9128-9cbb-442a-9ab3-70f83aa680d1)

### Real-Time News Updates:
With the use of the News API, the app provides real-time news updates from various trusted sources, displaying articles along with their images, publication date, author, and source.

### Responsive Design:
The layout is responsive, ensuring that the application looks great on all devices, from mobile phones to desktop computers.

![Screenshot (764)](https://github.com/user-attachments/assets/6922c7c7-a8d4-46c7-a3fc-d76a9f4b2791)

## How It Works:
1. On app load, the user is greeted with the latest headlines from the general category by default.
2. Users can navigate to different categories such as Business, Health, Technology, etc., via the Navbar.
3. The app fetches and displays articles for the selected category using API calls, with a progress bar indicating the loading state.
4. As users scroll, the infinite scroll mechanism loads more articles until the total number of available results is reached.
