# Note

# Description
This application demonstrates how to build most commonly used components in any React applications. This app also demonstartes how to build base component and customise it with react prop system.
Some important videos
=> (Event and State design process)[https://www.udemy.com/course/react-redux/learn/lecture/34695178#content]
Components built in this app are:
1. Button. [Bit of button theory](https://www.udemy.com/course/react-redux/learn/lecture/34694972#content)
2. Accordion. [Accordion overview](https://www.udemy.com/course/react-redux/learn/lecture/34695162#content)
3. Dropdown. [Drowndown overview](https://www.udemy.com/course/react-redux/learn/lecture/34695264#content)

# TailwindCSS installation steps
1. Install tailwindCSS
```
npm install -D tailwindcss
```

2. Init tailwindcss. This command should create tailwind.config.js file in root directory of project.
```
npx tailwindcss init
```

3. Add following code to tailwind.config.js file
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Create index.css file in src directory. See src directory for content of this file.

5. Import index.css file into index.js
```
import './index.css';
``` 


# Installing libraries for this project
Install prop types library
```
npm install prop-types
```

Install classnames library
```
npm install classnames
```

Install react-icon library
```
npm install react-icons
```

# Important
- [Brief App descrition](https://www.udemy.com/course/react-redux/learn/lecture/34694954#content)
- [TailwindCSS](https://tailwindcss.com/docs/installation)