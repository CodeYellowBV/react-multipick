# React Multipick

A package for React that offers you a multiselect dropdown.
It has buttons to select all or none of the items, and has search functionality.
If there are more than 5 items, it will automatically show the search bar (this is configurable).

[**Demo time**](https://codeyellowbv.github.io/react-multipick/)

## Install

```
yarn add react-multipick
npm i react-multipick --save
```

## Usage

An example:

```js
import Multipick from 'react-multipick';

const data = [
    {
        value: '1',
        label: 'Dinosaurus',
        selected: true,
    },
    {
        value: '2',
        label: 'Butterflies',
    },
    {
        value: '3',
        label: 'Giraffes',
    }
];

<Multipick
    data={data}
/>
```

### Language

The default language used is English. You can change this with a couple of props:

```js
<Multipick
    data={data}
    searchPlaceholder="Search…"
    selectedText="$1 of $2 selected"
    noneSelectedText="None selected"
    selectAllText="Select all"
    selectNoneText="Select none"
/>
```

### Search bar

By default, the search bar will only show when you have 5 or more items.

If you want it to always appear, you can change it to:

```js
<Multipick
    data={data}
    searchAppearsAfterCount={0}
/>
```

You can change it to any other number you want to.
