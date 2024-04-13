# vue-cart

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### PRACTICE:
1. Generic Class
Create a generic class called Stack that represents a stack data structure. The class should have methods for pushing an element onto the stack, popping an element from the stack, and returning the current size of the stack.
2. Filtering Array Elements
Write a generic function called filterArray that takes an array of items and a predicate function. The function should return a new array containing only the items that satisfy the predicate.
3. Convert Object Keys to Uppercase
Create a TypeScript function that takes an object as input and converts all the keys of the object to uppercase using mapped types.
4. Creates a type with all properties of T set to optional(Partial<T>)
5. Creates a type with all properties of T set to required(Required<T>)
6. Creates a type by picking the specified properties (K) from T(Pick<T, K>)
7. Creates a type by omitting the specified properties (K) from T(Omit<T, K>)
8. Creates an object type with keys of type K and values of type T(Record<K, T>)
9. Creates a type by excluding all types from T that are assignable to U(Exclude<T, U>)
10. Creates a type by extracting all types from T that are assignable to U(Extract<T, U>)# construction-materials
