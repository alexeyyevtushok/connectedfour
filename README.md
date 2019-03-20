## Structure description
In the project directory, you can find such files:

### `index.js`

Root file.

### `Game`

Parent component for `Header` and `Board`. Consist logic and config of game. Here you can change:current game state,size of a grid.

### `Header`

`<h1>` and `<button>` included here.

### `Board`

Child component of `Game` and parent for `Cell`. Render grid and cells,determine a win.

### `Cell`

Child component of `Board`. Return cell template.

### `boardCreation.js`

Create array for `Board.state`. Array created for pressed cells.

## How to launct project
You should install `node_moudles` and start project with `npm`
### `npm i`
### `npm start`