# 📦 remix-server-folders

This patch updates the Remix compiler to treat all files in any folder named with `.server` extension as _server only_ files. In other words, it acts like you named all the files with `*.server.ts` extension.

This just makes it easier to add files to the **server** folder without having to change the name.

See example. Both methods work.

```
├── lib
│   └── test.server.ts
└── services.server
    └── service.ts
```

To install, add `patch-package` to your project, then copy the _patch_ file for your specific Remix version to the `/patches` folder in your project. Also add `"postinstall": "patch-package"` to _package.json_
