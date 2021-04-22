import * as Styled from "./Loader.styles";

export const Loader = () => {
  return (
    <Styled.LoaderWraper>
      <svg
        width="133"
        height="109"
        viewBox="0 0 133 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circle_one"
          cx="65.5"
          cy="54.5"
          r="49"
          stroke="#FF9D72"
          stroke-width="4"
        />
        <circle
          className="circle_two"
          cx="65.5"
          cy="54.5"
          r="45"
          stroke="#F4F4F4"
          stroke-width="4"
        />
        <circle
          className="circle_three"
          cx="65.5"
          cy="54.5"
          r="53"
          stroke="#FFD66B"
          stroke-width="4"
        />
        <rect
          x="0.5"
          y="33.5"
          width="42"
          height="42"
          rx="2.5"
          fill="#FF9D72"
          stroke="black"
        />
        <rect
          x="90.5"
          y="33.5"
          width="42"
          height="42"
          rx="2.5"
          fill="#F4F4F4"
          stroke="black"
        />
        <rect
          x="44.5"
          y="33.5"
          width="42"
          height="42"
          rx="2.5"
          fill="#FFD66B"
          stroke="black"
        />
        <path
          d="M117.468 58.2775H108.917L107.09 72H100L104.678 37H122L121.196 43.0132H110.963L109.648 52.5727H118.199L117.468 58.2775Z"
          fill="black"
        />
        <path
          d="M72.6744 58.2775H64.5116L62.7674 72H56L60.4651 37H77L76.2326 43.0132H66.4651L65.2093 52.5727H73.3721L72.6744 58.2775Z"
          fill="black"
        />
        <path
          d="M19.3934 72H12.3115L13.8607 60.4361L13.2705 58.2775C12.2377 54.7313 11.1803 51.2107 10.0984 47.7159C9.06557 44.221 8.03279 40.649 7 37H14.5246C14.918 38.6446 15.2869 40.315 15.6311 42.011C16.0246 43.707 16.3934 45.326 16.7377 46.8678C17.082 48.3583 17.377 49.7203 17.623 50.9537C17.8689 52.1872 18.0902 53.1637 18.2869 53.8833C18.2869 53.8833 18.7541 52.9068 19.6885 50.9537C20.2787 49.7203 20.9426 48.3583 21.6803 46.8678C22.418 45.326 23.2049 43.707 24.041 42.011L26.4016 37H34C31.9836 40.649 29.9918 44.221 28.0246 47.7159C26.0574 51.2107 24.0902 54.7313 22.123 58.2775L20.9426 60.4361L19.3934 72Z"
          fill="black"
        />
      </svg>
    </Styled.LoaderWraper>
  );
};
