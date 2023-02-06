---
title: 상수를 언제 대문자로 이름 짓는가?
category: javascript
date: 2023-02-07T01:29:38+09:00
---

실행하기 이전에 알 수 있고, 기억하기 어려운 값의 별칭으로 사용되는 상수를 대문자와 밑줄로 이름 짓는 것은 널리 알려진 관습입니다. 예를 들면 다음과 같습니다.

```js
const COLOR_WHITE = "#ffffff";
const COLOR_BLACK = "#000000";

let color = COLOR_WHITE;
```

상수를 대문자로 이름 지었을 때의 이점은 다음과 같습니다.

- `COLOR_WHITE` 는 `#ffffff` 보다 기억하기 쉽습니다.
- `COLOR_WHITE` 는 `#ffffff` 보다 오타를 낼 확률이 낮습니다.
- `COLOR_WHITE` 는 `#ffffff` 보다 의미를 갖기 때문에 가독성이 높습니다.

상수를 언제 대문자로 이름 짓고, 언제 정상적으로 이름 짓는지 명확히 해보겠습니다.

먼저 상수는 값이 변하지 않는 변수를 의미합니다. 그런데, `COLOR_WHITE` 와 같이 실행하기 이전에 알 수 있는 상수가 있고, 실행 중에 계산이 되어 알게 되는 상수가 있습니다.

실행 중에 계산이 되어 알게 되는 상수의 예시는 다음과 같습니다.

```js
const date = new Date();
```

`date` 의 값은 실행하기 이전에 알 수 없습니다. 이런 경우에 정상적으로 이름 짓습니다. 다시 말하면, 하드 코딩된 값의 별칭으로 사용되는 상수를 대문자로 이름 짓습니다.

### Resources

- https://javascript.info/variables#uppercase-constants
