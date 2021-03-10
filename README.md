# liner-highlight-api-server

### DB 모델링
1. Entity 
   - User,
   - ColorTheme, 
   - PageInfo, 
   - HighlightInfo
2. Association
   - User는 여러가지 HighlightInfo를 가질 수 있다.(1:N)
   - User는 여러가지 PageInfo를 가질 수 있다.(1:N)
   - PageInfo는 한가지 HighlightInfo를 갖는다.(1:1)
   - HighlightInfo는 한가지 ColorTheme을 갖는다.(1:1)
