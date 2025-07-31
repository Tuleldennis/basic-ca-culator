# Universal Code Preview 🚀

A comprehensive web-based application that allows you to write code in multiple programming languages and see live previews of what the code is trying to build. Whether it's a website, an app, or a simple script, this tool covers all bases and supports numerous programming languages.

## ✨ Features

### 🎯 **Multi-Language Support**
- **HTML/CSS/JS**: Live preview with instant rendering
- **Python**: Full execution using Pyodide (Python in the browser)
- **JavaScript**: Safe execution environment with console output
- **React/JSX**: Real-time React component rendering
- **Java**: Syntax highlighting and code preview
- **C++**: Syntax highlighting and code preview
- **C#**: Syntax highlighting and code preview
- **PHP**: Syntax highlighting and code preview
- **Ruby**: Syntax highlighting and code preview
- **Go**: Syntax highlighting and code preview

### 🔧 **Advanced Editor Features**
- **Syntax Highlighting**: Powered by CodeMirror with Dracula theme
- **Auto-completion**: Intelligent code completion
- **Bracket Matching**: Automatic bracket pairing and matching
- **Line Numbers**: Clear line numbering for better navigation
- **Code Folding**: Collapse and expand code sections
- **Multiple Themes**: Dark theme optimized for coding

### 🖥️ **Live Preview System**
- **Real-time Rendering**: Instant preview for web technologies
- **Console Output**: Capture and display console logs, errors, and warnings
- **Error Handling**: Comprehensive error reporting and debugging
- **Fullscreen Mode**: Expand preview to fullscreen for better viewing
- **Responsive Design**: Preview adapts to different screen sizes

### 🎨 **Modern UI/UX**
- **Glass Morphism Design**: Beautiful translucent interface
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Fluid transitions and hover effects
- **Intuitive Controls**: Easy-to-use buttons and navigation
- **Status Indicators**: Real-time feedback on code execution

### 🛠️ **Utility Features**
- **Template System**: Pre-built code examples for each language
- **Code Export**: Download your code in appropriate file formats
- **Copy to Clipboard**: Quick code sharing functionality
- **Character/Line Counter**: Track your code metrics
- **Auto-save**: Preserve your work automatically

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (for local development server)

### Installation

1. **Clone or download the project**:
   ```bash
   git clone <repository-url>
   cd universal-code-preview
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000`

### Alternative: Direct File Access
You can also run the application by simply opening `index.html` in your web browser, though a local server is recommended for full functionality.

## 📖 How to Use

### 1. **Select Your Language**
- Use the dropdown menu to choose your programming language
- The editor will automatically switch syntax highlighting modes

### 2. **Write or Load Code**
- Type your code directly in the editor
- Click "Load Template" to start with example code
- Use keyboard shortcuts for faster coding

### 3. **Preview Your Code**
- **HTML/CSS/JS**: Automatic live preview as you type
- **Python/JavaScript**: Click "Run Code" to execute
- **React**: Instant component rendering
- **Other Languages**: Syntax-highlighted code display

### 4. **Use Advanced Features**
- **Console**: View output, errors, and logs
- **Fullscreen**: Expand preview for better viewing
- **Download**: Save your code as a file
- **Copy**: Share code via clipboard

## 🎮 Supported Languages & Features

| Language | Live Execution | Console Output | Templates | File Export |
|----------|----------------|----------------|-----------|-------------|
| HTML/CSS/JS | ✅ | ✅ | ✅ | ✅ (.html) |
| Python | ✅ | ✅ | ✅ | ✅ (.py) |
| JavaScript | ✅ | ✅ | ✅ | ✅ (.js) |
| React/JSX | ✅ | ✅ | ✅ | ✅ (.jsx) |
| Java | ❌* | ❌ | ✅ | ✅ (.java) |
| C++ | ❌* | ❌ | ✅ | ✅ (.cpp) |
| C# | ❌* | ❌ | ✅ | ✅ (.cs) |
| PHP | ❌* | ❌ | ✅ | ✅ (.php) |
| Ruby | ❌* | ❌ | ✅ | ✅ (.rb) |
| Go | ❌* | ❌ | ✅ | ✅ (.go) |

*\* These languages show syntax-highlighted code preview (browser limitations prevent execution)*

## 🔧 Technical Architecture

### Frontend Technologies
- **HTML5**: Modern semantic markup
- **CSS3**: Advanced styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modern JavaScript features
- **CodeMirror**: Advanced code editor
- **Pyodide**: Python execution in browser
- **Babel**: JSX transformation
- **React**: Component rendering

### Key Libraries
- **CodeMirror 5.65.2**: Code editor with syntax highlighting
- **Pyodide 0.24.1**: Python scientific computing in browser
- **Babel Standalone**: JSX/ES6+ transformation
- **React 18**: Modern React library
- **Font Awesome 6**: Icon library
- **Prism.js**: Syntax highlighting for static languages

### Browser Compatibility
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🎨 Customization

### Themes
The application uses the Dracula theme by default. To change themes:
1. Modify the CodeMirror theme in `app.js`
2. Update CSS variables in `styles.css`

### Adding New Languages
To add support for a new language:
1. Add language configuration to `languageConfigs` in `app.js`
2. Include appropriate CodeMirror mode
3. Create template code
4. Update language selector in `index.html`

### Styling
Customize the appearance by modifying:
- `styles.css`: Main styling
- CSS custom properties for colors and spacing
- Animation timings and effects

## 🔒 Security Features

- **Sandboxed Execution**: Code runs in isolated environments
- **CSP Headers**: Content Security Policy protection
- **Input Sanitization**: XSS prevention
- **Safe Iframe**: Sandboxed preview frames

## 🚨 Known Limitations

1. **Server-side Languages**: Languages like Java, C++, C#, PHP, Ruby, and Go cannot execute in the browser and show syntax-highlighted previews only
2. **File System Access**: Limited file operations due to browser security
3. **Network Requests**: CORS limitations may affect external API calls
4. **Memory Usage**: Large Python computations may consume significant memory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **CodeMirror** team for the excellent code editor
- **Pyodide** project for Python in the browser
- **React** team for the component library
- **Font Awesome** for beautiful icons
- **All contributors** who help improve this project

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure you're using a supported browser
3. Try refreshing the page
4. Clear browser cache if needed

---

**Made with ❤️ for developers who love to code and see their creations come to life!**