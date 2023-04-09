const Button = ({ style, info, onclick }) => {
  return (
    <button onClick={onclick} className={`p-10 w-full   border-2 ${style}`}>
      {info}
    </button>
  );
};

export default Button;
