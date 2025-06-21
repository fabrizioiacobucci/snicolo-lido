# Vue BIMData + Gaussian Splatting Demo

This repository contains a small Vue.js project that integrates a BIMData viewer with two custom plugins:

* **Isolate Elements** – adapted from the ARKBim plugin to quickly hide and show IFC elements by type.
* **Gaussian Splatting** – opens an external page to inspect the model rendered using the [Gaussian Splatting 3D](https://github.com/mkkellogg/gaussian-splats-3d) library.

The application demonstrates how to connect to BIMData, display an IFC model, and extend the viewer with additional tools.

## Project Overview

```
vue-bim-app/
├── public/
│   ├── icons/                 # Icons used for the plugins
│   ├── chiostro s nicolo.ply  # Gaussian Splatting model sample
│   ├── gaussian-viewer.html   # External viewer opened by the plugin
│   └── index.html             # Entry point for the Vue application
├── src/
│   ├── components/
│   │   ├── BimViewer.vue      # Initializes @bimdata/viewer and registers plugins
│   │   ├── GaussianSplatting.vue  # Plugin opening gaussian-viewer.html
│   │   └── IsolateElements.vue    # Plugin isolating element categories
│   ├── App.vue
│   └── main.js
├── vue.config.js              # Vue CLI configuration
└── package.json
```

### Implementation Notes

`BimViewer.vue` creates the BIMData viewer with a specific cloud, project and model. It registers the two plugins defined in `src/components`. The file currently contains an example `accessToken`; replace it with your own BIMData token in order to load your data.

`gaussian-viewer.html` imports `@mkkellogg/gaussian-splats-3d` from a CDN and loads the sample `.ply` file located in `public`. The `GaussianSplatting.vue` plugin simply opens this page in a new tab when activated from the viewer toolbar.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run serve
   ```

   The application is now available at [http://localhost:8080](http://localhost:8080).

3. **Replace the BIMData token** (optional)

   Edit `src/components/BimViewer.vue` and set `accessToken` to your own token from the BIMData platform so the viewer can load your IFC model.

## Building for Production

Create a static build with:

```bash
npm run build
```

The generated files will be placed in the `dist/` directory.

## Hosting Options

### Node Runtime Hosting

On services like DigitalOcean you can run the application behind a small Node.js web server. After building the project, serve the `dist/` folder with any static file server, for example:

```bash
npx serve -s dist
```

Configure your hosting provider to run this command (or your preferred server) so that `dist/` is served over HTTPS.

### Static Hosting

Because the application is a standard Vue build, the contents of `dist/` can be deployed on any static hosting provider (GitHub Pages, Netlify, etc.). Simply upload the files in `dist/` to your chosen service.

## License

This project is released under the MIT License.
