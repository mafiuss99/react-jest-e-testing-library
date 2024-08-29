import './style.css';

const Button = ({text, onclick, disabled}) => {
  return (
    <button className='button' onClick={onclick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button;