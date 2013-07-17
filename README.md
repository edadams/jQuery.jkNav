jQuery.jkNav
============

Smoothly navigate up and down between different elements on a page, even elements that are not siblings or are in any way related!

## Required Files

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.coda.js"></script>

## Usage Example (short form)

    $.jkNav('#header, #content li, #footer'); /* Navigate between anything that matches these selectors */
    
## Usage Example (long form)

    $.jkNav({
      selector: '#header, #content li, #footer',  /* Navigate between anything that matches these selectors */
      up: 75,   /* Go up when the K button is pressed (keycode is 75) */
      down: 74,   /* Go down when the J button is pressed (keycode is 74) */
      padding: 5,   /* Adds a space of 5px between the top of the element and the top of the window */
    });

## Current Limitations / Ideal Future
* If a navigable item is next in the index but is relatively or absolutely positioned, it will navigate up or down to get to it, even if the user would like to go in the opposite direction. It is advised to place the positioned element in your code relative to your index if possible.
* Currently only up and down but maybe I'll add options to go left and right and diagonally.
* I would like to make the padding feature able to use a function so you could make the padding conditional based on the element and such.
