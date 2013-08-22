/// <reference no-default-lib="true"/>

///************************************************
//*                                               *
//*              ECMA APIS                        *
//*                                               *
//************************************************/

declare var NaN: number;
declare var Infinity: number;

/**
  * Evaluates JavaScript code and executes it. 
  * @param x A String value that contains valid JavaScript code.
  */
declare function eval(x: string): any;

/**
  * Converts A string to an integer.
  * @param s A string to convert into a number.
  * @param radix A value between 2 and 36 that specifies the base of the number in numString. 
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */
declare function parseInt(s: string, radix?: number): number;

/**
  * Converts a string to a floating-point number. 
  * @param string A string that contains a floating-point number. 
  */
declare function parseFloat(string: string): number;

/**
  * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). 
  * @param number A numeric value.
  */
declare function isNaN(number: number): boolean;

/** 
  * Determines whether a supplied number is finite.
  * @param number Any numeric value.
  */
declare function isFinite(number: number): boolean;

/**
  * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
  * @param encodedURI A value representing an encoded URI.
  */
declare function decodeURI(encodedURI: string): string;

/**
  * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  * @param encodedURIComponent A value representing an encoded URI component.
  */
declare function decodeURIComponent(encodedURIComponent: string): string;

/** 
  * Encodes a text string as a valid Uniform Resource Identifier (URI)
  * @param uri A value representing an encoded URI.
  */ 
declare function encodeURI(uri: string): string;

/**
  * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  * @param uriComponent A value representing an encoded URI component.
  */
declare function encodeURIComponent(uriComponent: string): string;

interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}

interface PropertyDescriptorMap {
    [s: string]: PropertyDescriptor;
}

interface Object {
    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns a date converted to a string using the current locale. */
    toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
      * Determines whether an object has a property with the specified name. 
      * @param v A property name.
      */
    hasOwnProperty(v: string): boolean;

    /**
      * Determines whether an object exists in another object's prototype chain. 
      * @param v Another object whose prototype chain is to be checked.
      */
    isPrototypeOf(v: Object): boolean;

    /** 
      * Determines whether a specified property is enumerable.
      * @param v A property name.
      */
    propertyIsEnumerable(v: string): boolean;

    [s: string]: any;
}

/**
  * Provides functionality common to all JavaScript objects.
  */
declare var Object: {
    new (value?: any): Object;
    (): any;
    (value: any): any;

    /** A reference to the prototype for a class of objects. */
    prototype: Object;

    /** 
      * Returns the prototype of an object. 
      * @param o The object that references the prototype.
      */
    getPrototypeOf(o: any): any;

    /**
      * Gets the own property descriptor of the specified object. 
      * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype. 
      * @param o Object that contains the property.
      * @param p Name of the property.
    */
    getOwnPropertyDescriptor(o: any, p: string): PropertyDescriptor;

    /** 
      * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly 
      * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
      * @param o Object that contains the own properties.
      */
    getOwnPropertyNames(o: any): string[];

    /** 
      * Creates an object that has the specified prototype, and that optionally contains specified properties.
      * @param o Object to use as a prototype. May be null
      * @param properties JavaScript object that contains one or more property descriptors. 
      */
    create(o: any, properties?: PropertyDescriptorMap): any;

    /**
      * Adds a property to an object, or modifies attributes of an existing property. 
      * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
      * @param p The property name.
      * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
      */
    defineProperty(o: any, p: string, attributes: PropertyDescriptor): any;

    /**
      * Adds one or more properties to an object, and/or modifies attributes of existing properties. 
      * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
      * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
      */
    defineProperties(o: any, properties: PropertyDescriptorMap): any;

    /**
      * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes. 
      */
    seal(o: any): any;

    /**
      * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes.
      */
    freeze(o: any): any;

    /**
      * Prevents the addition of new properties to an object.
      * @param o Object to make non-extensible. 
      */
    preventExtensions(o: any): any;

    /**
      * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
      * @param o Object to test. 
      */
    isSealed(o: any): boolean;

    /**
      * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
      * @param o Object to test.  
      */
    isFrozen(o: any): boolean;

    /**
      * Returns a value that indicates whether new properties can be added to an object.
      * @param o Object to test. 
      */
    isExtensible(o: any): boolean;

    /**
      * Returns the names of the enumerable properties and methods of an object.
      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
      */
    keys(o: any): string[];
}

/**
  * Creates a new function.
  */
interface Function {
    /**
      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
      * @param thisArg The object to be used as the this object.
      * @param argArray A set of arguments to be passed to the function.
      */
    apply(thisArg: any, argArray?: any): any;

    /**
      * Calls a method of an object, substituting another object for the current object.
      * @param thisArg The object to be used as the current object.
      * @param argArray A list of arguments to be passed to the method.
      */
    call(thisArg: any, ...argArray: any[]): any;

    /**
      * For a given function, creates a bound function that has the same body as the original function. 
      * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
      * @param thisArg An object to which the this keyword can refer inside the new function.
      * @param argArray A list of arguments to be passed to the new function.
      */
    bind(thisArg: any, ...argArray: any[]): any;
    
    prototype: any;
    length: number;

    // Non-standard extensions
    arguments: any;
    caller: Function;
}

declare var Function: {
    /** 
      * Creates a new function.
      * @param args A list of arguments the function accepts.
      */
    new (...args: string[]): Function;
    (...args: string[]): Function;
    prototype: Function;
}

interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

interface String {
    /** Returns a string representation of a string. */
    toString(): string;

    /**
      * Returns the character at the specified index.
      * @param pos The zero-based index of the desired character.
      */
    charAt(pos: number): string;

    /** 
      * Returns the Unicode value of the character at the specified location.
      * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
      */
    charCodeAt(index: number): number;

    /**
      * Returns a string that contains the concatenation of two or more strings.
      * @param strings The strings to append to the end of the string.  
      */
    concat(...strings: string[]): string;

    /**
      * Returns the position of the first occurrence of a substring. 
      * @param searchString The substring to search for in the string
      * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
      */
    indexOf(searchString: string, position?: number): number;

    /**
      * Returns the last occurrence of a substring in the string.
      * @param searchString The substring to search for.
      * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
      */
    lastIndexOf(searchString: string, position?: number): number;

    /**
      * Determines whether two strings are equivalent in the current locale.
      * @param that String to compare to target string
      */
    localeCompare(that: string): number;

    /** 
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A variable name or string literal containing the regular expression pattern and flags.
      */
    match(regexp: string): string[];
    /** 
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A regular expression object that contains the regular expression pattern and applicable flags. 
      */
    match(regexp: RegExp): string[];

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A String object or string literal that represents the regular expression
      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.
      */
    replace(searchValue: string, replaceValue: string): string;
    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A String object or string literal that represents the regular expression
      * @param replaceValue A function that returns the replacement text.
      */
    replace(searchValue: string, replaceValue: (substring: string, ...args: any[]) => string): string;
    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags
      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.
      */
    replace(searchValue: RegExp, replaceValue: string): string;
    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags
      * @param replaceValue A function that returns the replacement text.
      */
    replace(searchValue: RegExp, replaceValue: (substring: string, ...args: any[]) => string): string;

    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags. 
      */
    search(regexp: string): number;
    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags. 
      */
    search(regexp: RegExp): number;

    /**
      * Returns a section of a string.
      * @param start The index to the beginning of the specified portion of stringObj. 
      * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. 
      * If this value is not specified, the substring continues to the end of stringObj.
      */
    slice(start: number, end?: number): string;

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. 
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(separator: string, limit?: number): string[];
    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A Regular Express that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. 
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(separator: RegExp, limit?: number): string[];

    /**
      * Returns the substring at the specified location within a String object. 
      * @param start The zero-based index integer indicating the beginning of the substring.
      * @param end Zero-based index integer indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
      * If end is omitted, the characters from start through the end of the original string are returned.
      */
    substring(start: number, end?: number): string;

    /** Converts all the alphabetic characters in a string to lowercase. */
    toLowerCase(): string;

    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
    toLocaleLowerCase(): string;

    /** Converts all the alphabetic characters in a string to uppercase. */
    toUpperCase(): string;

    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
    toLocaleUpperCase(): string;

    /** Removes the leading and trailing white space and line terminator characters from a string. */
    trim(): string;

    /** Returns the length of a String object. */
    length: number;

    // IE extensions
    /**
      * Gets a substring beginning at the specified location and having the specified length.
      * @param from The starting position of the desired substring. The index of the first character in the string is zero.
      * @param length The number of characters to include in the returned substring.
      */
    substr(from: number, length?: number): string;
}

/** 
  * Allows manipulation and formatting of text strings and determination and location of substrings within strings. 
  */
declare var String: {
    new (value?: any): String;
    (value?: any): string;
    prototype: String;
    fromCharCode(...codes: number[]): string;
}

interface Boolean {
}
declare var Boolean: {
    new (value?: any): Boolean;
    (value?: any): boolean;
    prototype: Boolean;
}

interface Number {
    toString(radix?: number): string;
    toFixed(fractionDigits?: number): string;
    toExponential(fractionDigits?: number): string;
    toPrecision(precision: number): string;
}
/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: {
    new (value?: any): Number;
    (value?: any): number;
    prototype: Number;
    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
    MAX_VALUE: number;
    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
    MIN_VALUE: number;
    /** 
      * A value that is not a number.
      * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
      */
    NaN: number;
    /** 
      * A value that is less than the largest negative number that can be represented in JavaScript.
      * JavaScript displays NEGATIVE_INFINITY values as -infinity. 
      */
    NEGATIVE_INFINITY: number;
    /**
      * A value greater than the largest number that can be represented in JavaScript. 
      * JavaScript displays POSITIVE_INFINITY values as infinity. 
      */
    POSITIVE_INFINITY: number;
}

interface Math {
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    E: number;
    /** The natural logarithm of 10. */
    LN10: number;
    /** The natural logarithm of 2. */
    LN2: number;
    /** The base-2 logarithm of e. */
    LOG2E: number;
    /** The base-10 logarithm of e. */
    LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    SQRT1_2: number;
    /** The square root of 2. */
    SQRT2: number;
    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative). 
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
    abs(x: number): number;
    /**
      * Returns the arc cosine (or inverse cosine) of a number. 
      * @param x A numeric expression.
      */ 
    acos(x: number): number;
    /** 
      * Returns the arcsine of a number. 
      * @param x A numeric expression.
      */
    asin(x: number): number;
    /**
      * Returns the arctangent of a number. 
      * @param x A numeric expression for which the arctangent is needed.
      */
    atan(x: number): number;
    /**
      * Returns the angle (in radians) from the X axis to a point (y,x).
      * @param y A numeric expression representing the cartesian y-coordinate.
      * @param x A numeric expression representing the cartesian x-coordinate.
      */
    atan2(y: number, x: number): number;
    /**
      * Returns the smallest integer greater than or equal to its numeric argument. 
      * @param x A numeric expression.
      */
    ceil(x: number): number;
    /**
      * Returns the cosine of a number. 
      * @param x A numeric expression that contains an angle measured in radians.
      */ 
    cos(x: number): number;
    /**
      * Returns e (the base of natural logarithms) raised to a power. 
      * @param x A numeric expression representing the power of e.
      */
    exp(x: number): number;
    /**
      * Returns the greatest integer less than or equal to its numeric argument. 
      * @param x A numeric expression.
      */
    floor(x: number): number;
    /**
      * Returns the natural logarithm (base e) of a number. 
      * @param x A numeric expression.
      */
    log(x: number): number;
    /**
      * Returns the larger of a set of supplied numeric expressions. 
      * @param values Numeric expressions to be evaluated.
      */
    max(...values: number[]): number;
    /**
      * Returns the smaller of a set of supplied numeric expressions. 
      * @param values Numeric expressions to be evaluated.
      */
    min(...values: number[]): number;
    /**
      * Returns the value of a base expression taken to a specified power. 
      * @param x The base value of the expression.
      * @param y The exponent value of the expression.
      */
    pow(x: number, y: number): number;
    /** Returns a pseudorandom number between 0 and 1. */ 
    random(): number;
    /** 
      * Returns a supplied numeric expression rounded to the nearest integer.
      * @param x The value to be rounded to the nearest integer.
      */
    round(x: number): number;
    /**
      * Returns the sine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    sin(x: number): number;
    /**
      * Returns the square root of a number.
      * @param x A numeric expression.
      */
    sqrt(x: number): number;
    /**
      * Returns the tangent of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    tan(x: number): number;
}
/** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;

/** Enables basic storage and retrieval of dates and times. */
interface Date {
    /** Returns a string representation of a date. The format of the string depends on the locale. */
    toString(): string;
    /** Returns a date as a string value. */
    toDateString(): string;
    /** Returns a time as a string value. */
    toTimeString(): string;
    toLocaleString(): string;
    /** Returns a date as a string value appropriate to the host environment's current locale. */
    toLocaleDateString(): string;
    /** Returns a time as a string value appropriate to the host environment's current locale. */
    toLocaleTimeString(): string;
    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
    valueOf(): number;
    /** Gets the time value in milliseconds. */
    getTime(): number;
    /** Gets the year, using local time. */
    getFullYear(): number;
    /** Gets the year using Universal Coordinated Time (UTC). */
    getUTCFullYear(): number;
    /** Gets the month, using local time. */
    getMonth(): number;
    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
    getUTCMonth(): number;
    /** Gets the day-of-the-month, using local time. */
    getDate(): number;
    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
    getUTCDate(): number;
    /** Gets the day of the week, using local time. */
    getDay(): number;
    /** Gets the day of the week using Universal Coordinated Time (UTC). */
    getUTCDay(): number;
    /** Gets the hours in a date, using local time. */
    getHours(): number;
    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
    getUTCHours(): number;
    /** Gets the minutes of a Date object, using local time. */
    getMinutes(): number;
    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
    getUTCMinutes(): number;
    /** Gets the seconds of a Date object, using local time. */
    getSeconds(): number;
    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCSeconds(): number;
    /** Gets the milliseconds of a Date, using local time. */
    getMilliseconds(): number;
    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCMilliseconds(): number;
    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
    getTimezoneOffset(): number;
    /** 
      * Sets the date and time value in the Date object.
      * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT. 
      */
    setTime(time: number): void;
    /**
      * Sets the milliseconds value in the Date object using local time. 
      * @param ms A numeric value equal to the millisecond value.
      */
    setMilliseconds(ms: number): void;
    /** 
      * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
      * @param ms A numeric value equal to the millisecond value. 
      */
    setUTCMilliseconds(ms: number): void;

    /**
      * Sets the seconds value in the Date object using local time. 
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setSeconds(sec: number, ms?: number): void;
    /**
      * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCSeconds(sec: number, ms?: number): void;
    /**
      * Sets the minutes value in the Date object using local time. 
      * @param min A numeric value equal to the minutes value. 
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setMinutes(min: number, sec?: number, ms?: number): void;
    /**
      * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
      * @param min A numeric value equal to the minutes value. 
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCMinutes(min: number, sec?: number, ms?: number): void;
    /**
      * Sets the hour value in the Date object using local time.
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setHours(hours: number, min?: number, sec?: number, ms?: number): void;
    /**
      * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): void;
    /**
      * Sets the numeric day-of-the-month value of the Date object using local time. 
      * @param date A numeric value equal to the day of the month.
      */
    setDate(date: number): void;
    /** 
      * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
      * @param date A numeric value equal to the day of the month. 
      */
    setUTCDate(date: number): void;
    /** 
      * Sets the month value in the Date object using local time. 
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. 
      * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
      */
    setMonth(month: number, date?: number): void;
    /**
      * Sets the month value in the Date object using Universal Coordinated Time (UTC).
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
      * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
      */
    setUTCMonth(month: number, date?: number): void;
    /**
      * Sets the year of the Date object using local time.
      * @param year A numeric value for the year.
      * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
      * @param date A numeric value equal for the day of the month.
      */
    setFullYear(year: number, month?: number, date?: number): void;
    /**
      * Sets the year value in the Date object using Universal Coordinated Time (UTC).
      * @param year A numeric value equal to the year.
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
      * @param date A numeric value equal to the day of the month.
      */
    setUTCFullYear(year: number, month?: number, date?: number): void;
    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
    toUTCString(): string;
    /** Returns a date as a string value in ISO format. */
    toISOString(): string;
    /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */ 
    toJSON(key?: any): string;
}
/**
  * Enables basic storage and retrieval of dates and times.
  */
declare var Date: {
    new (): Date;
    new (value: number): Date;
    new (value: string): Date;
    new (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
    (): string;
    prototype: Date;
    /**
      * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
      * @param s A date string
      */
    parse(s: string): number;
    /**
      * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date. 
      * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
      * @param month The month as an integer between 0 and 11 (January to December).
      * @param date The date as an integer between 1 and 31.
      * @param hours Must be supplied if minutes is supplied. An integer from 0 to 23 (midnight to 11pm) that specifies the hour.
      * @param minutes Must be supplied if seconds is supplied. An integer from 0 to 59 that specifies the minutes.
      * @param seconds Must be supplied if milliseconds is supplied. An integer from 0 to 59 that specifies the seconds.
      * @param ms An integer from 0 to 999 that specifies the milliseconds.
      */
    UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
    now(): number;
}

interface RegExpExecArray {
    [index: number]: string;
    length: number;

    index: number;
    input: string;

    toString(): string;
    toLocaleString(): string;
    concat(...items: any[]): string[];
    join(separator?: string): string;
    pop(): string;
    push(...items: string[]): number;
    reverse(): string[];
    shift(): string;
    slice(start: number, end?: number): string[];
    sort(compareFn?: (a: string, b: string) => number): string[];
    splice(start: number): string[];
    splice(start: number, deleteCount: number, ...items: string[]): string[];
    unshift(...items: string[]): number;

    indexOf(searchElement: string, fromIndex?: number): number;
    lastIndexOf(searchElement: string, fromIndex?: number): number;
    every(callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg?: any): boolean;
    some(callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg?: any): boolean;
    forEach(callbackfn: (value: string, index: number, array: string[]) => void , thisArg?: any): void;
    map(callbackfn: (value: string, index: number, array: string[]) => any, thisArg?: any): any[];
    filter(callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg?: any): string[];
    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;
    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;
}


interface RegExp {
    /** 
      * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
      * @param string The String object or string literal on which to perform the search.
      */
    exec(string: string): RegExpExecArray;
    /** 
      * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
      * @param string String on which to perform the search.
      */
    test(string: string): boolean;
    /** Returns a copy of the text of the regular expression pattern. Read-only. The rgExp argument is a Regular expression object. It can be a variable name or a literal. */
    source: string;
    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
    global: boolean;
    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
    ignoreCase: boolean;
    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
    multiline: boolean;

    lastIndex: number;

    // Non-standard extensions
    compile(): RegExp;
}
declare var RegExp: {
    new (pattern: string, flags?: string): RegExp;
    (pattern: string, flags?: string): RegExp;

    // Non-standard extensions
    $1: string;
    $2: string;
    $3: string;
    $4: string;
    $5: string;
    $6: string;
    $7: string;
    $8: string;
    $9: string;
    lastMatch: string;
}

interface Error {
    name: string;
    message: string;
}
declare var Error: {
    new (message?: string): Error;
    (message?: string): Error;
    prototype: Error;
}

interface EvalError extends Error {
}
declare var EvalError: {
    new (message?: string): EvalError;
    (message?: string): EvalError;
    prototype: EvalError;
}

interface RangeError extends Error {
}
declare var RangeError: {
    new (message?: string): RangeError;
    (message?: string): RangeError;
    prototype: RangeError;
}

interface ReferenceError extends Error {
}
declare var ReferenceError: {
    new (message?: string): ReferenceError;
    (message?: string): ReferenceError;
    prototype: ReferenceError;
}

interface SyntaxError extends Error {
}
declare var SyntaxError: {
    new (message?: string): SyntaxError;
    (message?: string): SyntaxError;
    prototype: SyntaxError;
}

interface TypeError extends Error {
}
declare var TypeError: {
    new (message?: string): TypeError;
    (message?: string): TypeError;
    prototype: TypeError;
}

interface URIError extends Error {
}
declare var URIError: {
    new (message?: string): URIError;
    (message?: string): URIError;
    prototype: URIError;
}

interface JSON {
    /**
      * Converts a JavaScript Object Notation (JSON) string into an object.
      * @param text A valid JSON string.
      * @param reviver A function that transforms the results. This function is called for each member of the object. 
      * If a member contains nested objects, the nested objects are transformed before the parent object is. 
      */
    parse(text: string, reviver?: (key: any, value: any) => any): any;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      */
    stringify(value: any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      */
    stringify(value: any, replacer: (key: string, value: any) => any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer Array that transforms the results.
      */
    stringify(value: any, replacer: any[]): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
    stringify(value: any, replacer: (key: string, value: any) => any, space: any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer Array that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
    stringify(value: any, replacer: any[], space: any): string;
}
/**
  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
  */
declare var JSON: JSON;

////////////////
/// ECMAScript Array API (specially handled by compiler)
////////////////

interface Array<T> {
    toString(): string;
    toLocaleString(): string;
    concat<U extends T[]>(...items: U[]): T[];
    concat(...items: T[]): T[];
    join(separator?: string): string;
    pop(): T;
    push(...items: T[]): number;
    reverse(): T[];
    shift(): T;
    slice(start: number, end?: number): T[];
    sort(compareFn?: (a: T, b: T) => number): T[];
    splice(start: number): T[];
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    unshift(...items: T[]): number;

    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void , thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U;

    length: number;

}
declare var Array: {
    new <T>(arrayLength: number): T[];
    new <T>(...items: T[]): T[];
    <T>(arrayLength: number): T[];
    <T>(...items: T[]): T[];
    isArray(arg: any): boolean;
    prototype: Array<any>;
}


////////////////
/// IE10 ECMAScript Extensions
////////////////

interface ArrayBuffer {
    byteLength: number;
}
declare var ArrayBuffer: {
    prototype: ArrayBuffer;
    new (byteLength: number);
}

interface ArrayBufferView {
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

interface Int8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int8Array;
}
declare var Int8Array: {
    prototype: Int8Array;
    new (length: number): Int8Array;
    new (array: Int8Array): Int8Array;
    new (array: number[]): Int8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int8Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint8Array;
}
declare var Uint8Array: {
    prototype: Uint8Array;
    new (length: number): Uint8Array;
    new (array: Uint8Array): Uint8Array;
    new (array: number[]): Uint8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8Array;
    BYTES_PER_ELEMENT: number;
}

interface Int16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int16Array;
}
declare var Int16Array: {
    prototype: Int16Array;
    new (length: number): Int16Array;
    new (array: Int16Array): Int16Array;
    new (array: number[]): Int16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int16Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint16Array;
}
declare var Uint16Array: {
    prototype: Uint16Array;
    new (length: number): Uint16Array;
    new (array: Uint16Array): Uint16Array;
    new (array: number[]): Uint16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint16Array;
    BYTES_PER_ELEMENT: number;
}

interface Int32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int32Array;
}
declare var Int32Array: {
    prototype: Int32Array;
    new (length: number): Int32Array;
    new (array: Int32Array): Int32Array;
    new (array: number[]): Int32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int32Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint32Array;
}
declare var Uint32Array: {
    prototype: Uint32Array;
    new (length: number): Uint32Array;
    new (array: Uint32Array): Uint32Array;
    new (array: number[]): Uint32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float32Array;
}
declare var Float32Array: {
    prototype: Float32Array;
    new (length: number): Float32Array;
    new (array: Float32Array): Float32Array;
    new (array: number[]): Float32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float64Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float64Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float64Array;
}
declare var Float64Array: {
    prototype: Float64Array;
    new (length: number): Float64Array;
    new (array: Float64Array): Float64Array;
    new (array: number[]): Float64Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float64Array;
    BYTES_PER_ELEMENT: number;
}

interface DataView extends ArrayBufferView {
    getInt8(byteOffset: number): number;
    getUint8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian?: boolean): number;
    getUint16(byteOffset: number, littleEndian?: boolean): number;
    getInt32(byteOffset: number, littleEndian?: boolean): number;
    getUint32(byteOffset: number, littleEndian?: boolean): number;
    getFloat32(byteOffset: number, littleEndian?: boolean): number;
    getFloat64(byteOffset: number, littleEndian?: boolean): number;

    setInt8(byteOffset: number, value: number): void;
    setUint8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;
}
declare var DataView: {
    prototype: DataView;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): DataView;
}

/************************************************
*                                               *
*               Node.js                         *
*                                               *
************************************************/

declare var process: NodeProcess;
declare var global : any;
declare var console:
{
   log     (...data: any[]): void;
   info    (...data: any[]): void;
   error   (...data: any[]): void;
   warn    (...data: any[]): void;
   dir     (obj: any)      : void;
   timeEnd (label: string) : void;
   trace   (label: string) : void;
   assert  (expression: any, ...message: string[]): void;
}

declare var __filename: string;
declare var __dirname : string;

declare function setTimeout    (callback: () => void , ms: number): any;
declare function clearTimeout  (timeoutId: any);
declare function setInterval   (callback: () => void , ms: number): any;
declare function clearInterval (intervalId: any);

declare var require: {
    (id: string): any;
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
}

declare var module: 
{
   require (id: string): any;
   exports  : any;
   id       : string;
   filename : string;
   loaded   : boolean;
   parent   : any;
   children : any[];
}

declare var SlowBuffer: 
{
   prototype: NodeBuffer;
   new (str: string, encoding?: string): NodeBuffer;
   new (size: number) : NodeBuffer;
   new (array: any[]) : NodeBuffer;
   
   isBuffer   (obj: any): boolean;
   byteLength (string: string, encoding?: string): number;
   concat     (list: NodeBuffer[], totalLength?: number): NodeBuffer;
};

declare var Buffer: 
{
   new (str: string, encoding?: string): NodeBuffer;
   new (size: number): NodeBuffer;
   new (array: any[]): NodeBuffer;
   prototype: NodeBuffer;
   isBuffer(obj: any): boolean;
   byteLength(string: string, encoding?: string): number;
   concat    (list: NodeBuffer[], totalLength?: number): NodeBuffer;
}

/************************************************
*                                               *
*                   INTERFACES                  *
*                                               *
************************************************/

interface EventEmitter 
{
   addListener        (event: string, listener: Function);
   on                 (event: string, listener: Function);
   once               (event: string, listener: Function): void;
   removeListener     (event: string, listener: Function): void;
   removeAllListeners (event: string): void;
   setMaxListeners    (n: number): void;
   listeners          (event: string): { Function; }[];
   emit               (event: string, arg1?: any, arg2?: any): void;
}

interface WritableStream extends EventEmitter {
   writable: boolean;
   write(str: string, encoding?: string, fd?: string): boolean;
   write(buffer: NodeBuffer): boolean;
   end(): void;
   end(str: string, enconding: string): void;
   end(buffer: NodeBuffer): void;
   destroy(): void;
   destroySoon(): void;
}

interface ReadableStream extends EventEmitter {
   readable: boolean;
   setEncoding(encoding: string): void;
   pause(): void;
   resume(): void;
   destroy(): void;
   pipe(destination: WritableStream, options?: { end?: boolean; }): void;
}

interface NodeProcess extends EventEmitter {
   stdout: WritableStream;
   stderr: WritableStream;
   stdin: ReadableStream;
   argv: string[];
   execPath: string;
   abort(): void;
   chdir(directory: string): void;
   cwd(): void;
   env: any;
   exit(code?: number): void;
   getgid(): number;
   setgid(id: number): void;
   getuid(): number;
   setuid(id: number): void;
   version: string;
   versions: { http_parser: string; node: string; v8: string; ares: string; uv: string; zlib: string; openssl: string; };
   mainModule : {
      filename:string;
   };
   config: {
       target_defaults: {
           cflags: any[];
           default_configuration: string;
           defines: string[];
           include_dirs: string[];
           libraries: string[];
       };
       variables: {
       clang: number;
       host_arch: string;
       node_install_npm: boolean;
       node_install_waf: boolean;
       node_prefix: string;
       node_shared_openssl: boolean;
       node_shared_v8: boolean;
       node_shared_zlib: boolean;
       node_use_dtrace: boolean;
       node_use_etw: boolean;
       node_use_openssl: boolean;
       target_arch: string;
       v8_no_strict_aliasing: number;
       v8_use_snapshot: boolean;
       visibility: string;
   };
   };
   kill(pid: number, signal?: string): void;
   pid: number;
   title: string;
   arch: string;
   platform: string;
   memoryUsage(): { rss: number; heapTotal; number; heapUsed: number; };
   nextTick(callback: Function): void;
   umask(mask?: number): number;
   uptime(): number;
   hrtime(): number[];
}

// Buffer class
interface NodeBuffer {
   [index: number]: number;
   write(string: string, offset?: number, length?: number, encoding?: string): number;
   toString(encoding: string, start: number, end: number): string;
   length: number;
   copy(targetBuffer: NodeBuffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): void;
   slice(start?: number, end?: number): NodeBuffer;
   readUInt8(offset: number, noAsset?: boolean): number;
   readUInt16LE(offset: number, noAssert?: boolean): number;
   readUInt16BE(offset: number, noAssert?: boolean): number;
   readUInt32LE(offset: number, noAssert?: boolean): number;
   readUInt32BE(offset: number, noAssert?: boolean): number;
   readInt8(offset: number, noAssert?: boolean): number;
   readInt16LE(offset: number, noAssert?: boolean): number;
   readInt16BE(offset: number, noAssert?: boolean): number;
   readInt32LE(offset: number, noAssert?: boolean): number;
   readInt32BE(offset: number, noAssert?: boolean): number;
   readFloatLE(offset: number, noAssert?: boolean): number;
   readFloatBE(offset: number, noAssert?: boolean): number;
   readDoubleLE(offset: number, noAssert?: boolean): number;
   readDoubleBE(offset: number, noAssert?: boolean): number;
   writeUInt8(value: number, offset: number, noAssert?: boolean): void;
   writeUInt16LE(value: number, offset: number, noAssert?: boolean): void;
   writeUInt16BE(value: number, offset: number, noAssert?: boolean): void;
   writeUInt32LE(value: number, offset: number, noAssert?: boolean): void;
   writeUInt32BE(value: number, offset: number, noAssert?: boolean): void;
   writeInt8(value: number, offset: number, noAssert?: boolean): void;
   writeInt16LE(value: number, offset: number, noAssert?: boolean): void;
   writeInt16BE(value: number, offset: number, noAssert?: boolean): void;
   writeInt32LE(value: number, offset: number, noAssert?: boolean): void;
   writeInt32BE(value: number, offset: number, noAssert?: boolean): void;
   writeFloatLE(value: number, offset: number, noAssert?: boolean): void;
   writeFloatBE(value: number, offset: number, noAssert?: boolean): void;
   writeDoubleLE(value: number, offset: number, noAssert?: boolean): void;
   writeDoubleBE(value: number, offset: number, noAssert?: boolean): void;
   fill(value: any, offset?: number, end?: number): void;
   INSPECT_MAX_BYTES: number;
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module querystring {
   export function stringify(obj: any, sep?: string, eq?: string): string;
   export function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
   export function escape(): any;
   export function unescape(): any;
}

declare module events {
   export interface NodeEventEmitter {
       addListener(event: string, listener: Function);
       on(event: string, listener: Function): any;
       once(event: string, listener: Function): void;
       removeListener(event: string, listener: Function): void;
       removeAllListener(event: string): void;
       setMaxListeners(n: number): void;
       listeners(event: string): { Function; }[];
       emit(event: string, arg1?: any, arg2?: any): void;
   }

   export var EventEmitter: NodeEventEmitter;
}

declare module http 
{
    export interface Server extends events.NodeEventEmitter 
    {
        maxHeadersCount: number;
        listen    (port: number, hostname?: string, backlog?: number, callback?: Function): void;
        listen    (path: string, callback?: Function): void;
        listen    (handle: any, listeningListener?: Function): void;
        close     (cb?: any): void;
    }
   
    export interface ServerRequest extends events.NodeEventEmitter, stream.ReadableStream 
    {
        connection: net.NodeSocket;
        method      : string;
        url         : string;
        headers     : string;
        trailers    : string;
        httpVersion : string;
        setEncoding (encoding?: string): void;
        pause       (): void;
        resume      (): void;
    }
   
    export interface ServerResponse extends events.NodeEventEmitter, stream.WritableStream 
    {
        sendDate   : boolean;
        statusCode : number;
       
        // Extended base methods
        write         (str: string, encoding?: string, fd?: string): boolean;
        write         (buffer: NodeBuffer): boolean;
        writeContinue (): void;
        writeHead     (statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead     (statusCode: number, headers?: any): void;
        setHeader     (name: string, value  : string): void;
        setHeader     (name: string, buffer : string[]) : void;
        getHeader     (name: string): string;
        removeHeader  (name: string): void;
        write         (chunk: any, encoding?: string): any;
        addTrailers   (headers: any): void;
        end           (data?: any, encoding?: string): void;
    }
   
   export interface ClientRequest extends events.NodeEventEmitter, stream.WritableStream 
   {
       // Extended base methods
       write(str: string, encoding?: string, fd?: string): boolean;
       write(buffer: NodeBuffer): boolean;

       write(chunk: any, encoding?: string): void;
       end(data?: any, encoding?: string): void;
       abort(): void;
       setTimeout(timeout: number, callback?: Function): void;
       setNoDelay(noDelay?: Function): void;
       setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
   }
   
   export interface ClientResponse extends events.NodeEventEmitter, stream.ReadableStream 
   {
       statusCode: number;
       httpVersion: string;
       headers: any;
       trailers: any;
       setEncoding(encoding?: string): void;
       pause(): void;
       resume(): void;
   }
   export interface Agent { maxSockets: number; sockets: any; requests: any; }

   export var STATUS_CODES;
   export function  createServer(server:any ): Server;
   export function  createServer(requestListener?: (request: ServerRequest, response: ServerResponse) =>void ): Server;
   export function  createClient(port?: number, host?: string): any;
   export function  request     (options: any, callback?: Function): ClientRequest;
   export function  get         (options: any, callback?: Function): ClientRequest;
   export var globalAgent: Agent;
}

declare module cluster 
{
   export interface ClusterSettings 
   {
       exec: string;
       args: string[];
       silent: boolean;
   }
   
   export interface Worker 
   {
       id: string;
       process: any;
       suicide: boolean;
       send(message: any, sendHandle?: any): void;
       destroy(): void;
       disconnect(): void;
   }
   
   export var      settings: ClusterSettings;
   export var      isMaster: boolean;
   export var      isWorker: boolean;
   export function setupMaster(settings?: ClusterSettings): void;
   export function fork(env?: any): Worker;
   export function disconnect(callback?: Function): void;
   export var      workers : any;

   // Event emitter    
   export function addListener(event: string, listener: Function): void;
   export function on(event: string, listener: Function): any;
   export function once(event: string, listener: Function): void;
   export function removeListener(event: string, listener: Function): void;
   export function removeAllListener(event: string): void;
   export function setMaxListeners(n: number): void;
   export function listeners(event: string): { Function; }[];
   export function emit(event: string, arg1?: any, arg2?: any): void;
}

declare module zlib 
{
   export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

   export interface Gzip extends stream.ReadWriteStream { }
   export interface Gunzip extends stream.ReadWriteStream { }
   export interface Deflate extends stream.ReadWriteStream { }
   export interface Inflate extends stream.ReadWriteStream { }
   export interface DeflateRaw extends stream.ReadWriteStream { }
   export interface InflateRaw extends stream.ReadWriteStream { }
   export interface Unzip extends stream.ReadWriteStream { }

   export function createGzip(options: ZlibOptions): Gzip;
   export function createGunzip(options: ZlibOptions): Gunzip;
   export function createDeflate(options: ZlibOptions): Deflate;
   export function createInflate(options: ZlibOptions): Inflate;
   export function createDeflateRaw(options: ZlibOptions): DeflateRaw;
   export function createInflateRaw(options: ZlibOptions): InflateRaw;
   export function createUnzip(options: ZlibOptions): Unzip;

   export function deflate(buf: NodeBuffer, callback: (error: Error, result) =>void ): void;
   export function deflateRaw(buf: NodeBuffer, callback: (error: Error, result) =>void ): void;
   export function gzip(buf: NodeBuffer, callback: (error: Error, result) =>void ): void;
   export function gunzip(buf: NodeBuffer, callback: (error: Error, result) =>void ): void;
   export function inflate(buf: NodeBuffer, callback: (error: Error, result) =>void ): void;
   export function inflateRaw(buf: NodeBuffer, callback: (error: Error, result) =>void ): void;
   export function unzip(buf: NodeBuffer, callback: (error: Error, result) =>void ): void;

   // Constants
   export var Z_NO_FLUSH: number;
   export var Z_PARTIAL_FLUSH: number;
   export var Z_SYNC_FLUSH: number;
   export var Z_FULL_FLUSH: number;
   export var Z_FINISH: number;
   export var Z_BLOCK: number;
   export var Z_TREES: number;
   export var Z_OK: number;
   export var Z_STREAM_END: number;
   export var Z_NEED_DICT: number;
   export var Z_ERRNO: number;
   export var Z_STREAM_ERROR: number;
   export var Z_DATA_ERROR: number;
   export var Z_MEM_ERROR: number;
   export var Z_BUF_ERROR: number;
   export var Z_VERSION_ERROR: number;
   export var Z_NO_COMPRESSION: number;
   export var Z_BEST_SPEED: number;
   export var Z_BEST_COMPRESSION: number;
   export var Z_DEFAULT_COMPRESSION: number;
   export var Z_FILTERED: number;
   export var Z_HUFFMAN_ONLY: number;
   export var Z_RLE: number;
   export var Z_FIXED: number;
   export var Z_DEFAULT_STRATEGY: number;
   export var Z_BINARY: number;
   export var Z_TEXT: number;
   export var Z_ASCII: number;
   export var Z_UNKNOWN: number;
   export var Z_DEFLATED: number;
   export var Z_NULL: number;
}

declare module os 
{
   export function tmpDir(): string;
   export function hostname(): string;
   export function type(): string;
   export function platform(): string;
   export function arch(): string;
   export function release(): string;
   export function uptime(): number;
   export function loadavg(): number[];
   export function totalmem(): number;
   export function freemem(): number;
   export function cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
   export function networkInterfaces(): any;
   export var EOL: string;
}

declare module https 
{
   export interface ServerOptions 
   {
       pfx?: any;
       key?: any;
       passphrase?: string;
       cert?: any;
       ca?: any;
       crl?: any;
       ciphers?: string;
       honorCipherOrder?: boolean;
       requestCert?: boolean;
       rejectUnauthorized?: boolean;
       NPNProtocols?: any;
       SNICallback?: (servername: string) => any;
   }

   export interface RequestOptions 
   {
       host?: string;
       hostname?: string;
       port?: number;
       path?: string;
       method?: string;
       headers?: any;
       auth?: string;
       agent?: any;
       pfx?: any;
       key?: any;
       passphrase?: string;
       cert?: any;
       ca?: any;
       ciphers?: string;
       rejectUnauthorized?: boolean;
   }

   export interface NodeAgent 
   {
       maxSockets: number;
       sockets: any;
       requests: any;
   }
   export var Agent: 
   {
       new (options?: RequestOptions): NodeAgent;
   };
   export interface Server extends tls.Server { }
   export function  createServer(options: ServerOptions, requestListener?: Function): Server;
   export function  request(options: RequestOptions, callback?: (res: events.NodeEventEmitter) =>void ): http.ClientRequest;
   export function get(options: RequestOptions, callback?: (res: events.NodeEventEmitter) =>void ): http.ClientRequest;
   export var globalAgent: NodeAgent;
}

declare module punycode 
{
   export function decode(string: string): string;
   export function encode(string: string): string;
   export function toUnicode(domain: string): string;
   export function toASCII(domain: string): string;
   export var ucs2: ucs2;
   interface ucs2 
   {
       decode(string: string): string;
       encode(codePoints: number[]): string;
   }
   export var version;
}

declare module repl {


   export interface ReplOptions {
       prompt?: string;
       input?: stream.ReadableStream;
       output?: stream.WritableStream;
       terminal?: boolean;
       eval?: Function;
       useColors?: boolean;
       useGlobal?: boolean;
       ignoreUndefined?: boolean;
       writer?: Function;
   }
   export function start(options: ReplOptions): events.NodeEventEmitter;
}

declare module readline {


   export interface ReadLine extends events.NodeEventEmitter {
       setPrompt(prompt: string, length: number): void;
       prompt(preserveCursor?: boolean): void;
       question(query: string, callback: Function): void;
       pause(): void;
       resume(): void;
       close(): void;
       write(data: any, key?: any): void;
   }
   export interface ReadLineOptions {
       input: stream.ReadableStream;
       output: stream.WritableStream;
       completer?: Function;
       terminal?: boolean;
   }
   export function createInterface(options: ReadLineOptions): ReadLine;
}

declare module vm {
   export interface Context { }
   export interface Script {
       runInThisContext(): void;
       runInNewContext(sandbox?: Context): void;
   }
   export function runInThisContext(code: string, filename?: string): void;
   export function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
   export function runInContext(code: string, context: Context, filename?: string): void;
   export function createContext(initSandbox?: Context): Context;
   export function createScript(code: string, filename?: string): Script;
}

declare module child_process {


   export interface ChildProcess extends events.NodeEventEmitter {
       stdin: stream.WritableStream;
       stdout: stream.ReadableStream;
       stderr: stream.ReadableStream;
       pid: number;
       kill(signal?: string): void;
       send(message: any, sendHandle: any): void;
       disconnect(): void;
   }

   export function spawn(command: string, args?: string[], options?: {
       cwd?: string;
       stdio?: any;
       custom?: any;
       env?: any;
       detached?: boolean;
   }): ChildProcess;
   export function exec(command: string, options: {
       cwd?: string;
       stdio?: any;
       customFds?: any;
       env?: any;
       encoding?: string;
       timeout?: number;
       maxBuffer?: number;
       killSignal?: string;
   }, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) =>void ): ChildProcess;
   export function exec(command: string, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) =>void ): ChildProcess;
   export function execFile(file: string, args: string[], options: {
       cwd?: string;
       stdio?: any;
       customFds?: any;
       env?: any;
       encoding?: string;
       timeout?: number;
       maxBuffer?: string;
       killSignal?: string;
   }, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) =>void ): ChildProcess;
   export function fork(modulePath: string, args?: string[], options?: {
       cwd?: string;
       env?: any;
       encoding?: string;
   }): ChildProcess;
}

declare module url {
   export interface Url {
       href?: string;
       protocol?: string;
       auth?: string;
       hostname?: string;
       port?: string;
       host?: string;
       pathname?: string;
       search?: string;
       query?: string;
       slashes?: boolean;
       hash?: string;
   }

   export function parse(urlStr: string, parseQueryString? , slashesDenoteHost? ): Url;
   export function format(url: Url): string;
   export function resolve(from: string, to: string): string;
}

declare module dns {
   export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) =>void ): string;
   export function lookup(domain: string, callback: (err: Error, address: string, family: number) =>void ): string;
   export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolve(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolve4(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolve6(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
   export function reverse(ip: string, callback: (err: Error, domains: string[]) =>void ): string[];
}

declare module net 
{
   export interface NodeSocket extends stream.ReadWriteStream 
   {
       // Extended base methods
       write(str: string, encoding?: string, fd?: string): boolean;
       write(buffer: NodeBuffer): boolean;

       connect(port: number, host?: string, connectionListener?: Function): void;
       connect(path: string, connectionListener?: Function): void;
       bufferSize: number;
       setEncoding(encoding?: string): void;
       write(data: any, encoding?: string, callback?: Function): void;
       end(data?: any, encoding?: string): void;
       destroy(): void;
       pause(): void;
       resume(): void;
       setTimeout(timeout: number, callback?: Function); void;
       setNoDelay(noDelay?: boolean): void;
       setKeepAlive(enable?: boolean, initialDelay?: number): void;
       address(): { port: number; family: string; address: string; };
       remoteAddress: string;
       remotePort: number;
       bytesRead: number;
       bytesWritten: number;
   }

   export var Socket: 
   {
       new (options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }): NodeSocket;
   };

   export interface Server extends NodeSocket 
   {
       listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
       listen(path: string, listeningListener?: Function): void;
       listen(handle: any, listeningListener?: Function): void;
       close(callback?: Function): void;
       address(): { port: number; family: string; address: string; };
       maxConnections: number;
       connections: number;
   }
   export function createServer(connectionListener?: (socket: NodeSocket) =>void ): Server;
   export function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: NodeSocket) =>void ): Server;
   export function connect(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): NodeSocket;
   export function connect(port: number, host?: string, connectionListener?: Function): NodeSocket;
   export function connect(path: string, connectionListener?: Function): NodeSocket;
   export function createConnection(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): void;
   export function createConnection(port: number, host?: string, connectionListener?: Function): void;
   export function createConnection(path: string, connectionListener?: Function): void;
   export function isIP(input: string): number;
   export function isIPv4(input: string): boolean;
   export function isIPv6(input: string): boolean;
}

declare module dgram 
{
   export function createSocket(type: string, callback?: Function): Socket;

   interface Socket extends events.NodeEventEmitter {
       send(buf: NodeBuffer, offset: number, length: number, port: number, address: string, callback?: Function): void;
       bind(port: number, address?: string): void;
       close(): void;
       address: { address: string; family: string; port: number; };
       setBroadcast(flag: boolean): void;
       setMulticastTTL(ttl: number): void;
       setMulticastLoopback(flag: boolean): void;
       addMembership(multicastAddress: string, multicastInterface?: string): void;
       dropMembership(multicastAddress: string, multicastInterface?: string): void;
   }
}

declare module fs {

   interface Stats 
   {
       isFile(): boolean;
       isDirectory(): boolean;
       isBlockDevice(): boolean;
       isCharacterDevice(): boolean;
       isSymbolicLink(): boolean;
       isFIFO(): boolean;
       isSocket(): boolean;
       dev: number;
       ino: number;
       mode: number;
       nlink: number;
       uid: number;
       gid: number;
       rdev: number;
       size: number;
       blksize: number;
       blocks: number;
       atime: Date;
       mtime: Date;
       ctime: Date;
   }

   interface FSWatcher 
   {
       close(): void;
   }

   export interface ReadStream  extends stream.ReadableStream  { }
   export interface WriteStream extends stream.WritableStream  { }
   
   export function rename(oldPath: string, newPath: string, callback?: Function): void;
   export function renameSync(oldPath: string, newPath: string): void;
   export function truncate(fd: number, len: number, callback?: Function): void;
   export function truncateSync(fd: number, len: number): void;
   export function chown(path: string, uid: number, gid: number, callback?: Function): void;
   export function chownSync(path: string, uid: number, gid: number): void;
   export function fchown(fd: number, uid: number, gid: number, callback?: Function): void;
   export function fchownSync(fd: number, uid: number, gid: number): void;
   export function lchown(path: string, uid: number, gid: number, callback?: Function): void;
   export function lchownSync(path: string, uid: number, gid: number): void;
   export function chmod(path: string, mode: number, callback?: Function): void;
   export function chmod(path: string, mode: string, callback?: Function): void;
   export function chmodSync(path: string, mode: number): void;
   export function chmodSync(path: string, mode: string): void;
   export function fchmod(fd: number, mode: number, callback?: Function): void;
   export function fchmod(fd: number, mode: string, callback?: Function): void;
   export function fchmodSync(fd: number, mode: number): void;
   export function fchmodSync(fd: number, mode: string): void;
   export function lchmod(path: string, mode: string, callback?: Function): void;
   export function lchmod(path: string, mode: number, callback?: Function): void;
   export function lchmodSync(path: string, mode: number): void;
   export function lchmodSync(path: string, mode: string): void;
   export function stat(path: string, callback?: (err: Error, stats: Stats) =>any): Stats;
   export function lstat(path: string, callback?: (err: Error, stats: Stats) =>any): Stats;
   export function fstat(fd: number, callback?: (err: Error, stats: Stats) =>any): Stats;
   export function statSync(path: string): Stats;
   export function lstatSync(path: string): Stats;
   export function fstatSync(fd: number): Stats;
   export function link(srcpath: string, dstpath: string, callback?: Function): void;
   export function linkSync(srcpath: string, dstpath: string): void;
   export function symlink(srcpath: string, dstpath: string, type?: string, callback?: Function): void;
   export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
   export function readlink(path: string, callback?: (err: Error, linkString: string) =>any): void;
   export function realpath(path: string, callback?: (err: Error, resolvedPath: string) =>any): void;
   export function realpath(path: string, cache: string, callback: (err: Error, resolvedPath: string) =>any): void;
   export function realpathSync(path: string, cache?: string): string;
   export function unlink(path: string, callback?: Function): void;
   export function unlinkSync(path: string): void;
   export function rmdir(path: string, callback?: Function): void;
   export function rmdirSync(path: string): void;
   export function mkdir(path: string, mode?: number, callback?: Function): void;
   export function mkdir(path: string, mode?: string, callback?: Function): void;
   export function mkdirSync(path: string, mode?: number): void;
   export function mkdirSync(path: string, mode?: string): void;
   export function readdir(path: string, callback?: (err: Error, files: string[]) => void): void;
   export function readdirSync(path: string): string[];
   export function close(fd: number, callback?: Function): void;
   export function closeSync(fd: number): void;
   export function open(path: string, flags: string, mode?: string, callback?: (err: Error, fd: number) =>any): void;
   export function openSync(path: string, flags: string, mode?: string): number;
   export function utimes(path: string, atime: number, mtime: number, callback?: Function): void;
   export function utimesSync(path: string, atime: number, mtime: number): void;
   export function futimes(fd: number, atime: number, mtime: number, callback?: Function): void;
   export function futimesSync(fd: number, atime: number, mtime: number): void;
   export function fsync(fd: number, callback?: Function): void;
   export function fsyncSync(fd: number): void;
   export function write(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, written: number, buffer: NodeBuffer) =>any): void;
   export function writeSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
   export function read(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, bytesRead: number, buffer: NodeBuffer) => void): void;
   export function readSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
   export function readFile(filename: string, encoding: string, callback: (err: Error, data: string) => void ): void;
   export function readFile(filename: string, callback: (err: Error, data: NodeBuffer) => void ): void;
   export function readFileSync(filename: string): NodeBuffer;
   export function readFileSync(filename: string, encoding: string): string;
   export function writeFile(filename: string, data: any, encoding?: string, callback?: Function): void;
   export function writeFileSync(filename: string, data: any, encoding?: string): void;
   export function appendFile(filename: string, data: any, encoding?: string, callback?: Function): void;
   export function appendFileSync(filename: string, data: any, encoding?: string): void;
   export function watchFile(filename: string, listener: { curr: Stats; prev: Stats; }): void;
   export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: { curr: Stats; prev: Stats; }): void;
   export function unwatchFile(filename: string, listener?: Stats): void;
   export function watch(filename: string, options?: { persistent?: boolean; }, listener?: (event: string, filename: string) =>any): FSWatcher;
   export function exists(path: string, callback?: (exists: boolean) =>void ): void;
   export function existsSync(path: string): boolean;
   export function createReadStream(path: string, options?: 
   {
       flags?: string;
       encoding?: string;
       fd?: string;
       mode?: number;
       bufferSize?: number;
   }): ReadStream;
   export function createWriteStream(path: string, options?: {
       flags?: string;
       encoding?: string;
       string?: string;
   }): WriteStream;
}

declare module path {
   export function normalize(p: string): string;
   export function join(...paths: any[]): string;
   export function resolve(from: string, to: string): string;
   export function resolve(from: string, from2: string, to: string): string;
   export function resolve(from: string, from2: string, from3: string, to: string): string;
   export function resolve(from: string, from2: string, from3: string, from4: string, to: string): string;
   export function resolve(from: string, from2: string, from3: string, from4: string, from5: string, to: string): string;
   export function relative(from: string, to: string): string;
   export function dirname(p: string): string;
   export function basename(p: string, ext?: string): string;
   export function extname(p: string): string;
   export var sep: string;
}

declare module string_decoder {
   export interface NodeStringDecoder {
       write(buffer: NodeBuffer): string;
       detectIncompleteChar(buffer: NodeBuffer): number;
   }
   export var StringDecoder: {
       new (encoding: string): NodeStringDecoder;
   };
}

declare module tls {


   var CLIENT_RENEG_LIMIT: number;
   var CLIENT_RENEG_WINDOW: number;

   export interface TlsOptions {
       pfx?: any;   //string or buffer
       key?: any;   //string or buffer
       passphrase?: string;
       cert?: any;
       ca?: any;    //string or buffer
       crl?: any;   //string or string array
       ciphers?: string;
       honorCipherOrder?: any;
       requestCert?: boolean;
       rejectUnauthorized?: boolean;
       NPNProtocols?: any;  //array or Buffer;
       SNICallback?: (servername: string) => any;
   }

   export interface ConnectionOptions {
       host?: string;
       port?: number;
       socket?: net.NodeSocket;
       pfx?: any;   //string | Buffer
       key?: any;   //string | Buffer
       passphrase?: string;
       cert?: any;  //string | Buffer
       ca?: any;    //Array of string | Buffer
       rejectUnauthorized?: boolean;
       NPNProtocols?: any;  //Array of string | Buffer
       servername?: string;
   }

   export interface Server extends net.Server 
   {
       listen  (port   : number, host?: string, backlog?: number, listeningListener?: Function): void;
       listen  (path   : string, listeningListener?: Function): void;
       listen  (handle : any,    listeningListener?: Function): void;
       listen  (port   : number, host?: string, callback?: Function): void;
       close(): void;
       address(): { port: number; family: string; address: string; };
       addContext (hostName: string, credentials: 
       {
           key  : string;
           cert : string;
           ca   : string;
       }): void;
       
       maxConnections : number;
       connections    : number;
   }

   export interface ClearTextStream extends stream.ReadWriteStream 
   {
       authorized: boolean;
       authorizationError: Error;
       getPeerCertificate(): any;
       getCipher: 
       {
           name    : string;
           version : string;
       };
       address:
       {
           port    : number;
           family  : string;
           address : string;
       };
       remoteAddress : string;
       remotePort    : number;
   }

   export interface SecurePair {
       encrypted: any;
       cleartext: any;
   }

   export function createServer(options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) =>void ): Server;
   export function connect(options: TlsOptions, secureConnectionListener?: () =>void ): ClearTextStream;
   export function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
   export function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
   export function createSecurePair(credentials?: crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
}

declare module crypto {
   export interface CredentialDetails {
       pfx: string;
       key: string;
       passphrase: string;
       cert: string;
       ca: any;    //string | string array
       crl: any;   //string | string array
       ciphers: string;
   }
   export interface Credentials { context?: any; }
   export function createCredentials(details: CredentialDetails): Credentials;
   export function createHash(algorithm: string): Hash;
   export function createHmac(algorithm: string, key: string): Hmac;
   interface Hash {
       update(data: any, input_encoding?: string): void;
       digest(encoding?: string): string;
   }
   interface Hmac {
       update(data: any): void;
       digest(encoding?: string): string;
   }
   export function createCipher(algorithm: string, password: any): Cipher;
   export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
   interface Cipher {
       update(data: any, input_encoding?: string, output_encoding?: string): string;
       final(output_encoding?: string): string;
       setAutoPadding(auto_padding: boolean): void;
       createDecipher(algorithm: string, password: any): Decipher;
       createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
   }
   interface Decipher {
       update(data: any, input_encoding?: string, output_encoding?: string): void;
       final(output_encoding?: string): string;
       setAutoPadding(auto_padding: boolean): void;
   }
   export function createSign(algorithm: string): Signer;
   interface Signer {
       update(data: any): void;
       sign(private_key: string, output_format: string): string;
   }
   export function createVerify(algorith: string): Verify;
   interface Verify 
    {
       update(data: any): void;
       verify(object: string, signature: string, signature_format?: string): boolean;
   }
   
   export function createDiffieHellman(prime_length: number): DiffieHellman;
   
   export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
   
   interface DiffieHellman
   {
       generateKeys    (encoding?: string): string;
       computeSecret   (other_public_key: string, input_encoding?: string, output_encoding?: string): string;
       getPrime        (encoding?: string): string;
       getGenerator    (encoding: string): string;
       getPublicKey    (encoding?: string): string;
       getPrivateKey   (encoding?: string): string;
       setPublicKey    (public_key: string, encoding?: string): void;
       setPrivateKey   (public_key: string, encoding?: string): void;
   }
   export function getDiffieHellman(group_name: string): DiffieHellman;
   export function pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: string) => any): void;
   export function randomBytes(size: number, callback?: (err: Error, buf: NodeBuffer) =>void );
}

declare module stream  {

   export interface WritableStream extends events.NodeEventEmitter {
       writable: boolean;
       write(str: string, encoding?: string, fd?: string): boolean;
       write(buffer: NodeBuffer): boolean;
       end(): void;
       end(str: string, enconding: string): void;
       end(buffer: NodeBuffer): void;
       destroy(): void;
       destroySoon(): void;
   }

   export interface ReadableStream extends events.NodeEventEmitter {
       readable: boolean;
       setEncoding(encoding: string): void;
       on         (type:string, callback:Function): void;
       //on         (type: 'readable', callback:Function): void;
       //on         (type: 'end',      callback:Function): void;
       //on         (type: 'data',     callback:Function): void;
       //on         (type: 'error',    callback:Function): void;
       //on         (type: 'close',    callback:Function): void;
       //once       (type: 'readable', callback:Function): void;
       //once       (type: 'end',      callback:Function): void;
       //once       (type: 'data',     callback:Function): void;
       //once       (type: 'error',    callback:Function): void;
       //once       (type: 'close',    callback:Function): void;              
       push       (chunk:any, encoding?:string): void;
       unshift    (chunk:any): void;
       pause      (): void;
       resume     (): void;
       destroy    (): void;
       read       (size?:number): any; // Buffer | String | null
       pipe       (destination: WritableStream, options?: { end?: boolean; }): void;
       unpipe     (destination: WritableStream, options?: { end?: boolean; }): void;

   }

   export interface ReadWriteStream extends ReadableStream, WritableStream { }
}

declare module util 
{
   export function format   (format: any, ...param: any[]): string;
   export function debug    (string: string): void;
   export function error    (...param: any[]): void;
   export function puts     (...param: any[]): void;
   export function print    (...param: any[]): void;
   export function log      (string: string): void;
   export function inspect  (object: any, showHidden?: boolean, depth?: number, color?: boolean): void;
   export function isArray  (object: any): boolean;
   export function isRegExp (object: any): boolean;
   export function isDate   (object: any): boolean;
   export function isError  (object: any): boolean;
   export function inherits (constructor: any, superConstructor: any): void;
}

declare module assert 
{
   export function fail           (actual: any, expected: any, message: string, operator: string): void;
   export function assert         (value: any, message: string): void;
   export function ok             (value: any, message?: string): void;
   export function equal          (actual: any, expected: any, message?: string): void;
   export function notEqual       (actual: any, expected: any, message?: string): void;
   export function deepEqual      (actual: any, expected: any, message?: string): void;
   export function notDeepEqual   (acutal: any, expected: any, message?: string): void;
   export function strictEqual    (actual: any, expected: any, message?: string): void;
   export function notStrictEqual (actual: any, expected: any, message?: string): void;
   export function throws         (block: any, error?: any, messsage?: string): void;
   export function doesNotThrow   (block: any, error?: any, messsage?: string): void;
   export function ifError        (value: any): void;
}

declare module tty 
{
   export function isatty(fd: string): boolean;

   export interface ReadStream extends net.NodeSocket 
   {
       isRaw : boolean;
       setRawMode(mode: boolean): void;
   }
   export interface WriteStream extends net.NodeSocket 
   {
       columns : number;
       rows    : number;
   }
}

declare module domain 
{
   export interface Domain extends events.NodeEventEmitter { }
   export function  create     () : Domain;
   export function  run        (fn: Function) : void;
   export function  add        (emitter: events.NodeEventEmitter): void;
   export function  remove     (emitter: events.NodeEventEmitter): void;
   export function  bind       (cb: (er: Error, data: any) =>any): any;
   export function  intercept  (cb: (data: any) => any): any;
   export function  dispose    (): void;
}