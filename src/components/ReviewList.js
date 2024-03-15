import './ReviewList.css';

// 숫자형인 createAt 값을 예쁘게 보여주기 위해서, formatDate 함수 생성
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// 요소 하나에 해당하는 ReviewListItem 컴포넌트
function ReviewListItem({ item }) {
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title}></img>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.rating}</h1>
        <h1>{formatDate(item.createdAt)}</h1>
        <h1>{item.content}</h1>
      </div>
    </div>
  );
}

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        // ReviewListItem 컴포넌트를 추가한다
        // map의 콜백 함수에서 JSX로 작성한 값을 리턴해준다
        return <li><ReviewListItem item={item} /></li>
      })}
    </ul>
  );
}

export default ReviewList;