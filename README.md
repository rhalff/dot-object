dedot.js
========

Helper function to convert dot notation to objects

e.g.

```javascript
var DeDot = require('dedot');

var row = {
  'id': 2,
  'contact.name.first': 'John',
  'contact.name.last': 'Doe',
  'contact.email': 'example@gmail.com',
  'contact.info.about.me': 'classified'
};

DeDot.object(row);
```

Will result in the following object:

```json
{
  "id": 2,
  "contact": {
    "name": {
      "first": "John",
      "last": "Doe"
    },
    "email": "example@gmail.com",
    "info": {
      "about": {
      "me": "classified"
      }
    }
  }
}
```

To convert manually per string use:
```javascript
var obj = {};
DeDot.str('this.is.my.string', 'value', obj);
```

```json
{
  "this": {
    "is": {
      "my": {
        "string": "value"
      }
    }
  }
}
```

The code will throw an exception if you try to redefine a value which is already set. 

== Using modifiers ==

You can use modifiers to translate values on the fly.

This example uses the [underscore.string](https://github.com/epeli/underscore.string) library.

```javascript
var _s = require('underscore.string');
var obj = {};

DeDot.str('my.title', 'this is my title', _s.slugify); // use one modifier

DeDot.str('my.title', '   this is my title  ', [_s.trim, _s.slugify]); // multiple modifiers
```

```json
{
  "my": {
    "title": "this-is-my-title"
  }
}
```




Copyright © 2013 Rob Halff, released under the MIT license
