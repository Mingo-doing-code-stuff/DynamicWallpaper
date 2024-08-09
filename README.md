# Dynamic Wallpaper Shortcuts

The following repository is containing a first small collection of simple implementations for an Shortcut to generate Wallpapers and set them as a background on your Phone or Mac.
The special part about it is that you can fully customise the resulting Wallpapers and even determine and update data that should be presented on them.
For example you can use it to display an complete calendar view of the current Month on your lockscreen, display an dashboard of your most important reminders, or some Data from an API you want to see whenever you unlock your Phone.

- Concept Idea
- Preconditions
- Installation and usage
- Customizing
  - usage of Apple Shortcut APIs
  - usage of Scriptable scripts
  - usage of other APIs
  - usage of custom images

# Concept Idea

This Shortcuts are making use of four simple Steps:
  - getting data
  - building HTML text and inject the data
  - generate an image from formatted text
  - set generated image as new background

> Depending on your iOS/ MacOS version it can be necessary to safe the text as to an file first and load this file, before you can generate an image of it. 

Check out the following [Example](https://www.icloud.com/shortcuts/52a02f966d6742a8a71883ba3817b552)

# Preconditions:

Despite the fact you can build most of the following Stuff as an pure iOS Shortcut, its way easier to build up the HTML text by a small JS script executed with Scriptable. Therefor the templates here are mainly an collection of the JS files you can use.

# Installation and usage

1. Copy the wanted Wallpapers JS file.
2. Add a new Scriptable script in your Scriptable App and past the Template.
3. In case of additional Data generate it using Apples Shortcut Actions and pass it to the `Execute script` Action.  
  > Note: Watch out to pass the necessary amount of arguments in form of a list, else the script will crash.
4. Parse the Shortcuts output to "Formatted text".
5. Generate Image from formatted text.
6. Set generated image as new Background.

# Customizing

## Usage of Apple Shortcut APIs

When it comes to Data received from an Apple Shortcut Action, you can simply pass it to the List that goes in to the `Execute script` Block. 

## Usage of Scriptable scripts

As Long its something that can be generated with JavaScript, you can generate Any data you want and call an responding function just in place off the HTML template.

```JavaScript
function randomColor() {
  var color = ...
  ...
  return color
}

var tempalte = """
... 
<style>
  .container {
    color: ${randomColor()};
  }
</style>

"""

return template
```

> [!CAUTION]
> 
> This can cause the script to fail, in case the called functions take to long.
> This also applies when you want to Fetch some data from an API, where the script may end before the results off the fetch are passed to the template.
> For Fetching API data please see the next part.

## Usage of other APIs

For Receiving data from any API you can simply go for the normal way, and then again pass the Data you want to present in the Image as a String to the script that builds the HTML text.

## Usage of custom images

Sadly there seams to be no easy Way to use images that are stored on Device, so therefore the only Way to inject images dynamicly is when they are online available and if their corresponding URL can be constructed as an String, that then again is passed in to the template

## Custom templates

Custom templates are easy generated with ChatGPT, so go and have fun :D 
