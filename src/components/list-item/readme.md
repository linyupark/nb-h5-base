# nb-list-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                          | Default     |
| ----------- | ------------ | ----------- | ----------------------------- | ----------- |
| `border`    | `border`     | 下边框, 0则不显示  | `number`                      | `1`         |
| `color`     | `color`      | 线条颜色        | `string`                      | `'#f5f5f5'` |
| `height`    | `height`     | 设置单元高度      | `number`                      | `88`        |
| `short`     | `short`      | 短线条方向       | `"both" \| "left" \| "right"` | `undefined` |
| `sideSpace` | `side-space` | 设置横线左右间距    | `number`                      | `30`        |
| `slide`     | `slide`      | 是否启用横滑操作开关  | `boolean`                     | `false`     |


## Events

| Event                | Description                                   | Type               |
| -------------------- | --------------------------------------------- | ------------------ |
| `slideClicked`       | 当滑动块触发点击返回 { detail: { item: 滑动块DOM } }       | `CustomEvent<any>` |
| `slideStatusChanged` | 划出后发出信息 { detail: { status: 'in'  \| 'out' }} | `CustomEvent<any>` |


## Methods

### `slideOut() => Promise<boolean>`

可手动回复滑动状态

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
