import { FaBackspace } from "react-icons/fa";

function Expenses(props) {

  const handleRemoveExpense = () => {
    props.handleRemove(props.data.id);
  };

  return (
    <div className="expense">
      <div>💲{props.data.amount}</div>
      <div>{props.data.description}</div>
      <div>
        <FaBackspace className="remove" size={30} color={"red"} onClick={handleRemoveExpense}/>
      </div>
    </div>
  );
}

export default Expenses;
