@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* ================ CSS Variables for Theme ================ */
:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #141414;
    --bg-card: #1a1a1a;
    --bg-card-hover: #242424;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --accent-red: #FF2B2B;
    --accent-red-hover: #ff4444;
    --border-color: #2a2a2a;
    --border-hover: #FF2B2B;
    --input-bg: #1f1f1f;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
    --shadow-lg: 0 10px 25px -5px rgba(0, 0, 0, 0.7);
}

/* ================ Global Styles ================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    height: 100%;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* ================ Typography ================ */
h2 {
    color: var(--text-primary);
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

h3 {
    font-weight: 500;
    font-size: 1.1rem;
}

p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* ================ Layout ================ */
#container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
}

/* ================ Header/Navigation ================ */
#mainbar {
    padding: 1.5rem 0;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-bottom: 1px solid var(--border-color);
}

a.home {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: opacity 0.3s ease;
}

a.home:hover {
    opacity: 0.8;
}

.ted-logo {
    width: 120px;
    height: auto;
    filter: brightness(0.95);
}

.name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.02em;
}

/* ================ Search Container ================ */
.search-container {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex: 1;
    max-width: 500px;
}

#searchinput {
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    background: var(--input-bg);
    color: var(--text-primary);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    outline: none;
    transition: all 0.3s ease;
    font-family: inherit;
}

#searchinput:focus {
    border-color: var(--accent-red);
    background: #262626;
    box-shadow: 0 0 0 3px rgba(255, 43, 43, 0.1);
}

#searchinput::placeholder {
    color: var(--text-secondary);
}

.searchbutton {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--accent-red);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    font-family: inherit;
    letter-spacing: 0.02em;
    box-shadow: var(--shadow);
}

.searchbutton:hover {
    background: var(--accent-red-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.searchbutton:active {
    transform: translateY(0);
}

.searchbutton svg {
    width: 18px;
    height: 18px;
}

/* ================ Results Section ================ */
#results {
    margin-bottom: 2rem;
    min-height: 40px;
    display: flex;
    align-items: center;
}

.results-message {
    color: var(--text-secondary);
    font-size: 1.1rem;
    font-weight: 500;
}

/* Loading animation */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.results-message:has-text("Searching") {
    animation: pulse 1.5s ease-in-out infinite;
}

/* ================ Video Display ================ */
#show-video {
    display: none;
    margin-bottom: 3rem;
    animation: slideDown 0.5s ease;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#show-video h2 {
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-color);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 16px;
    background: var(--bg-secondary);
    box-shadow: var(--shadow-lg);
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;
}

/* ================ Video Grid ================ */
#videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
    margin-bottom: 5rem;
    padding-bottom: 2rem;
}

.individual-video {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    animation: fadeInUp 0.5s ease;
    box-shadow: var(--shadow);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.individual-video:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow:
        0 20px 40px -10px rgba(0, 0, 0, 0.5),
        0 0 0 1px var(--border-hover);
}

.individual-video img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid var(--border-color);
}

.individual-video h2 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    padding: 1rem;
    color: var(--text-primary);
    min-height: 80px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 0;
}

.individual-video p {
    padding: 0 1rem 1rem 1rem;
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-top: auto;
}

/* ================ Footer ================ */
#footer {
    margin-top: auto;
    border-top: 1px solid var(--border-color);
    padding: 1.5rem 0;
    background: var(--bg-secondary);
}

#footerspace {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
}

.footer {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.youtube-logo {
    width: 70px;
    height: auto;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.youtube-logo:hover {
    opacity: 1;
}

/* ================ Responsive Design ================ */
@media (max-width: 768px) {
    #mainbar {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
    }

    .search-container {
        max-width: 100%;
        flex-direction: column;
    }

    #searchinput {
        width: 100%;
    }

    .searchbutton {
        width: 100%;
        justify-content: center;
    }

    #videos-grid {
        grid-template-columns: 1fr;
    }

    .name {
        font-size: 1.25rem;
    }

    a.home {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    #container {
        padding: 0 15px;
    }

    .ted-logo {
        width: 100px;
    }

    .individual-video h2 {
        font-size: 0.9rem;
    }
}

/* ================ Scrollbar Styling ================ */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #404040;
}

/* ================ Smooth Scrolling ================ */
html {
    scroll-behavior: smooth;
}
