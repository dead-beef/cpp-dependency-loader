# cpp-dependency-loader

[![npm](https://img.shields.io/npm/v/cpp-dependency-loader.svg)](
    https://www.npmjs.com/package/cpp-dependency-loader
) [![node](https://img.shields.io/node/v/cpp-dependency-loader.svg)](
    https://nodejs.org/
) [![Libraries.io for GitHub](https://img.shields.io/librariesio/github/dead-beef/cpp-dependency-loader.svg)](
    https://libraries.io/npm/cpp-dependency-loader/
) [![license](https://img.shields.io/github/license/dead-beef/cpp-dependency-loader.svg)](
    https://github.com/dead-beef/cpp-dependency-loader/blob/master/LICENSE
)

## Overview

Webpack loader that adds dependencies to C/C++ files.

## Requirements

- [`Node.js`](https://nodejs.org/)
- [`NPM`](https://nodejs.org/)
- [`Emscripten`](https://emscripten.org/)
- [`Webpack`](https://webpack.js.org/)

## Installation

```bash
npm install cpp-dependency-loader
```

## Usage

```js
{
  test: /\.c(?:pp)?$/,
  use: [
    {
      loader: 'cpp-wasm-loader',
      options: {
        // cpp-wasm-loader options
      }
    },
    {
      loader: 'cpp-dependency-loader',
      options: {
        // emccPath: String,
      }
    }
  ]
}
```

## Licenses

* [`cpp-dependency-loader`](https://github.com/dead-beef/cpp-dependency-loader/blob/master/LICENSE)
