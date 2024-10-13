---
sidebar_label: 'Quick Start'
sidebar_position: 2
---

# Quick Start

After I learned Git for The Good Docs Project, I looked for an opportunity to use it more often. Creating and maintaining a portfolio site on GitHub Pages gave me an excuse to use Git, markdown, and Docusaurus at least once a month. This quick start guide makes sure I don’t skip any steps.

## Revise Portfolio Site

My portfolio site is a static website built with Docusaurus and hosted on GitHub Pages. I make changes locally and then deploy the changes to GitHub.

### Start Development Server

Open site files and view content locally.

1. In a terminal, navigate to the application directory

    :::note NOTE
    Portfolio site is at carriewritesdocs
    :::

1. Enter `npm run start`
1. The site opens in a browser at `<http://localhost:3000/carriewritesdocs/>`

### Revise Content

Create, edit, or remove content.

1. Open site files in a text editor
1. Make changes
1. Review changes in browser

### Push Revisions to Git

Update files in local repository.

1. In the terminal, confirm you’re in the application directory
1. Enter `git status`
1. Enter `git add .`
1. Enter `git commit -m \“My commit message”\`

    :::note NOTE
    The commit message should describe the changes.
    :::

1. Enter `git push`

### Deploy Revisions to GitHub

Update files in GitHub Pages.

1. In iTerm, enter `GIT_USER=carriemacfarlane yarn deploy`
1. If prompted, enter GitHub token

    :::note NOTE
    Token is stored in saved passwords.
    :::

1. If successful, a `Done` message displays above the command line. The changes are deployed to Pages at [https://carriemacfarlane.github.io/carriewritesdocs/](https://carriemacfarlane.github.io/carriewritesdocs/)

    :::note NOTE
    If an error message displays, search for advice and try again.
    :::

### Help

#### Terminal and Command Line

* open a new tab: `COMMAND+T`
* [Mac Terminal Cheat Sheet](https://gist.github.com/joshuapekera/fa4d168d6e9467b1b964faf419a46841)

#### Revising Content

* open VS Code help: `COMMAND+P`
* [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

#### Git

* get help for a command: `git help <command>`
* view list of common commands: `git help`
* exit help: `q`
* [Giteveryday](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/giteveryday.html)
* [Git - Documentation](https://git-scm.com/doc)
