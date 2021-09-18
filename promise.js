// Tell the browser that this function is asynchronous
async function myFunc(n) {
  // Await for the promise to resolve
  for (let i = 0; i < n; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        // Resolve the promise
        resolve(console.log('hello ' + (i + 1)));
      }, 3000);
    });
  }

  console.log('all done');
}

// Call the function
myFunc(100);
