## Jimo Icon

### Usage

```bash
yarn add @jimengio/jimo-icons
```

```tsx
import JimoIcon, { EJimoIcon } from "../src/jimo-icon";

<JimoIcon name={EJimoIcon.tick} />;
```

### 注意事项

- 新增 icon 用 [svgo](https://github.com/svg/svgo) 工具优化体积.
- 制作的 icon 需要用线, 避免生成字体之后内容丢失.
- SVG 文件优先采用背景透明的版本, 更加可靠.

### License

UNLICENSED
