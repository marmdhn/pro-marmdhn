interface LoadingProps {
  isFadingOut: boolean;
}

const Loading = ({ isFadingOut }: LoadingProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#1B1C21]`}
    >
      <svg
        id="loading-svg"
        width="100"
        height="100"
        viewBox="0 0 264 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-1000 ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <path
          d="M10.7822 76.4555C3.92079 76.4555 0 71.2278 0 69.2674V9.80207V4.90108C0 3.26759 1.44228 2.08798 2.61386 1.30703C3.78544 0.52608 5.88118 -7.57806e-05 7.51485 9.74323e-05C9.14851 0.000270645 10.4554 -0.000191256 13.7228 9.74323e-05C16.9901 0.000386121 20.253 3.92101 21.2375 4.90108C22.2221 5.88116 55.2178 43.7821 57.5049 43.7823C59.316 43.7824 92.8104 5.88128 93.7722 4.90127C94.734 3.92127 97.3662 9.74323e-05 100.634 9.74323e-05H106.841C108.475 0.000206967 110.762 0.653672 111.742 1.30703C112.723 1.96038 114.356 3.26731 114.356 4.90108V9.80207V106.515C114.356 108.476 110.436 113.703 103.574 113.703C96.7128 113.703 92.792 108.476 92.792 106.515C92.792 104.778 93.5614 48.6738 93.7369 35.8982C93.7495 34.9814 92.6289 34.564 92.0066 35.2372C85.8624 41.8841 65.6994 63.6866 64.0396 65.3466C62.0792 67.3072 60.1188 67.9604 57.8316 67.9604C55.5445 67.9604 52.9306 67.3071 50.9703 65.3466C49.3095 63.6856 29.1217 41.8563 22.9914 35.2245C22.3705 34.5528 21.2535 34.9887 21.2622 35.9035C21.3384 43.8652 21.5643 67.6372 21.5643 69.2674C21.5643 71.2278 17.6436 76.4555 10.7822 76.4555Z"
          fill="#fff"
        />
        <path
          d="M21.5643 92.9209C21.5643 90.9605 18.297 86.6313 10.7822 86.6312C3.26732 86.6312 0 90.9605 0 92.9209V99.0892V106.597C0 108.557 3.26732 113.703 10.7822 113.703C18.297 113.703 21.5643 108.557 21.5643 106.597V99.0892V92.9209Z"
          fill="#fff"
        />
        <path
          d="M137.53 73.621H174.161C174.161 73.621 199.345 109.756 200.98 110.769C202.616 111.782 202.616 112.795 207.849 113.471C213.082 114.146 214.717 113.133 214.717 113.133C214.717 113.133 217.988 111.445 219.623 109.418C221.258 107.392 220.931 105.028 220.604 104.353C220.277 103.677 149.958 5.4035 148.323 3.71494C146.688 2.02639 146.361 1.35097 145.052 0.67555C143.744 0.0001297 142.436 0.0001297 140.146 0.0001297H136.549C135.241 0.0001297 133.932 0.0001297 132.951 0.33784C131.97 0.67555 130.989 1.01326 130.007 2.02639L130.007 2.0265C129.026 3.03955 128.699 3.37728 128.045 4.72808C127.391 6.07892 127.064 7.76747 128.045 9.79373C129.026 11.82 159.77 53.6961 159.77 53.6961C159.77 53.6961 139.819 54.0338 137.53 54.0338C135.24 54.0338 132.297 57.0732 132.297 57.0732C132.297 57.0732 129.68 60.2019 129.68 63.8274C129.68 67.4529 132.297 70.5816 132.297 70.5816C132.297 70.5816 135.24 73.621 137.53 73.621Z"
          fill="#fff"
        />
        <path
          d="M182.636 2.6304C181.007 4.27432 179.703 5.91824 179.703 9.53487C179.703 13.1515 181.333 15.1242 182.636 16.4393C183.94 17.7545 185.57 19.3984 187.851 19.3984C190.133 19.3984 217.184 19.0696 220.118 19.7272C223.051 20.3847 225.659 22.0287 226.962 23.015C228.266 24.0014 229.57 25.3165 231.199 28.6043C232.829 31.8922 233.155 34.1937 232.503 38.4679C231.851 42.7421 229.896 45.2408 227.288 47.345C224.681 49.4492 223.377 49.9753 222.399 50.6329C221.421 51.2904 220.118 52.2768 218.814 54.2495C217.51 56.2222 216.207 60.1676 215.881 63.4554C215.555 66.7433 216.533 71.3463 217.51 72.9902C218.488 74.6341 247.17 110.8 247.17 110.8C247.17 110.8 248.799 112.773 251.407 113.431C254.014 114.088 256.947 113.431 258.577 112.773C260.207 112.115 262.814 108.499 263.466 107.184C264.118 105.869 264.444 101.923 262.814 99.6217C261.184 97.3202 235.762 65.0994 235.762 65.0994C235.762 65.0994 238.37 63.1267 239.999 61.8115C241.629 60.4964 243.258 59.1813 245.214 56.551C247.17 53.9207 248.473 51.948 249.777 48.3314C251.081 44.7148 251.407 41.4269 251.733 38.4679C252.058 35.5088 251.733 29.9195 251.407 28.6043C251.081 27.2892 250.755 23.015 248.799 19.3984C246.844 15.7818 245.866 13.8091 243.258 10.85C240.651 7.89095 236.523 4.60311 233.481 3.28797C230.439 1.97283 224.029 0.0001297 220.118 0.0001297H187.851C185.57 0.0001297 184.266 0.986482 182.636 2.6304Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default Loading;
