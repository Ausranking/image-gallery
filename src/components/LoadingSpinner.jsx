const LoadingSpinner = () => {
  return (
    <div className ='grid place-items-center h-screen '>
      <div className="w-28 absolute top-[50%] left-[40%] h-28 border-t-4 border-emerald-500 border-solid rounded-full animate-spin"></div>
      <div className='text-xl text-emerald-500'>loading...</div>
    </div>
  );
};

export default LoadingSpinner;
