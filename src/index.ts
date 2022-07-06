const timers: any = {};
export default (key: string, callback: Function, miliseconds = 400) => {
  if(timers[key]){
    clearTimeout(timers[key])
  }
  timers[key] = setTimeout(callback, miliseconds)
}