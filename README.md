# Vue BIM Application

This project is a Vue.js application designed to visualize BIM data using the Ark-Bim plugins for rendering IFC models.

## Project Structure

```
vue-bim-app
├── public
│   ├── index.html          # Main HTML file for the application
├── src
│   ├── assets              # Static assets (images, fonts, styles)
│   ├── components
│   │   └── BimViewer.vue   # Component for rendering BIM models
│   ├── App.vue             # Root Vue component
│   ├── main.js             # Entry point of the Vue application
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── vue.config.js           # Vue CLI configuration
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd vue-bim-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run serve
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080` to view the application.

## Usage Guidelines

- The `BimViewer` component is responsible for loading and displaying IFC models. Ensure that you have the necessary Ark-Bim plugins installed and configured.
- You can customize the application by modifying the components in the `src/components` directory and adding any additional assets in the `src/assets` directory.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.