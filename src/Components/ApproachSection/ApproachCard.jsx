const ApproachCard = ({id,title,description}) => {
  return (
    <div key={id} className="mb-6">
      <h2 className="text-[#006A04] text-2xl font-bold py-4">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ApproachCard;
