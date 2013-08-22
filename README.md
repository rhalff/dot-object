dedot.js
========

DeDot makes it possible to transform json objects using dot notation.

The input can be interpreted as a transform object.

There are many usecases where this comes in handy.

For example defining transformation filters for your JSON or
translating SQL results on the fly to JSON (using dotted __AS__ notation).


e.g.

```javascript
var DeDot = require('dedot');

var dd = new DeDot();

var row = {
  'id': 2,
  'contact.name.first': 'John',
  'contact.name.last': 'Doe',
  'contact.email': 'example@gmail.com',
  'contact.info.about.me': 'classified'
};

dd.object(row);

console.log(row);
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
var DeDot = require('dedot');

var dd = new DeDot();

var obj = { val: 'test' };
dd.str('this.is.my.string', 'value', obj);

console.log(obj);
```
Result:
```json
{
  "val": "test",
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

## Using modifiers

You can use modifiers to translate values on the fly.

This example uses the [underscore.string](https://github.com/epeli/underscore.string) library.



```javascript
var DeDot = require('dedot');

var dd = new DeDot();

var _s = require('underscore.string');

var row = {
  'nr': 200,
  'doc.name': '    My Document   ' 
};

var mods = {
  "doc.name": [_s.trim, _s.underscored],
};

dd.object(row, mods);

console.log(row);
```

```
{
  "nr": 200,
  "doc": {
    "name": "my_document"
  }
}
```

Or using .str() directy:

```javascript

var DeDot = require('dedot');
var _s = require('underscore.string');
var obj = { id: 100 };

var dd = new DeDot();

// use one modifier
dd.str('my.title', 'this is my title', obj, _s.slugify);

// multiple modifiers
dd.str('my.title', '   this is my title  ', obj, [_s.trim, _s.slugify]);

console.log(obj);
```
Result:
```json
{
  "id": 100,
  "my": {
    "title": "this-is-my-title"
  }
}
```

## Using a different seperator 

If you do not like dot notation, you are free to specify a different seperator.

Here is a php'ish version.

```javascript
var DeDot = require('dedot');

var dd = new DeDot('->');

var _s = require('underscore.string');

var row = {
  'nr': 200,
  'doc->name': '    My Document   ' 
};

var mods = {
  "doc->name": [_s.trim, _s.underscored],
};

dd.object(row, mods);

console.log(row);
```

```
{
  "nr": 200,
  "doc": {
    "name": "my_document"
  }
}
```

## Transforming SQL results to JSON

SQL translation on the fly:

```javascript
 // TODO

```


> Copyright © 2013 Rob Halff, released under the MIT license
