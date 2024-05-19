# nest-gateway

## 配置不生成测试文件
* 在`nest-cli.json`配置：

```ts
  "generateOptions": {
    "spec": false
  }
```

* 使用 `CLI` 创建 `Controller` 或者 `Service` 类型文件的时候，将不会继续生成测试用例文件