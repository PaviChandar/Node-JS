const last_task = () => console.log('last task');
const bye = () => console.log('bye');
const hello = () => console.log('hello');
const start = () => {
  console.log('start');
  setImmediate(last_task);
  new Promise((resolve, reject) => {
    resolve('hi');
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(hello);
  });
  process.nextTick(bye);
};
start();

