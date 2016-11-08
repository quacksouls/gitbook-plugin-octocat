## gitbook-plugin-gitlab

[![npm version](https://badge.fury.io/js/gitbook-plugin-gitlab.svg)](https://badge.fury.io/js/gitbook-plugin-gitlab)

Display a link to your GitLab repo in your gitbook.

### Usage

Put this in your book.json:

```js
{
    "plugins": [ "gitlab" ],
    "pluginsConfig": {
        "gitlab": {
            "url": "https://gitlab.com/your/repo"
        }
    }
}
```

And you're done!

### Credits

Original work by [@mjackson](https://github.com/mjackson).

Edited for GitLab support by [Chathu Vishwajith](https://github.com/iamchathu)
