function ImageV() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="399.532" height="512.865" viewBox="0 0 399.532 512.865">
      <defs>
        <clipPath>
          <path fill="none" stroke="#1a5632" strokeWidth="1" d="M0 0L0 1.122" data-name="Line 191"></path>
        </clipPath>
      </defs>
      <g data-name="Group 3052" transform="translate(5711.378 -4736.771)">
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 296.862L0 0" data-name="Line 213" transform="rotate(90 -5040.854 -270.992)"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M-5709.878 4957.334h10.05l15.546-24.686v-130.879l16.629-25.6" data-name="Path 13615"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 296.862L0 0" data-name="Line 212" transform="rotate(90 -5117.93 -193.917)"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 296.862L0 0" data-name="Line 214" transform="rotate(90 -5185.285 -126.562)"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M-5709.878 4994.839h13.65l18.342-31.085 3.363-36.673 9.844-7.648" data-name="Path 13616"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M-5709.878 5021.115h16.068l22.571-35.568v67.549l6.449 9.565" data-name="Path 13617"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M-5709.878 5048.288h19.9l7.252-13.45v202.538l7.054 10.76h360.321" data-name="Path 13618"></path>
        <g data-name="Layer 9" transform="rotate(90 -5223.324 -486.554)">
          <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 0L312.112 0" data-name="Line 192"></path>
        </g>
      </g>
    </svg>
  );
}

function ImageH() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1950.008" height="710.822" viewBox="0 0 1950.008 710.822">
      <defs>
        <clipPath>
          <path fill="none" stroke="#1a5632" strokeWidth="1" d="M0 0L0 1.122" data-name="Line 191"></path>
        </clipPath>
      </defs>
      <g data-name="Group 3325" transform="translate(-7625 -9676.77)">
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 0L1242 0" data-name="Line 205" transform="translate(7979.5 10386.092)"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 0L0 282.943" data-name="Line 204" transform="translate(7780.264 10013.821)"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M8666.451 9677.396v47.5l-116.69 73.484h-618.675l-121 78.608" data-name="Path 14200"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 0L0 282.943" data-name="Line 203" transform="translate(8352.945 10013.821)"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M8701.923 9677.396v64.521l-146.938 86.69h-101.726l-80.094 52.479" data-name="Path 14201"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M8731.594 9677.396v75.953l-168.131 106.7h319.307l45.212 30.484v406.236" data-name="Path 14202"></path>
        <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M8765.502 9677.396v94.053l-63.579 34.295h716.321l50.863 33.342v457.678" data-name="Path 14203"></path>
        <g data-name="Layer 9" transform="translate(7625 9678.27)">
          <path fill="none" stroke="#1a5632" strokeMiterlimit="10" strokeWidth="3" d="M0 0L1950.008 0" data-name="Line 192"></path>
        </g>
      </g>
    </svg>
  );
}

const Operation = () => {
  return (
    <div className="min-h-screen">
      <div className="hidden md:block">
        <ImageH />
      </div>
      <div className="md:hidden">
        <ImageV />
      </div>
    </div>
  );
};

export default Operation;
