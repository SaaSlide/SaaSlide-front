export const IconNote = ({ onclick, size, color }) => {
  console.log(color)
  return (
    <div onClick={onclick} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.946662 12.7193C0.759651 12.719 0.581375 12.6401 0.455329 12.502C0.326959 12.365 0.263172 12.1797 0.279996 11.9927L0.443329 10.1967L7.98866 2.65399L10.3467 5.01133L2.80333 12.5533L1.00733 12.7167C0.986662 12.7187 0.965996 12.7193 0.946662 12.7193ZM10.8173 4.53999L8.46 2.18266L9.87399 0.76866C9.99904 0.643475 10.1687 0.573135 10.3457 0.573135C10.5226 0.573135 10.6923 0.643475 10.8173 0.76866L12.2313 2.18266C12.3565 2.30771 12.4269 2.47739 12.4269 2.65433C12.4269 2.83127 12.3565 3.00095 12.2313 3.12599L10.818 4.53933L10.8173 4.53999Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
