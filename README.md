[![npm version](https://badge.fury.io/js/rating-react.svg)](https://badge.fury.io/js/rating-react)

# Rating React

Rating React is an easy-to-use [react](https://github.com/facebook/react) rating component that allows the user to select a rating with stars, numbers or emojis, useful for reviews.

## Demo

See [react-rating](https://elthiagosm.github.io/documentation-rating-react/) in action.

## Installation

You can install `rating-react` component using the _npm_ package manager:

```bash
npm i rating-react
```

### Dependencies

The `react-rating` component [peer depends](https://docs.npmjs.com/files/package.json#peerdependencies) on the [React](http://facebook.github.io/react/) library, the [Prop-Types](https://www.npmjs.com/package/prop-types) library and [React-Icons](https://www.npmjs.com/package/react-icons) library.

Install React using _npm_ too:

```bash
npm i react
```

Install Prop-Types using _npm_ too:

```bash
npm i prop-types
```

Install React-Icons using _npm_ too:

```bash
npm i react-icons
```

## Usage

1. Install the library

   ```javascript
   npm i rating-react
   ```

2. Import the library into your component

   ```javascript
   import Rating from "rating-react";
   ```

3. Call it inside your component

   ```jsx
   <Rating />
   ```

## Properties

| Prop                | Type               | Description                                                             | Default   |
| ------------------- | ------------------ | ----------------------------------------------------------------------- | --------- |
| `maxRating`         | _number_           | Maximum number of icons for rating.                                     | 5         |
| `onRate`            | _function_         | Callback function that is called when the user selects a rating.        | undefined |
| `value`             | _number_           | Rating value (if externally controlled).                                | undefined |
| `readOnly`          | _bool_             | If set to true, do not allow user interaction.                          | false     |
| `disabled`          | _bool_             | If set to true, disables the component.                                 | false     |
| `size`              | _string_           | Icon size. Options: "sm", "md", "lg".                                   | "md"      |
| `defaultColor`      | _string_           | Color of inactive icons.                                                | "#ffc107" |
| `activeColor`       | _string_           | Color de los íconos activos.                                            | undefined |
| `showNoRatingGiven` | _bool_             | Displays text if no rating has been given.                              | false     |
| `disabledOpacity`   | _number_           | Opacity of the component when disabled.                                 | 0.5       |
| `resettable`        | _bool_             | Allows resetting the rating to 0.                                       | false     |
| `tooltip`           | _array of strings_ | Tooltips to display when hovering over the icons.                       | []        |
| `iconType`          | _string_           | Type of icon to display. Options: "stars", "hearts", "thumbs", "faces". | "stars"   |
| `ariaLabel`         | _string_           | ARIA label for accessibility.                                           | "rating"  |
| `showValue`         | _bool_             | Displays the current rating value.                                      | false     |

## License

[MIT License](https://github.com/dreyescat/react-rating/blob/master/LICENSE.md)
