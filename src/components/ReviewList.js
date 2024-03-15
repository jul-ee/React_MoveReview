// ReviewList 컴포넌트에서는 items 배열을 prop으로 받는다
function ReviewList({ items }) {
  // map 메소드로 각 요소를 렌더링한다
  // map 메소드 안에서 JSX를 리턴하면, 마치 JSX 여러 개를 추가한 것처럼 동작한다
  return (
    <ul>
      {items.map((item) => {
        return <li>{items.title}</li>
      })}
    </ul>
  );
}

export default ReviewList;