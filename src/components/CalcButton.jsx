/* eslint-disable react/prop-types */
export default function CalcButton({ children, classN }) {
  return (
    <div
      className={`bg-[#364358] w-16 h-16 text-2xl flex justify-center items-center cursor-pointer ${classN}`}
    >
      {children}
    </div>
  );
}
