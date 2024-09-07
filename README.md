Here’s the complete **README.md** for your **Dynamic Userscript Project**. This will guide users through the setup, development, and usage of the project.

---

````markdown
# Dynamic Userscript Project

This project is a **dynamic userscript** built using **Vue 3**, **TypeScript**, and **Vite**. The userscript architecture is fully metadata-driven, allowing components, services, validation, and layouts to be dynamically injected at runtime based on JSON configurations.

It leverages **vite-plugin-monkey** for seamless userscript bundling and deployment, making it compatible with **ViolentMonkey** and **TamperMonkey**.

## Features

- **Dynamic Components**: Define UI components and layouts in metadata, and dynamically generate the user interface.
- **TypeScript**: Type safety and development efficiency.
- **Service Injection**: Inject services like validation, messaging, and API handlers dynamically into components.
- **Vite**: Fast development experience with hot-reloading and modern bundling tools.
- **vite-plugin-monkey**: Automatically bundles the project into a compatible userscript format.

---

## Project Structure

The project is organized as follows:

```plaintext
dynamic-userscript-project/
│
├── src/
│   ├── components/
│   │   ├── BaseComponent.ts            # Base component for handling dynamic metadata
│   │   └── DynamicComponent.ts         # Extends BaseComponent for dynamic UI generation
│   ├── services/
│   │   ├── ValidationService.ts        # Validation service for dynamic form fields
│   │   └── MessagingService.ts         # Messaging and proxying service
│   ├── layouts/
│   │   └── GridLayout.ts               # Layout logic for grid-based UI rendering
│   ├── templates/
│   │   └── CustomTemplate.ts           # Injectable custom template
│   ├── utils/
│   │   └── metaParser.ts               # Helper for parsing metadata from JSON
│   └── App.ts                          # Main entry point for the app
│
├── public/
│   └── index.html                      # Main HTML entry point for Vite
│
├── README.md                           # Project documentation
└── package.json                        # NPM package metadata
```
````

### Key Components

- **`BaseComponent.ts`**: A base component that renders UI elements dynamically from metadata.
- **`DynamicComponent.ts`**: Extends `BaseComponent` for dynamic UI rendering.
- **`ValidationService.ts`**: A service that handles validation of form data dynamically.
- **`MessagingService.ts`**: Manages messaging and proxying logic for API calls and inter-component communication.
- **`GridLayout.ts`**: Manages dynamic grid layouts based on metadata.
- **`CustomTemplate.ts`**: Dynamically injects custom templates into the component structure.

---

## Getting Started

Follow these instructions to set up the project locally or using an online platform such as **StackBlitz**.

### Prerequisites

- **Node.js** (v14 or higher)
- **NPM** (v6 or higher)
- **ViolentMonkey** or **TamperMonkey** (for userscript management)

---

### 1. Initialize the Project

You can either set up the project using **VSCode** locally or directly on **StackBlitz**.

#### Local Setup (VSCode)

1. Clone or create a new Vite + TypeScript project using:

   ```bash
   npm create vite@latest dynamic-userscript-project -- --template vue-ts
   ```

2. Navigate to the project directory and install dependencies:

   ```bash
   cd dynamic-userscript-project
   npm install
   ```

3. Add **vite-plugin-monkey** for userscript bundling:

   ```bash
   npm install vite-plugin-monkey --save-dev
   ```

4. Open the project in **VSCode**:

   ```bash
   code .
   ```

#### Online Setup (StackBlitz)

1. Go to [StackBlitz](https://stackblitz.com/) and create a new **Vite + TypeScript** project.
2. Replace the contents of the **`src/`** folder with the provided structure from this repository.

---

### 2. Project Configuration

#### Vite Configuration

Configure **Vite** to use the `vite-plugin-monkey` plugin for bundling userscripts. Add or update the `vite.config.ts` file as follows:

```typescript
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/App.ts',
      userscript: {
        name: 'Dynamic Userscript',
        namespace: 'https://my.namespace.com/',
        match: ['https://example.com/*'],  // Adjust based on the sites the userscript will run on
        grant: ['GM_xmlhttpRequest'],  // Add GreaseMonkey API methods if needed
      },
    }),
  ],
});
```

---

### 3. Running the Project

#### Development Mode

Start the development server using **Vite** with hot reloading:

```bash
npm run dev
```

You can now develop the project, and changes will reflect instantly in the browser.

#### Building the Userscript

Once you are ready to build the userscript:

```bash
npm run build
```

This command will bundle the userscript into the `dist/` folder, and it will be ready for installation in **ViolentMonkey** or **TamperMonkey**.

#### Installing the Userscript

1. Open the `.user.js` file located in the `dist/` folder.
2. **ViolentMonkey** or **TamperMonkey** will automatically prompt you to install the userscript.

---

## Usage

### Dynamic Metadata

The UI components, layout, and services are driven by JSON metadata. You can customize the behavior by editing the metadata in `src/App.ts`.

Example metadata:

```typescript
const metadata = {
  ui: [
    { type: 'input', model: 'formData.username', placeholder: 'Enter username' },
    { type: 'input', model: 'formData.password', placeholder: 'Enter password', attributes: { type: 'password' } },
    { type: 'button', content: 'Submit', onClick: 'submitForm' }
  ],
  layout: {
    '@layout': 'grid',
    columns: 2
  }
};
```

This will create a dynamic form with two inputs and a submit button, all rendered based on the metadata configuration.

---

## Customizing the Userscript

### Adding Components and Services

To add new components or services:

1. Create new files in the `src/components/` or `src/services/` directories.
2. Import and register them in the `App.ts` file as needed.

### Modifying Layouts

You can easily switch layouts by modifying the metadata in `App.ts`. For example, switch between grid or flex layouts, or inject custom layouts.

Example grid layout:

```typescript
layout: {
  '@layout': 'grid',
  columns: 3
}
```

---

## Deployment

Once the userscript is built, you can deploy it to **ViolentMonkey** or **TamperMonkey** by simply opening the `.user.js` file in the browser.

For advanced deployment options, consider hosting the userscript on a server and auto-updating via the `@updateURL` and `@downloadURL` metadata.

---

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the dynamic userscript architecture!

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the project as long as you include the original license.

```

---

### Notes

- The **README.md** explains the structure, how to get started, and how to customize the project for dynamic userscripts.
- **StackBlitz** or **VSCode** can be used depending on user preference, and both setups are supported.
- The metadata-driven nature of the userscript allows for easy expansion without needing significant changes to the core logic, which is emphasized in the README.

This should provide a solid foundation for any developer using this project template to get started quickly! Let me know if you need further adjustments or clarification!
```
