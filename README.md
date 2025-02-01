# NewsPulse
NewsPulse is a React-based web application that provides users with the latest news headlines from various categories. The application leverages the News API to fetch and display news articles in an intuitive and user-friendly interface.

## 🚀 Features

- **Top Headlines**: Get the latest top headlines from around the world.
- **Category Filtering**: Filter news articles by categories such as Business, Entertainment, Health, Science, Sports, and Technology.
- **Infinite Scrolling**: Seamlessly load more articles as you scroll down the page.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Loading Indicator**: Displays a loading spinner while fetching news articles.
- **Dynamic Page Titles**: The page title dynamically updates based on the selected news category.

## 🏛️ Class-Based Components

NewsPulse utilizes class-based components to manage state and lifecycle methods effectively. Here are the key class-based components used in the application:

- **App**: The root component that manages the overall state and routing of the application.
- **NavBar**: A class-based component that handles the navigation between different news categories.
- **News**: This component fetches news articles from the API and manages the state of the articles and loading status.
- **NewsItem**: Represents individual news articles and is responsible for rendering the article details.
- **Spinner**: A simple class-based component that displays a loading spinner while data is being fetched.

These class-based components help in organizing the code and managing the state and lifecycle methods in a structured manner.


## 📖 Usage

- Navigate to different categories using the navigation bar.
- Scroll down to load more articles.
- Click on a news article to read the full story on the source website.

## 🧩 Components

- **App**: The main component that sets up routing and renders the navigation bar and news components.
- **NavBar**: The navigation bar component for category selection.
- **News**: The component responsible for fetching and displaying news articles.
- **NewsItem**: The component that represents a single news article.
- **Spinner**: The loading spinner component displayed while fetching data.

## 🌐 API

NewsPulse uses the [News API](https://newsapi.org/) to fetch news articles. You need to sign up for an API key and add it to the `.env` file as shown in the installation steps.

## 🛠️ Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tanishkagupta2207/NewsPulse.git
    cd newspulse
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add your News API key:
    ```bash
    REACT_APP_NEWS_API=your_news_api_key
    ```
4. Start the development server:
    ```bash
    npm start
    ```
    ## 🎥 Demo

    Check out the demo video to see NewsPulse in action: [Demo Video](https://drive.google.com/file/d/1TEjeRnRKqzJGOK8m8QqTPNEZnmOkq5qJ/view?usp=sharing)
    
## 🙏 Acknowledgements

- **News API** for providing the news data.
- **React** for the awesome library.
- **Bootstrap** for the responsive design framework.
- **CodeWithHarry** for the helpful tutorials and guidance.

Happy Coding! 🎉
