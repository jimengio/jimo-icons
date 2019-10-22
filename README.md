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
yarn optimize  # to batch compress svg files
yarn gen # to generate CSS files
yarn watch # launcher page server
```

### 注意事项

- 新增 icon 用 [svgo](https://github.com/svg/svgo) 工具优化体积.
- 制作的 icon 需要用线, 避免生成字体之后内容丢失.(执行yarn watch之后，发现字体图标内容丢失，尝试在iconfont.cn上传出现问题的图标，若依然有内容丢失，svg文件有问题，若无，请检测压缩前的svg文件)
- SVG 文件优先采用背景透明的版本, 更加可靠.
- macos用户，在执行yarn gen命令前，确保svg目录下没有.DS_Store文件，若有 $ sudo rm -rf .DS_Store

### Step

1. yarn
2. add svg file (in ./svg)
3. append icon names in `icons.coffee`
4. yarn optimize
5. yarn gen
6. yarn watch

### License

UNLICENSED
