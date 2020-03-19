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
- 制作的 icon 需要用线, 避免生成字体之后内容丢失.(执行 yarn watch 之后，发现字体图标内容丢失，尝试在 iconfont.cn 上传出现问题的图标，若依然有内容丢失，svg 文件有问题，若无，请检测压缩前的 svg 文件)
- SVG 文件优先采用背景透明的版本, 更加可靠.
- macos 用户，在执行 `yarn gen` 命令前，确保 svg 目录下没有 `.DS_Store` 文件，若有 `$ sudo rm -rf .DS_Store`

### 图标命名规范

- `*-filled` 表示实心的图标
- `*-outline` 表示图标周围有一个线框(一般是圆形)
- `*-embossed` 表示图标主体有黑色(一般是圆形)背景, 图案通过白色线条呈现
- 普通图标可以直接用名字

已经使用的图标, 命名尽量不随便修改.

### Steps

1. yarn
2. add svg file (in ./svg)
3. append icon names in `icons.coffee`
4. yarn optimize
5. yarn gen
6. yarn watch

如果网页上观察生成的图标线条存在问题, 用 https://www.iconfont.cn/ 验证是否 SVG 文件有问题, 联系设计解决.

### License

UNLICENSED
