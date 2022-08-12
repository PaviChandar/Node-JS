let done = true;

const taskDone = new Promise((resolve,reject) => {
        if(done) {
            const workDone = "Task completed!";
            resolve(workDone)
        } else {
            const workUndone = "Task pending";
            reject(workUndone)
        }
});

const completedTask = () => {
        taskDone
        .then(ok => {
            console.log(ok)
        })
        .catch(error => {
            console.log(error)
        })
            
}

completedTask();

