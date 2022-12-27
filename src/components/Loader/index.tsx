import React, { FC } from "react";
import "./style.scss";
import PulseLoader from "react-spinners/PulseLoader";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className="loader">
      <PulseLoader color="#35C7AB" loading={isLoading}></PulseLoader>
    </div>
  );
};
export default Loader;
