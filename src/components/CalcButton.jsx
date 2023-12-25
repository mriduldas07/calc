/* eslint-disable react/prop-types */
export default function CalcButton({ children, classN, onClick }) {
  return (
    <div
      className={`bg-[#364358] w-16 h-16 text-2xl flex justify-center items-center cursor-pointer hover:bg-[#6C63FF] ${classN}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
