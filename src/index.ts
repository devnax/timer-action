const timers: any = {};
const action = (key: string, callback: Function, miliseconds = 400) => {
  if(timers[key]){
    clearTimeout(timers[key])
  }
  timers[key] = setTimeout(callback, miliseconds)
}