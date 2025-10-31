# TEDx Talks Search Tool 🔍

A web-based search tool that allows users to quickly find and discover TEDx Talks videos on YouTube using the YouTube API.

## 🌐 Live Demo

Check out the live version: [https://danyelous.github.io/tedsearch/](https://danyelous.github.io/tedsearch/)

## 📋 Description

TEDx Talks Search Tool is a simple and intuitive web application that leverages the YouTube API to search for TEDx Talks videos. Built with vanilla HTML, CSS, and JavaScript, this tool provides an easy way to explore the vast collection of TEDx presentations available on YouTube.

## ✨ Features

- **Quick Search**: Search for TEDx Talks by keywords, topics, or speakers
- **YouTube API Integration**: Direct integration with YouTube's API for real-time results
- **Clean Interface**: Simple and user-friendly design focused on functionality
- **Responsive Design**: Works seamlessly across different devices and screen sizes
- **TEDx Branding**: Features the official TEDx logo for authentic experience

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript** - Application logic and API integration
- **YouTube API v3** - Video search functionality
- **GitHub Pages** - Hosting and deployment

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- YouTube API key (if you want to run it locally with your own API key)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danyelous/tedsearch.git
```

2. Navigate to the project directory:
```bash
cd tedsearch
```

3. Open `index.html` in your web browser or serve it with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server installed)
npx http-server
```

4. If running locally, make sure to update the API key in `script/script.js`

## 📁 Project Structure

```
tedsearch/
│
├── index.html          # Main HTML file
├── script/
│   └── script.js       # JavaScript functionality and API calls
├── images/
│   └── tex-x-logo.png  # TEDx logo
└── README.md           # Project documentation
```

## 🔧 Configuration

To use your own YouTube API key:

1. Get a YouTube Data API v3 key from [Google Developers Console](https://console.developers.google.com/)
2. Replace the API key in `script/script.js`
3. Make sure the YouTube Data API v3 is enabled for your project

## 💡 How It Works

1. User enters search terms in the search field
2. The application sends a request to the YouTube API
3. Results are filtered to show only TEDx Talks videos
4. Videos are displayed with thumbnails, titles, and descriptions
5. Users can click on results to watch videos directly on YouTube

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Danyelous**

- GitHub: [@danyelous](https://github.com/danyelous)
- Project Link: [https://github.com/danyelous/tedsearch](https://github.com/danyelous/tedsearch)

## 🙏 Acknowledgments

- TEDx for inspiring ideas worth spreading
- YouTube API for providing access to video content
- All contributors and users of this tool

## 📞 Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/danyelous/tedsearch/issues) on GitHub.

---

Made with ❤️ by Danyelous
