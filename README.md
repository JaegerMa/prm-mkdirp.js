# prm-mkdirp
  Slim promise wrapper for mkdirp

```shell
npm install --save prm-mkdirp
```

## Examples

```js
const mkdirp = require('prm-mkdirp');

await mkdirp('/path/to/new/directory');

mkdirp('/path/to/new/directory', (err) =>
{
	//If a callback is given, it will be called like in normal mkdirp
});
```

## API (same as mkdirp)

### `mkdirp(dir, [opts], [callback])`

#### arguments

- `dir: string`
- `opts: object`
- `callback: function`

#### returns

- `Promise`

### `mkdirp.sync(dir, [opts])`

#### arguments

- `dir: string`
- `opts: object`
