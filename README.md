# Unblock Workflow Application

Is software as service allow clap clients to build forms easily and connect them with rest of Unblock services.

![screenshot](https://user-images.githubusercontent.com/26310674/153287776-9d4ce499-6164-4e22-9c35-949fccb9f270.png)

## Get Started

### Setup

1. Copy env example file to env then update variables

```bash
cp .env.example .env
```

2. Install dependencies

```bash
yarn install && yarn run client:install
```

3. Compile the project first if there any issue

```bash
yarn run compile
```

4. Build project

```bash
yarn run build
```

5. Start the project

```bash
yarn run start
```

6. Watch the back-end

```bash
yarn run watch
```

7. Watch the front-end

```bash
yarn run client:watch
```

## Resources

- [Chat runner](https://gitlab.com/tripetto/runners/chat)
- [Custom block development](https://docs.tripetto.com/guide/blocks)
