# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

Now the tools to edit the portfolio :

## Add Blog posts

- Create a "title.md" file in "src/pages/posts" folder
- Paste this texte at the top of the file :

---
layout: "../../layouts/Posts.astro"
title: 'title'
pubDate: YYYY-MM-DD
description: 'description'
author: 'author'
image:
    url: 'url'
    alt: 'alt'
tags: ["this", "is", "a tag"]
---

- Edit the informations of the post as you like.
- Write your text under the last paragraph.
- The blog post will appear on the Blog page, and on the home page with recent blog posts.