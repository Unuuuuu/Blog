---
title: robots.txt는 무엇인가?
category: web
date: 2023-02-08T17:21:15+09:00
---

robots.txt 파일은 사이트에서 크롤러가 접근할 수 있는 URL을 검색 엔진 크롤러에게 알려줍니다. 요청으로 사이트가 과부하되는 것을 막기 위해 주로 사용됩니다. 이 파일은 웹 페이지가 구글에 표시되는 것을 막기 위해 사용되는 방법이 아닙니다. 구글에 표시되는 것을 막기 위해서는 [`noindex` 로 색인 생성을 막거나](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=en) 페이지를 비밀번호로 보호해야 합니다.

### robots.txt의 용도는 무엇인가?

robots.txt 파일은 주로 사이트의 크롤러 트래픽을 관리하는 데 사용됩니다. 그리고 일반적으로 구글에 파일이 표시되는 것을 막기 위해 사용됩니다.

robots.txt는 파일 타입에 따라 다른 영향을 미칩니다.

- 파일 타입이 웹 페이지인 경우

  robots.txt 파일을 웹 페이지(HTML, PDF, 혹은 [구글이 읽을 수 있는 미디어가 아닌 것들](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=en))를 위해 사용할 수 있습니다. 서버가 크롤러의 요청으로 과부하가 될 것으로 생각된다면, 크롤링 트래픽을 관리할 수 있습니다. 혹은 사이트에서 중요하지 않거나 비슷한 페이지에 대한 크롤링을 피할 수 있습니다.

  웹 페이지가 robots.txt에 의해 차단되었더라도 그 URL은 여전히 검색 결과에 나타날 수 있습니다. 하지만 그 검색 결과는 [설명을 가지지 않을 것입니다.](https://support.google.com/webmasters/answer/7489871) 그리고 이미지, 비디오, PDF 및 HTML이 아닌 파일이 제외될 것입니다. 페이지를 검색 결과에서 완전히 숨기고 싶다면, [다른 방법](https://developers.google.com/search/docs/crawling-indexing/remove-information?hl=en)을 사용해야 합니다.

- 파일 타입이 미디어 파일인 경우

  robots.txt 파일을 이미지, 비디오, 오디오 파일이 구글 검색 결과에 표시되는 것을 막기 위해 사용할 수 있습니다. 하지만 이것이 다른 페이지 또는 사용자가 사이트의 이미지, 비디오, 오디오 파일로 연결하는 것을 막지는 못합니다.

- 파일 타입이 리소스 파일인 경우

  robots.txt 파일을 중요하지 않은 이미지, 스크립트, 스타일 파일과 같은 리소스 파일을 차단하는 데 사용할 수 있습니다. 하지만 이 리소스 파일들의 부재가 구글의 크롤러가 페이지를 이해하기 어렵게 만든다면, 그것들을 차단하면 안 됩니다. 이런 경우에 차단하게 되면, 구글은 리소스에 의존하는 그 페이지를 제대로 분석할 수 없게 됩니다.

### Resources

- https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=en
