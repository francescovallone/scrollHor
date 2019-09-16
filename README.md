# scrollHor

## Description

A [jQuery](https://jquery.com/) plugin to scroll full page divs horizontally.

## Installation

Download the [repository][repo].

## Usage

### Load The Plugin

Use `<script src="dist/jquery.scrollHor.js"></script>` to load the plugin.
*REMEMBER:* You have to load [jQuery](https://jquery.com/) and [jquery-mousewheel](https://github.com/jquery/jquery-mousewheel) to use it.


And use `<link href="css/scrollHor.css" rel="stylesheet" type="text/css">` to load the style inside your HTML page.

*WARNING* You have to load the css file to use this plugin.

## Basic Usage

You can just call the function without any options.

~~~javascript


$(document).ready(function() {
    $('#object').scrollHor();
});


~~~

## Default `speed`

You can change the speed of the scrolling. This is the default speed.

~~~javascript


$(document).ready(function() {
    $('#object').scrollHor(500);
});


~~~


[repo]: https://github.com/francescovallone/scrollHor/archive/master.zip
