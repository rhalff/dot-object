[![Build Status](https://travis-ci.org/rhalff/dot-object.png)](https://travis-ci.org/rhalff/dot-object)

Dot-Object
========

Dot-Object makes it possible to transform javascript objects using dot notation.


#### Move a property within one object to another location
```javascript
var DJ = require('dot-object');

var dj = new DJ();

var obj = {
  'first_name': 'John',
  'last_name': 'Doe'
};

dj.move('first_name', 'contact.firstname', obj);
dj.move('last_name', 'contact.lastname', obj);

console.log(obj);

{
  contact: {
    firstname: 'John',
    lastname: 'Doe'
  }
}

```

#### Transform an object

```javascript
var DJ = require('dot-object');

var dj = new DJ();

var row = {
  'id': 2,
  'contact.name.first': 'John',
  'contact.name.last': 'Doe',
  'contact.email': 'example@gmail.com',
  'contact.info.about.me': 'classified'
};

dj.object(row);

console.log(row);

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
var DJ = require('dot-object');

var dj = new DJ();

var obj = { val: 'test' };
dj.str('this.is.my.string', 'value', obj);

console.log(obj);

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

#### Pick a value using dot notation:
```
var obj = {
 some: {
   nested: {
     value: 'Hi there!'
   }
 }
};

var val = dj.pick('some.nested.key', obj);
console.log(val);

Hi there!
```

### Using modifiers

You can use modifiers to translate values on the fly.

This example uses the [underscore.string](https://github.com/epeli/underscore.string) library.



```javascript
var DJ = require('dot-object');

var dj = new DJ();

var _s = require('underscore.string');

var row = {
  'nr': 200,
  'doc.name': '    My Document   '
};

var mods = {
  "doc.name": [_s.trim, _s.underscored],
};

dj.object(row, mods);

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

var DJ = require('dot-object');
var _s = require('underscore.string');
var obj = { id: 100 };

var dj = new DJ();

// use one modifier
dj.str('my.title', 'this is my title', obj, _s.slugify);

// multiple modifiers
dj.str('my.title', '   this is my title  ', obj, [_s.trim, _s.slugify]);

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

```javascript
var DJ = require('dot-object');

var dj = new DJ('->');

var _s = require('underscore.string');

var row = {
  'nr': 200,
  'doc->name': '    My Document   '
};

var mods = {
  "doc->name": [_s.trim, _s.underscored],
};

dj.object(row, mods);

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
