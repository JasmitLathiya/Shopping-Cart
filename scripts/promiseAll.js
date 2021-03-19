var promises = [];

var p1 = Promise.resolve(3);
var p2 = Promise.resolve(1337);
var p3 = new Promise((resolve, reject) => {
    reject("foo");
});

promises.push(p1,p2,p3);

function promiseAll(promiseArray)
{
    let returnValue = [];
    let resolvedPromiseCount = 0;

    return new Promise((resolve,reject)=>
        {
            promiseArray.forEach(promise=>
            {
                promise
                .then(value => {
                    returnValue.push(value);
                    resolvedPromiseCount++;
                    if(resolvedPromiseCount===promiseArray.length)
                    {
                        resolve(returnValue);
                    }
                })
                .catch(err => reject(err));
            });
        })
}


promiseAll(promises)
.then(data => console.log(data))
.catch(err => console.error("Error : "+err));

// promiseAll(promises)
// .then(data=>console.log(data)
// ,
// err => console.log("Error : "+ err)
// );
