# React code challenge

The app consists in a single page Todo app. A todo item includes:

- an `id`, you can use the `createId()` function from utils.
- a title
- an (optional) list of tags.

The user is able to perform the following actions:

- Add a todo
- Mark a todo as completed (and vice-versa)
- View a list of the todos
- View a list of the completed todos

**Note:** A guideline implementation is running on https://inw-react-challenge-1.vercel.app, you can use it as a baseline.

## Tech stack

- React
- TypeScript
- CSS
- Pico.css (https://picocss.com/), used to apply some base styling, no need to deep dive into it.

## Installation

- `nvm use`, if you're using NVM. This project was created with Node 18.
- `npm i`
- `npm run dev`
- `npm run test-watch` and `npm run test`
- `npm run ts-check`

## Assumptions

- The CSS file doesn't need be changed, instead the HTML can be inferred from the selectors in that file.
- A React shell is already setup, alongside any needed components. This is only a guideline to bring you up to speed, you can change as much as you like (TypeScript props included).
- Ideally your implementation should have all tests passing and showing no TypeScript errors.
- The solution should have feature parity (as much as possible) with the model application.

## Doing the challenge

Please follow the steps bellow to setup the challenge.

### Step 1 - Use this template

**⚠️ Important note: Please do not fork this template. By doing so everyone can see your implementation, including other candidates!**

1. On this project github homepage, click on **"Use this template"**
2. Select **"Create a new repository"**
3. Owner should be your own personal github account
4. Make the repository public
5. Click **"Create repository from template"**

### Step 2 - Pull request

Raise a Pull Request **on your own repository** with the implemented solution (refer to the Tasks in the next section). Include the following information on the PR description:

- State which tasks were implemented.
- Show the output of `npm run test` and `npm run ts-check`.

### Step 3 - Share the PR link with us

Send the PR link to our recruiters. Remember not to post anything on the main template repository.

Our developers will review your solution and get back to you as soon as possible.

## Tasks

You can search for `implement me` in the codebase to find where code is missing.

- [ ] Implement the add Todo form.

Tags are optional and should be processed by `convertStringToTags` from `utils.ts`. There is an equivalent test for this function that will help you figure out the implementation.

Some UI/UX notes:

- A Todo can't be added without a title.
- Tags are optional.

- [ ] Implement the missing test in `utils.spec.ts`
- [ ] Render a list of Todos
- [ ] Render a list of completed Todos
- [ ] Clicking on each Todo's checkbox will toggle its completed state.

Good luck and do your best! :)
