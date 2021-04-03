# Gatsby_Typescript_Styled_Components

## Prerequisites:

* [Install NVM](https://github.com/brettjrea/Debian_Install_NVM)

---

### Quickscript:

```
sudo apt upgrade -y && sudo apt update -y && sudo apt autoremove -y
sudo apt install git
npm install -g typescript
npm install -g gatsby-cli
gatsby new my-frontend https://github.com/brettjrea/gatsby_typescript_styled_setup
cd my-frontend
npm install styled-components gatsby-plugin-styled-components babel-plugin-styled-components
npm i --save-dev @types/styled-components
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
gatsby new my-frontend https://github.com/brettjrea/gatsby_typescript_styled_setup
```

### Change directory to project:

```
cd my-frontend
```

### Add Styled-Components NPM package to project:

```
npm install styled-components gatsby-plugin-styled-components babel-plugin-styled-components
npm i --save-dev @types/styled-components
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
