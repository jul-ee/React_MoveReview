import ReviewList from "./ReviewList";
import items from '../mock.json';
import { useState } from "react";

function App () {
  // order State 생성 - 정렬 기준을 선택할 수 있도록
  const [order, setOrder] = useState('createdAt');

  // ReviewList 컴포넌트의 items prop으로 sortedItems를 넘겨준다
  // sort 매소드를 사용해 rating이 높은 순으로 정렬하는데,
  // order State의 값이 createdAt일 떄는 최신순으로, rating일 때는 베스트순으로 정렬한다
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  // 핸들러 함수 생성 - 사용자가 정렬 기준(State 값)을 선택할 수 있도록
  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');

  // 각 버튼에 onClick 이벤트 핸들러를 사용해, 각각의 핸들러 함수를 prop으로 내려준다
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} />
    </div>
  );
}

export default App;