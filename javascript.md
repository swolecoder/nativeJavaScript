##UnderStanding Javascript Closure:
⋅⋅⋅-A closure is a inner function which has access to outer function
⋅⋅⋅-Cosure has three concepts: It has access to its own ScopedCredential, it has access to outer function variables ⋅⋅⋅and it has access to global variables
⋅⋅⋅-The inner function not only have access to the outer function variables, but alos to the outer functions parameters

```javascript
function showName(firstName, lastName) {
  var nameIntro = 'Your name is ';

  // this inner function has access to the outer function's variables, including the parameter​
  function makeFullName() {
    return nameIntro + firstName + ' ' + lastName;
  }

  return makeFullName();
}
showName('Amy', 'Simmons');
```

##Callbacks
⋅⋅⋅-A callback is a function which is passed as an arguments to another function. It is invoked after some kind of ⋅⋅⋅event.

⋅⋅⋅- In other words, A callback is any function that is called by another function, which takes the first function as ⋅⋅⋅a parameter

```javascript
Example 1:
fileObject = open(file)
//now that we have WAITED for the file to open, we can write to it

fileObject.write("We are writing to the file.")
//now we can continue doing the other, totally unrelated things our program does
```

⋅⋅⋅In the above example, we wait for the file to open, before we write to it.
⋅⋅⋅This blocks the flow of execution, and our program cannot do any of the other things it might need to do
⋅⋅⋅This is where callbacks are useful:

```javascript
//we pass writeToFile (a callback function) to the open function
fileObject = open(file, writeToFile);

//execution continues flowing -- we don't wait for the file to be opened
//once the file is opened we write to it, but while we wait we can do other things
```

```javascript
//the callback function
function cb() {
  console.log('Welcome from Callback');
}

//the parent function
function increment(num, callBack) {
  for (var i = 0; i <= num; i++) {
    console.log(i);
  }
  return callBack();
}

//the callback function is passed to the increment function
increment(10, cb);
```

# Callbacks & Promises

⋅⋅⋅Normally code is synchronous - one statement executes and there is a guarantee that the next statement will execute ⋅⋅⋅immediately afterwards
⋅⋅⋅With asynchronous operations, you should assume that you have no idea when the operation will complete. You can't ⋅⋅⋅even assume that just because you send out one request first, and another request second, that they will return in ⋅⋅⋅that order
⋅⋅⋅Callbacks are the standard way of handling asynchrnous code in JavaScript, but promises are the best way to handle ⋅⋅⋅asynchronous code. This is because callbacks make error handling difficult, and lead to ugly nested code.

⋅⋅⋅Promises help you naturally handle errors, and write cleaner code by not having callback parameters
⋅⋅⋅A promise represents the result of an asynchronous operation. A promise is in one of three different states: ⋅⋅⋅pending, fulfilled or rejected
⋅⋅⋅Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again)
⋅⋅⋅We use new Promise to construct the promise, the constructor is called immediately with two arguments - one that ⋅⋅⋅fulfils the promise and the other that rejects the promise
⋅⋅⋅promise.done allows us to wait for the promise to be fulfilled or rejected before doing something with it

```javascript
var p = new Promise(function(resolve, reject) {
// Do an async task async task and then...

    if(/* good condition */) {
    	resolve('Success!');
    }
    else {
    	reject('Failure!');
    }

});

p.then(function() {
/_ do something with the result _/
}).catch(function() {
/_ error :( _/
})
```

...Credit: https://gist.github.com/amysimmons/3d228a9a57e30ec13ab1
