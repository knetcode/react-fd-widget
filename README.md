## FreshDesk Widget

#### Built with React, Materialize and Electron

1. To run locally `yarn dev`
2. To build locally `yarn build`
3. When updating a version, update the version number in `package.json` and `App.js`
4. To build to auto-update electron, `yarn build -p always` then publish build from Github
5. Add `.env` file with `REACT_APP_ADMIN_KEY=Basic xxx` for admin API Key
6. Add `.env` file with `REACT_APP_API_URL=https://xxx.com` for admin API Key
7. Fetch request uses FreshService v1 API
8. Put and Post requests use FreshService v2 API

For more information on the technologies used, please see the below links  
[React JS](https://reactjs.org/docs/getting-started.html)  
[react-icons](https://react-icons.github.io/react-icons/)  
[react-materialize](http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome)  
[Electron JS](https://www.electronjs.org/docs)  
[electron-builder](https://github.com/electron-userland/electron-builder)  
[electron-log](https://github.com/megahertz/electron-log)  
[electron-is-dev](https://github.com/sindresorhus/electron-is-dev)  
[electron-updater](https://github.com/iffy/electron-updater-example)  
