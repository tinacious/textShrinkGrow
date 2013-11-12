# jQuery Shrink and Grow Text

This jQuery plugin was developed for use in Accessible Web Design for users to increase and decrease their font size using on-page controls.

In order for this to work, all of your declared font sizes need to be sized relative to the body and cannot have absolute values, i.e. use ems or percentages instead of pixels.

## Usage

### HTML

You create the buttons you want to be clicked or you can use the provided plain text styles.

```html
<span class="shrink-link">A</span>
<span class="grow-link">A</span>
```

### CSS

The included CSS will make it look like this if you use the included HTML.

![](buttons.png)

### jQuery

Call each function on the desired element. 

```js
$(document).ready(function(){
    $('.shrink-link').textShrink();
    $('.grow-link').textGrow();
});
```

## Demo

To see a working demo, click [here](http://tinacious.github.io/textShrinkGrow/)