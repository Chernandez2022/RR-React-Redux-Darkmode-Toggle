import "./App.css";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  clearData,
  fetchData,
  incrementId,
  decrementId,
  inputId,
} from "./features/dataSlice";
import { useEffect } from "react";

function App(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const renderImg = () => {
    if (data.apiData) {
      return (
        <img
          style={{ width: "90vw" }}
          src={data.apiData.primaryImage}
          alt={data.apiData.title}
        />
      );
    } else {
      return <p>image</p>;
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [props.objectId, dispatch]);
  // your logic goes here!

  return (
    <div className="App">
      <div>
        <button onClick={() => {}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {}}>Next</button>
        <button onClick={() => {}}>Back</button>
      </div>
      <input
        value={data.ObjectId}
        onChange={(e) => {
          dispatch(inputId(Number(e.target.value)));
        }}
      />
      <div>
        {data.ObjectId}
        {renderImg()}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  objectId: state.data.objectId,
});

export default connect(mapStateToProps)(App);
