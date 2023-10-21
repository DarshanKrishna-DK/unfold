# Unfold2023 Hackathon: Powered by CoinDCX
## HRX: Hackerrank for the Web3

What is the problem with solving DSA questions when you have all the things at your bay? The answer is simple: <strong>Long term reward mechanism</strong>. The problem is that hackers practice DSA questions for getting placements but turns out that their hard work is often not recognised. So, what what is our proposal? Simple. <i>Reward them as they progress to keep up their motivation</i>.

### Getting started
You need to follow the steps inorder to run the website in your local system.
<ol>
<li><code>npm init</code> You can add the <code>-y</code> flag to skip the initial steps</li>
<li><code>npm install -D tailwindcss postcss autoprefixer vite</code> for production</li>
<li><code>npx tailwindcss init</code></li>
<li>Locate <strong>tailwind.config.js</strong> and replace the file with the following lines:<br></li>

> /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["\*"],
  theme: {
    extend: {},
  },
  plugins: [],
}
<li>In <strong>package.json</strong> under the "scripts" key, replace with 

> ...
  "scripts": {
    "start": "vite"
  },
  ...

<li>Execute <code>npm run start</code></li>
</ol>
Voila! The website is running.

But, importantly make sure you have npm installed. If not, you can refer [here](https://nodejs.org/en/download).
<br>
### Why use our platform?
<ul>
<li>We offer a wide range of features and functionality.</li>
<li>Our platform is easy to use and navigate.</li>
<li>We are constantly adding new features and improvements.</li>
<li>We have a strong community of users and developers.</li>
</ul>

### How to connect to our platform

To connect to our platform, you will need to create an account. Once you have created an account, you will be able to log in and start using our platform.

To create an account, please visit: /signup

### Disclaimer

>This software is provided "as is" and without warranty of any kind, express, implied, or otherwise, including without limitation, any warranty of fitness for a particular purpose. The author or copyright holder shall not be liable for any damages arising from the use of this software.

#### Contributions

We welcome contributions to this project. Please feel free to fork the repo and submit pull requests.

Please follow the steps below to make your contribution:
<ol>
<li>Fork the current repository and make a copy</li>
<li>CRUD the code</li>
<li>Add, Commit, and create the Pull Request</li>
<li>Sit tight. We will integrate once we review your work</li>
</ol>