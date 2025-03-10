# canvas-select-plus

核心架构请查阅 canvas-select 组件，一个用于图片标注的 javascript 库，基于 canvas，简单轻量，支持矩形、多边形、点、折线、圆形标注、网格标注。

[![NPM version](https://img.shields.io/npm/v/canvas-select-plus.svg?style=flat)](https://npmjs.org/package/canvas-select-plus)

![图例](https://github.com/DongMenKant/canvas-select-plus/blob/main/index.png)

## 简介

- 新增功能如下：

- 支持复制矩形、圆形、点。

- 支持隐藏和显示选中的图形。

- 支持一键清空全部图形。

- 支持撤销和重做操作。

- 支持根据鼠标位置切换鼠标样式功能。

- 支持刷子和橡皮擦功能。

- 支持保存图片功能。

- 支持钢笔工具。

- 支持绘制 Base64 格式的 Mask 图。

- 支持 Mask 转 Polygon，以及编辑 Polygon 边界点。

- 支持分割一切和智能标注功能（需后端接口支持）。

- 支持 canvas 自适应和 resize 到特定尺寸。

## 使用

- 先选中一个图形（暂时仅支持矩形、圆形和点），按 ctrl+v ,已鼠标位置为顶点复制图形，保证复制后的图形不会超出背景图片。

- 选中图形，单个删除，无选中时，默认全部删除。

- 选中图形，点击隐藏可以隐藏选中图形，点击显示，逐个显示被隐藏的图形。

- 点击撤销，返回到上一步操作前的状态（目前不支持撤销隐藏、显示、专注模式等模式变换）。

- 点击重做，重做上一次被撤销的操作。

- 鼠标放到图像内样式显示为 move，点击矩形，鼠标放到边界点上显示不同的样式，点击其它图像，鼠标放到边界点上显示为 pointer。

## 已优化

- 使用离屏 canvas 绘制静态背景图片，避免频繁绘制。

- 避免浮点数运算，使用 Math.round()或 Math.floor()进行取整。

- 优化撤销和重做列表，设置最大长度，减轻存储压力。

## 待优化

- 避免全 canvas 重绘，采用局部更新。

- 分割一切和智能标注的后端接口可参考：https://github.com/lujiazho/SegDrawer

支持 UMD 模块规范

```bash
npm install canvas-select-plus --save
```
