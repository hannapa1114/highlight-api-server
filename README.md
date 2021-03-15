# liner-highlight-api-server

### DB 모델링
1. Entity 
   - User,
   - Page, 
   - HighlightInfo
2. Association
   - User는 여러가지 Page를 가질 수 있다.(1:N)
   - PageInfo는 한가지 HighlightInfo를 갖는다.(1:1)

