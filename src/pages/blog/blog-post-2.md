---
title: WebC for 11ty
description: WebC for 11ty
date: 2023-02-04
---

I love 11ty and use it for pretty much every personal project.
One of the main things that I've wanted for 11ty is a robust way to work with reusable components.
I've used Vue for a while now and one of the things I like about it are the single file components.
Being able to have the HTML, scripts and styles all in one place is useful, especially the ability to scope styles to the component.
I've always wished that 11ty had something similar.

Guess what? Now it does!


## What's WebC?

What it means to me is basically single file components for 11ty. You can find a more thorough and  _accurate_ explanation on the [official site](https://www.11ty.dev/docs/languages/webC/).
You get reusable components you can use on your website that will render to the client as static HTML. 
It also gives you scoped CSS!

## Single file components for 11ty

I've used 11ty for a while now and I've played around with different methods to to give me a similar experience to what I'm used to in Vue.
The closest I got was using Nunjucks macros.
These gave me the ability to have reusable components with props but it wasn't perfect.
There was no way to scope the styles so you still had to rely on global styles.
The markup needed to create the macro also made it hard to easily tell what macro was doing. 

## What's good about WebC?

Lots. Here's are a few of the obvious ones for me:

- You write the components with HTML (and and some WebC sprinkles).
- They render statically on the client which means they work without JavaScript.
- You can write CSS that is scoped to that component.
- You can also use them to render reusable content (instead of using Nunjucks includes, for example).

## What are the downsides?

Nothing's perfect but this isn't far off!

- There's a bit of a learning curve but it's really not that steep.
- It requires an additional plugin if that bothers you.
- With my original setup I couldn't get pages using WebC layouts to render correctly using directory data. It needed a little bit of `eleventyConfig`-wrangling to get around it.

## Where can I learn more?

I'm still getting my head around WebC and I know I've barely scratched the surface of what it can do. Here are some resources I found useful:

- [Official 11ty docs](https://www.11ty.dev/docs/languages/webc/)
- [11ty & WebC](https://11ty.webc.fun/)
- [Introduction to WebC](https://11ty.rocks/posts/introduction-webc/)
- [Understanding WebC Features and Concepts](https://11ty.rocks/posts/understanding-webc-features-and-concepts/)

Also, there's a link to my [starter template](https://github.com/robjwood/rjw-11ty-webC-starter). 
