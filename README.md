This is a website landing page which is going to be hosted in firebase that uses react and shall see in libraries to build the ui ux 

Firebase hosting
----------------

Quick steps to create a new Firebase project and deploy this site:

1. Install Firebase CLI (global) or use `npx`:

```bash
npm install -g firebase-tools
# or use npx without installing globally:
# npx firebase-tools login
```

2. Log in to Firebase:

```bash
firebase login
```

3. (Optional) Create a new Firebase project from the CLI (or create it in the Firebase console):

```bash
firebase projects:create your-project-id --display-name "My Project"
```

4. Initialize hosting in this repo (choose "dist" as the public directory and enable single-page app rewrite):

```bash
firebase init hosting --project your-project-id
```

5. Build and deploy:

```bash
# Direct deploy (replace project id):
npx firebase-tools deploy --only hosting --project your-project-id

# Or use the npm script (set FIREBASE_PROJECT env var first):
# Windows (PowerShell):
setx FIREBASE_PROJECT "your-project-id"
npm run deploy
# Linux/macOS:
export FIREBASE_PROJECT=your-project-id
npm run deploy
```

Notes
- The project includes `firebase.json` configured to serve the Vite `dist` folder and rewrite all routes to `/index.html`.
- Update `.firebaserc` to set your default project id, or pass `--project` when running deploy.
