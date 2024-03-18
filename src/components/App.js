import ReviewList from "./ReviewList";
import mockItems from '../mock.json';    // mock.json에서 불러온 배열의 이름을 mockItems로 변경
import { useState } from "react";

function App () {
  const [order, setOrder] = useState('createdAt');

  const [items, setItems] = useState(mockItems);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');

  // id 를 파라미터로 받아와서 해당 id를 가진 요소를 items.filter로 걸러낸다
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id != id);
    setItems(nextItems);
  }

  // handleDelete 함수를 ReviewList 컴포넌트의 onDelete prop으로 내려준다
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;