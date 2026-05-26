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
|       └──[lang]
|           └──posts
|               └──Post.md
|           └──index.astro
└── package.json
```

Now the tools to edit the portfolio :

## Add Blog posts

- Create a "title.md" file in "src/pages/[lang]/posts" folder
- Paste this texte at the top of the file :

---
layout: "@/layouts/Posts.astro"
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
- Don't forget to make a version for every language available. Otherwise, it'll throwback directly to English version.


## Modify or add informations on pages
- For light moditications, the text is directly editable in the [lang]/page.astro file, for each language.

- There are also files in src/data that contain some info that can easily be accessible, like the infos in the "About" page with favorite games, projects, etc. This is accessible in the about.json file. Don't forget to edit each version of the file for every language.

- The ui.ts file is for general, interface tweaks and texts. All languages are in the same file. If an element isn't specified for a language (French), but specified in English (default language), it'll be shown in English by default.

- For heavier modifications of pages, design, and the addition of more pages, contact Doggibelle.