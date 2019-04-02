## Jimo Icon

### Usage

![](https://img.shields.io/npm/v/@jimengio/jimo-icons.svg?style=flat-square)

```bash
yarn add @jimengio/jimo-icons
```

```tsx
import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";

<JimoIcon name={EJimoIcon.tick} />;
```

### Develop

```bash
yarn
yarn gen # to generate CSS files
yarn watch # launcher page server
```

### 注意事项

- 新增 icon 用 [svgo](https://github.com/svg/svgo) 工具优化体积.
- 制作的 icon 需要用线, 避免生成字体之后内容丢失.
- SVG 文件优先采用背景透明的版本, 更加可靠.

### Step

1. yarn
2. svgo svgName.svg
3. add svg file (in ./svg)
4. yarn gen
5. edit EJimoIcon (./src/jimo-icon.tsx)
6. yarn watch

### License

UNLICENSED
