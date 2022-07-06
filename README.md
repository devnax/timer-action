
> this is a very simple and tiny library. this can help you when you have multiple actions but you want to execute once then you can get benefit from this library.
> like you have a search box, you add a onchange event in the input element so when the input change, the event fired every time, and your action also fired. but you want to call your action after stop writing. then you can use it.


## Usages
```js
import timerAction from 'timer-action'

timerAction(key, callback, time)

```
### Arguments
> key: `string` - unique key 
> > callback: `Function` - action callback 
> > time: `number` set the duration in milliseconds