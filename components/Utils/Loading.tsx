import { PacmanLoader } from "react-spinners";

const PageLoading = () => {
  return (
    <>
      <div className="h-[90vh] min-h-[90vh] flex justify-center items-center">
        <PacmanLoader
          color="black"
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default PageLoading;
