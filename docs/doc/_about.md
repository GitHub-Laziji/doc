
## 测试
```java
public class Main {

    public static void main(String[] args) throws Exception {
        String text = 
                "{\n" +
                "  \"transformRequest\":\n" +
                "  {},\n" +
                "  \"transformResponse\":\n" +
                "  {},\n" +
                "  \"timeout\": 30000,\n" +
                "  \"xsrfHeaderName\": [\"X-XSRF-TOKEN\",\"X-XSRF-TOKEN2\",\"X-XSRF-TOKEN3\"],\n" +
                "  \"maxContentLength\": -1,\n" +
                "  \"headers\":\n" +
                "  {\n" +
                "      \"Accept\": \"application/json, text/plain, */*\",\n" +
                "      \"Content-Type\": \"application/json;charset=UTF-8\"\n" +
                "  },\n" +
                "  \"data\": \"{\\\"page\\\":1,\\\"limit\\\":10}\"\n" +
                "}";

        System.out.println(JSONUtils.formatText(text));
        System.out.println("===================");
        System.out.println(JSON.toJSONString(JSONUtils.parseText(text), true));
    }
}
```
![a](./img/switch3.svg)