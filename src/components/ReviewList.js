import './ReviewList.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// onDelete prop을 추가하고
// handleDeleteClick 함수를 생성해, onDelete 함수로 item의 id 값을 넘겨준다
function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(item.id);
  }

  // onClick 핸들러로 handleDeleteClick을 내려준다
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title}></img>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.rating}</h1>
        <h1>{formatDate(item.createdAt)}</h1>
        <h1>{item.content}</h1>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

// onDelete prop을 추가하고
// ReviewListItem 컴포넌트에 그대로 onDelete prop을 내려준다
function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
        <li>
          <ReviewListItem item={item} onDelete={onDelete} />
        </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;