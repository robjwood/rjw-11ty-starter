---
title: Grid template areas
description: Grid template areas
date: 2023-04-15
---

I use grid a fair bit in my work but I realise there's so much of it I don't know that well.

One thing that I've not used too much is `grid-area`. In creating the header for this very site, I created a simple 2 by 2 grid.

I then placed the logo, theme switcher and nav items in separate areas. To do this, I used `<grid-line>`. After a bit of faffing I got it to work.


It just seems so un-intuitive though. You set 4 values (in this order):

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

So, you can end up with something like this (assuming you're using integers as the values):

`grid-area: 1 / 1 / 2 / 2`

You can omit certain values and certain rules are applied to set the values automatically. This is great but it means it's not always obvious what's going on.

## A nicer way?

A better way for my tiny brain to understand is use `<custom-ident>`. This allows you to apply a user-defined string to visually map out how I you want the grid to look. Instead of effectively specifying the co-ordinates of where each item should sit in a 2x2 column grid, you map out the areas in the parent and give them an identifier. That identifier is then referenced in the CSS for the child item.

## What does that mean in English?

This:

```CSS
nav {
  grid-template-areas:
    "logo switcher"
    "link links";
}
```

This may not always be the best approach but I find this a much easier way to visualise what's going on 

