# Gatsby_Typescript_Emotion_TailwindCSS

## Prerequisites:

* [Install NVM](https://github.com/brettjrea/Debian_Install_NVM)

---

### Quickscript:

```
sudo apt upgrade -y && sudo apt update -y && sudo apt autoremove -y
sudo apt install git
npm install -g typescript
npm install -g gatsby-cli
gatsby new my-frontend https://github.com/brettjrea/gatsby_typescript_emotion_tailwindcss
cd my-frontend
npm install tailwindcss --save-dev
npx tailwind init
npm i @emotion/react @emotion/core @emotion/styled tailwind.macro@next gatsby-plugin-postcss postcss-import postcss-preset-env
npm i gatsby-plugin-purgecss
npm install --save gatsby-plugin-react-helmet react-helmet
npm install --save gatsby-source-strapi
echo "14.16.0" > .nvmrc
npm run develop
```

---

## Always be updating:

```
sudo apt upgrade -y && sudo apt update -y && sudo apt autoremove -y
```

---

### Install required programs:

```
sudo apt install git
```

---

### Install Typescript NPM package globally:

```
npm install -g typescript
```

### Install Gatsby CLI NPM package globally:

```
npm install -g gatsby-cli
```

### Create Gatsby project from Git repo:

```
gatsby new my-frontend https://github.com/brettjrea/gatsby_typescript_emotion_tailwindcss
```

### Change directory to project:

```
cd my-frontend
```

### Add TailwindCSS NPM package to project:

```
npm install tailwindcss --save-dev
```

### Generate TailwindCSS Config.

```
npx tailwind init
```

### Add Emotion NPM package.

```
npm i @emotion/react @emotion/core @emotion/styled tailwind.macro@next gatsby-plugin-postcss postcss-import postcss-preset-env gatsby-plugin-purgecss
```

### Add React-Helmet NPM package for head:

```
npm install --save gatsby-plugin-react-helmet react-helmet
```

### Add strapi.io source plugin:

```
npm install --save gatsby-source-strapi
```

### Create .nvmrc file to set node version to use:

```
echo "14.16.0" > .nvmrc
```

### Run Gatsby develop:

```
gatsby develop:
```

or to ensure the .nvmrc file is being read, use

```
npm run develop
```

*The above command used echo to set this apps node version in a .nvmrc file so I chose to use npm run develop instead of gatsby develop.*

### *Quickly start after a shutdown or reboot.*

```
cd my-frontend
gatsby develop
```

or

```
cd my-frontend
npm run develop
```

---

You might now want to [install Theia](https://github.com/brettjrea/Debian_Theia_IDE_Patched) a browser based IDE built on Typescript.
