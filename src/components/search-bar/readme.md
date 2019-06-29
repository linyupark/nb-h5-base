# nb-search-bar



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description   | Type     | Default     |
| ------------- | -------------- | ------------- | -------- | ----------- |
| `cancelText`  | `cancel-text`  | 取消操作文案        | `string` | `'取消'`      |
| `maxLength`   | `max-length`   | 输入框最大长度限制     | `number` | `15`        |
| `placeholder` | `placeholder`  | 搜索框内的提示文案     | `string` | `'输入搜索关键字'` |
| `searchDelay` | `search-delay` | 搜索触发延迟        | `number` | `500`       |
| `value`       | `value`        | 输入框内的值（可变化反射） | `string` | `''`        |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `cancel`      | 当发生取消操作时    | `CustomEvent<any>` |
| `focusChange` | 当输入框发生变动时   | `CustomEvent<any>` |
| `search`      | 当输入框发生变动时   | `CustomEvent<any>` |
| `submit`      | 当发生提交操作时    | `CustomEvent<any>` |


## Methods

### `cancelSearch() => Promise<boolean>`

取消搜索操作

#### Returns

Type: `Promise<boolean>`



### `removeValue() => Promise<boolean>`

清除搜索框内容

#### Returns

Type: `Promise<boolean>`



### `submitForm(ev: any) => Promise<this>`

提交搜索框内容

#### Returns

Type: `Promise<this>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
