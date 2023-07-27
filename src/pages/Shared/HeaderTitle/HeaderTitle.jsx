const HeaderTitle = ({ title }) => {
  return (
    <div className="text-center">
      <div className="inline-block w-28 h-2 rounded-lg bg-red-400 mb-2"></div>
      <p className="text-red-400 text-4xl font-semibold">{title}</p>
      <div className="inline-block w-28 h-2 rounded-lg bg-red-400 mt-2"></div>
    </div>
  );
};

export default HeaderTitle;
