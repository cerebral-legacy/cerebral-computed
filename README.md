# [DEPRECATED] cerebral-computed
A package allowing computed state dependencies in views

```js
import computed from 'cerebral-computed';

export default computed({
  foo: 'some.state.path',
  bar: 'some.other.path'
}, state => {
  return state.foo + state.bar
})
```

This computed can be used in Cerebral view layers:

```js
import myComputed from './myComputed.js'
import {Decorator as Cerebral} from 'cerebral-view-react'

@Cerebral({
  someProp: myComputed
})
```
