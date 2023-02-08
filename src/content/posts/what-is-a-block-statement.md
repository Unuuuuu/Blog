---
title: 블록문(block statement)은 무엇인가?
category: javascript
date: 2023-02-07T18:33:08+09:00
---

블록문(block statement)은 한 쌍의 중괄호로 구성되며 0개 이상의 문(statement)과 선언(declaration)을 포함합니다.

예를 들면 다음과 같습니다.

```js
{
  const name = "Unuuuuu";
  console.log(name);
}
```

이것은 자바스크립트가 하나의 문만을 기대하는 곳에서 다수의 문을 사용할 수 있게 해줍니다. 자바스크립트에서 다수의 문을 블록으로 감싸는 것은 흔히 사용되는 방식입니다. 특히, `if...else` 나 `for` 문과 같이 흐름을 제어하는 문과 함께 사용됩니다.

이를 블록 스코프를 가지는 `let`, `const`, `class` 키워드와 같이 사용하면, 임시 변수가 전역 네임스페이스를 오염시키는 것을 방지할 수 있습니다.

### 엄격하지 않은 모드(non-strict mode)에서 var와 함수 선언(function declaration)이 가지는 블록 스코프 규칙

엄격하지 않은 모드(non-strict mode)에서 `var` 키워드로 선언된 변수나 함수 선언에 의해 만들어진 함수는 블록 스코프를 가지지 않습니다. 블록 내에서 도입된 변수는 이 변수를 포함하는 함수나 스크립트로 범위가 지정되며, 설정 효과는 블록 자체를 넘어 지속됩니다. 예를 들면 다음과 같습니다.

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

블록 안에서의 `var x = 2` 변수 선언문은 블록 이전의 `var x = 1` 변수 선언문과 같은 스코프 안에 있기 때문에 콘솔에는 2가 출력됩니다.

엄격하지 않은 모드에서 블록 안에 선언된 함수는 블록 스코프를 가지지 않습니다.

```js
{
  foo(); // "foo"
  function foo() {
    console.log("foo");
  }
}

foo(); // "foo"
```

### 엄격 모드(strict mode)에서 let, const, class와 함수 선언(function declaration)이 가지는 블록 스코프 규칙

대조적으로, `let`, `const`, `class` 키워드로 선언된 식별자는 블록 스코프를 가집니다. 예를 들면 다음과 같습니다.

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

블록 안에서의 `let x = 2` 변수 선언문은 그것이 정의된 블록 안에서 스코프를 가집니다.

`const` 키워드로 선언된 변수도 마찬가지입니다.

```js
const x = 1;
{
  const x = 2; // SyntaxError가 발생하지 않습니다.
}
console.log(x); // 1;
```

주목할 것은 `const x = 2` 변수 선언문에서 `SyntaxError: Identifier 'x' has already been declared` 와 같은 에러가 발생하지 않는다는 점입니다. 이는 `const` 키워드로 변수를 블록 안에서 고유하게 선언할 수 있기 때문입니다.

엄격 모드에서 블록 안에 선언된 함수는 그것이 선언된 블록에 대한 스코프를 가집니다.

```js
"use strict";

{
  foo(); // "foo"
  function foo() {
    console.log("foo");
  }
}

foo(); // ReferenceError: foo is not defined
```

### 예시

#### for문의 body에서 블록문 사용하기

for문의 body에서 단일문을 사용할 수 있습니다.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

body에서 하나 이상의 문을 사용하고 싶다면, 하나의 블록문 안에 그것들을 묶을 수 있습니다.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

#### 데이터를 캡슐화하기 위해 블록문 사용하기

`let` 과 `const` 키워드로 선언된 변수는 그 변수를 포함하는 블록에 대한 스코프를 가집니다. 이런 특성을 이용하면 함수로 감싸지 않더라도 글로벌 스코프로부터 데이터를 숨길 수 있습니다.

```js
let sector;
{
  // angle과 radius는 이 블록에 대한 스코프를 가지기 때문에,
  // 블록 바깥에서는 접근할 수 없습니다.
  const angle = Math.PI / 3;
  const radius = 10;
  sector = {
    radius,
    angle,
    area: (angle / 2) * radius ** 2,
    perimeter: 2 * radius + angle * radius,
  };
}
console.log(sector);
// {
//   radius: 10,
//   angle: 1.0471975511965976,
//   area: 52.35987755982988,
//   perimeter: 30.471975511965976
// }
console.log(typeof radius); // "undefined"
```

### Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
