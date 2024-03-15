import ReviewList from "./ReviewList";
import items from '../mock.json';    // 네트워크 연동 전까지 사용할 데이터

// items라는 이름으로 불러온 mock.json 파일을
// ReviewList 컴포넌트의 items prop으로 내려준다
function App () {
  return (
    <div>
      <ReviewList items={items} />
    </div>
  );
}

export default App;