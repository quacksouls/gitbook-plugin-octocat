## gitbook-plugin-octocat

[![npm version](https://badge.fury.io/js/gitbook-plugin-octocat.svg)](https://badge.fury.io/js/gitbook-plugin-octocat)
[![Known Vulnerabilities](https://snyk.io/test/github/quacksouls/gitbook-plugin-octocat/badge.svg)](https://snyk.io/test/github/quacksouls/gitbook-plugin-octocat)

Display a link to your GitHub repository in your GitBook/HonKit.

### Usage

Put this in your `book.json`:

```js
{
    "plugins": [ "octocat" ],
    "pluginsConfig": {
        "octocat": {
            "url": "https://github.com/your/repo"
        }
    }
}
```

And you're done!

### Credits

- Original work by [@mjackson](https://github.com/mjackson).
- Edited for GitLab support by [Chathu Vishwajith](https://github.com/iamchathu).
- Modified to support GitHub by [Duck McSouls](https://github.com/quacksouls).
