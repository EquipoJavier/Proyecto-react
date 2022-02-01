export default function ButtonHiddenCrud({disabled, className, type="button", handle , text}) {
    return (
        <button
        disabled={!disabled}
        className={className}
        type={type}
        onClick={() => {
          handle();
        }}
      >{text}
      </button>
    );
  }
  