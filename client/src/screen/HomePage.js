import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMedAction } from "../action/medAction";
import Med from "../components/Med";
import SpinnerCircle from "../components/SpinnerCircle";

export default function HomePage() {
  const dispatch = useDispatch();
  const med = useSelector((state) => state.allMedReducers);
  const { loading, medData } = med;
  useEffect(() => {
    dispatch(allMedAction());
  }, [dispatch]);
  return (
    <div className="row justify-content-center">
      {loading && <SpinnerCircle />}
      {medData &&
        medData.map((med) => (
          <div className="col-md-3">
            <Med meds={med} />
          </div>
        ))}
    </div>
  );
}
