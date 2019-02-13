---
title: Introducing This Blog
date: 2019-02-13 20:44:03
category: introduce
---

블로그를 만드는 과정에서 느낀 점을 적어보았다.

## 서비스형 블로그 vs 설치형 블로그

얼마 전 블로그를 만들어야겠다고 생각했을 때, 가장 중요하게 생각했던 것은 얼마나 포터블하냐는 것이었다. 언제든지 올린 데이터 모두를 편리한 포맷으로 내려받을 수 있도록 특정 플랫폼에 얽매이고 싶지 않았고 가능하다면 마크다운을 사용하고 싶었다.

예전에 싸이월드가 망하면서 즐거웠던 시절의 사진을 몽창 잃어버린 기억이 있기 때문에 퍼블릭 export API가 잘 만들어져 있는 서비스가 아니면 사용하고 싶지 않았고 국내 서비스 중 스팀잇이나 브런치 등을 들어본 적은 있지만, export 환경이 잘 되어있는지는 왠지 알아보고 싶지도 않았다. :confounded:

미디움을 비롯한 해외 서비스형 블로그 플랫폼들도 비슷한 이유로 호감이 가지 않았으며, 결국 셀프호스팅 쪽으로 마음이 기울기 시작했다.

## 서비스형: Notion vs Coda

설치형으로 마음이 기울기 시작하는 와중에 최근까지도 후보에 놓고 고민했던 것이 [Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.](https://www.notion.so/)이다.

요새 많은 스타트업에서 사용하고 있고 내부에서만 사용하는 것이 아니라 공개적인 채용 공고 같은 것도 Notion으로 작성된 문서가 종종 보인다. 회사에서 (회삿돈으로) 사용하기에는 아주 좋은 제품이지만 곧 백수가 될 예정이기 때문에 이전, 이후에 나올 모든 조건보다 최상위에 속하는 제약조건인 *유료 (개인 한 달 4딸라)* 라는 것이 걸렸다. 사용해보니 무료 quota 1000블록으로는 뭘 할 수가 없는 수준이었다.

구글에서 `notion vs`를 치면 자동완성으로 제시되는 [Coda. A doc as powerful as an app.](https://coda.io/welcome) 를 살펴보았다. 일단 마크다운이 아니었고 현재는 외부 공개용 문서를 작성하는 용도는 아니었다. 또한 코드 블록 하이라이팅이 지원되지 않는 상태였다. 탈락!

## 설치형: Github Pages + GatsbyJS vs Netlify + GatsbyJS

정적 사이트 무료 호스팅으로는 이 두 가지 선택지가 눈에 들어왔다. 구글 클라우드는 애초에 고려대상이 아니었는데 그 이유는 내가 잘 쓰고 있던 [Inbox 서비스를 종료한다는 소식](https://www.blog.google/products/gmail/inbox-signing-find-your-favorite-features-new-gmail/)이 들려와 매우 기분이 상해있었기 때문이다.

Github Pages는 [Jekyll • Simple, blog-aware, static sites \| Transform your plain text into static websites and blogs](https://jekyllrb.com/) 기반일 때부터 간단한 외주 의뢰에도 사용할 정도로 친숙하지만, 예전에 어떤 Gem을 사용하느냐에 따라 빌드가 잘 되지 않았던 기억과 Ruby에 그리 친숙하지 않다는 점 때문에 계속 Jekyll을 사용하고 싶지는 않았다.

[Netlify: All-in-one platform for automating modern web projects.](https://www.netlify.com/) 는 최근 몇 번 사용해보고 반한 정도로 좋은 서비스이기는 하나 [GitHub - netlify/netlify-cms: A CMS for Static Site Generators](https://github.com/netlify/netlify-cms)의 속도가 너무 느렸고 커스터마이징이 힘들고 손이 많이 갔다. Netlify의 CMS를 사용하지 않고 커스텀 도메인을 사용 할 예정도 없다고 가정하면 결국 Github에 소스를 올리는 것은 필수이니 신생 Netlify의 캘리포니아 근처의 인스턴스에서 호스팅하느니 글로~발한 마이크로소프트 소속 Github의 인스턴스를 사용하는 것이 낫다고 생각되어 Github Pages에 호스팅하고 주어지는 기본 도메인을 사용하는 것으로 결론 내렸다.

정적 사이트 프레임워크는 [GatsbyJS](https://www.gatsbyjs.org/)로 큰 고민 없이 정했는데 React + TypeScript(Optional) + GraphQL 이면 친해 두는 것이 여러모로 좋다고 판단되었기 때문이다. :lying_face:

## 그러면 GatsbyJS의 템플릿은 어떤 것으로...?

이러한 고민의 시간이 약 2주간에 걸쳐 계속되었고 결국 블로그로 사용할 스택이 정리되었다. 짬짬이 살펴본 것이기는 하지만 하나하나 고르는 데에 꽤 많은 시간을 사용했다. 물론 중간에 구정이 걸친 것도 한몫했지만. 이제 템플릿만 정하면 되는데 이게 또 주화입마에 빠지는 게 아닌가 할 정도로 여러 생각이 머리를 어지럽혔다.

맨땅에서 시작하려다 너무 귀찮아서 기본 starter들을 살펴보다가 [gaearon (Dan Abramov) · GitHub](https://github.com/gaearon) 형님의 [GitHub - gaearon/overreacted.io: Personal blog by Dan Abramov.](https://github.com/gaearon/overreacted.io) 템플릿을 보게 되어 거의 이쪽으로 기우는 순간, 페이스북에서 [블로그를 만들며 고려한 것들 (JBEE.io) \| JBEE.io](https://jbee.io/etc/intro-new-blog/?fbclid=IwAR3qvrdZanRBjD9WjU6R1oUiWTyEfMXUuaQSzI7z-uWsN0JjQ8r10ekLCUA) 이런 글을 보게 되었다.

이 블로그를 작성하신 [JaeYeopHan (Jbee) · GitHub](https://github.com/JaeYeopHan) 님은 깃허브에서도 팔로우 한 분으로 완벽한 타이밍에 먼저 고민하신 내용과 그 고민의 결과물을 공유해주셔서 비로소 블로그를 구성하는 고민을 덜고 내용을 작성하기 시작할 수 있게 되었다.

다음 글은 [GitHub - JaeYeopHan/gatsby-starter-bee: 🐝Full Package \| Simple | Fresh UI | Blog Template :: Let's start to blogging with gatsby-starter-bee!](https://github.com/JaeYeopHan/gatsby-starter-bee) 레포지토리를 TypeScript로 변환하면서 공부한 것들을 적을 생각이며 React Hooks API, Functional & Class component에 대한 내용이 주가 될 것이다.
