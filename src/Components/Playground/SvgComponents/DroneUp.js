import React from "react";
import Chip from "@material-ui/core/Chip";
import "./svgComponentsA.css";

const DroneUp = () => {
  return (
    <div className="containerSvg">
      <Chip size="small" label="SVG animation" clickable color="primary" />
      <Chip
        size="small"
        label="Figma"
        clickable
        color="primary"
        style={{ marginLeft: 5 }}
      />
      <Chip
        size="small"
        label="CSS"
        clickable
        color="primary"
        style={{ marginLeft: 5 }}
      />
      <div className="mainDivSvg" style={{ height: 450 }}>
        <div id="mainSvgContainer">
          <svg
            width="40%"
            height="40%"
            viewBox="0 0 879 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1">
              <g id="camera">
                <path
                  id="Vector"
                  d="M453.066 192H424.934C423.892 192 422.861 192.209 421.898 192.614C420.935 193.02 420.061 193.615 419.324 194.364C418.587 195.113 418.003 196.003 417.604 196.982C417.205 197.962 417 199.011 417 200.071V206.308C417.001 207.947 417.492 209.546 418.409 210.893C419.325 212.241 420.623 213.272 422.13 213.851C420.967 215.271 420.331 217.062 420.333 218.91V220.699C420.333 221.974 420.636 223.231 421.216 224.362C421.797 225.492 422.638 226.463 423.667 227.192V251H454.333V227.192C455.362 226.463 456.203 225.492 456.784 224.362C457.364 223.231 457.667 221.975 457.667 220.699V218.91C457.669 217.062 457.033 215.271 455.87 213.851C457.377 213.272 458.675 212.241 459.591 210.893C460.508 209.546 460.999 207.947 461 206.308V200.071C461 199.011 460.795 197.962 460.396 196.983C459.997 196.003 459.413 195.114 458.676 194.364C457.939 193.615 457.065 193.02 456.102 192.614C455.139 192.209 454.108 192 453.066 192V192Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_2"
                  d="M409.822 248C408.544 248.001 407.318 248.507 406.414 249.406C405.51 250.305 405.002 251.523 405 252.795V291.204C405.001 292.476 405.51 293.695 406.414 294.594C407.318 295.493 408.543 295.998 409.822 296H468.179C469.457 295.998 470.683 295.493 471.586 294.594C472.49 293.695 472.999 292.476 473 291.204V252.795C472.998 251.523 472.49 250.305 471.586 249.406C470.682 248.507 469.457 248.002 468.179 248H409.822Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_3"
                  d="M439 291C449.493 291 458 282.493 458 272C458 261.507 449.493 253 439 253C428.507 253 420 261.507 420 272C420 282.493 428.507 291 439 291Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_4"
                  d="M439 283C445.075 283 450 278.075 450 272C450 265.925 445.075 261 439 261C432.925 261 428 265.925 428 272C428 278.075 432.925 283 439 283Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_5"
                  d="M445.594 263C447.228 265.142 448.029 267.803 447.849 270.491C447.669 273.179 446.52 275.71 444.615 277.615C442.711 279.52 440.179 280.669 437.491 280.849C434.804 281.029 432.142 280.228 430 278.594C430.96 279.861 432.181 280.907 433.58 281.663C434.979 282.418 436.523 282.865 438.109 282.974C439.695 283.083 441.286 282.85 442.775 282.292C444.264 281.734 445.616 280.864 446.74 279.74C447.864 278.616 448.735 277.264 449.292 275.775C449.85 274.286 450.083 272.695 449.974 271.109C449.865 269.523 449.418 267.979 448.663 266.58C447.907 265.181 446.86 263.96 445.594 263V263Z"
                  fill="white"
                />
              </g>
              <g id="right-wing">
                <path
                  id="Vector_6"
                  d="M658.127 20.647L457.273 5.14L617.513 32.462L655.912 25.816L658.127 20.647Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_7"
                  d="M618.99 30.031L657.389 23.385L657.766 22.505L659.604 22.647L657.389 27.816L618.99 34.462L458.75 5.14L506.237 10.806L618.99 30.031Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_8"
                  d="M675.85 20.647L876.704 5.14L716.464 32.462L678.065 25.816L675.85 20.647Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_9"
                  d="M717.941 30.031L679.542 23.385L679.165 22.505L677.327 22.647L679.542 27.816L717.941 34.462L878.181 5.14L830.694 10.806L717.941 30.031Z"
                  fill="#6C63FF"
                />
              </g>
              <g id="left-wing">
                <path
                  id="Vector_10"
                  d="M203.251 20.647L2.396 5.14L162.637 32.462L201.036 25.816L203.251 20.647Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_11"
                  d="M160.422 30.031L198.82 23.385L199.198 22.505L201.036 22.647L198.82 27.816L160.422 34.462L0.18103 5.14L47.668 10.806L160.422 30.031Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_12"
                  d="M220.973 20.647L421.828 5.14L261.587 32.462L223.189 25.816L220.973 20.647Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_13"
                  d="M263.803 30.031L225.404 23.385L225.027 22.505L223.189 22.647L225.404 27.816L263.803 34.462L424.043 5.14L376.556 10.806L263.803 30.031Z"
                  fill="#6C63FF"
                />
              </g>
              <g id="drone">
                <path
                  id="Vector_14"
                  d="M692.095 101.136L675.111 101.875L519.516 167.522L510.61 174.98L482.38 198.61H393.767L367.08 174.98L356.934 165.993L207.682 102.613L194.39 101.136L238.696 79.7218H238.932C248.975 70.1886 335.948 62.7378 441.766 62.7378C547.583 62.7378 634.556 70.1886 644.599 79.7218H645.574L692.095 101.136Z"
                  fill="#6a63db"
                />
                <path
                  id="Vector_15"
                  d="M237.479 80.8165C237.794 79.9311 237.956 78.9986 237.957 78.0588V42.9861C237.957 40.7824 237.082 38.669 235.524 37.1108C233.966 35.5526 231.852 34.6772 229.649 34.6772H226.275C229.045 31.8817 230.926 28.3288 231.68 24.4663C232.435 20.6038 232.029 16.6044 230.515 12.9719C229 9.33946 226.445 6.23643 223.17 4.05374C219.895 1.87105 216.048 0.70636 212.112 0.70636C208.177 0.70636 204.329 1.87105 201.054 4.05374C197.78 6.23643 195.224 9.33946 193.71 12.9719C192.195 16.6044 191.79 20.6038 192.544 24.4663C193.299 28.3288 195.179 31.8817 197.949 34.6772H194.576C193.485 34.6772 192.404 34.8921 191.396 35.3097C190.388 35.7272 189.472 36.3393 188.701 37.1108C187.929 37.8824 187.317 38.7983 186.899 39.8064C186.482 40.8145 186.267 41.8949 186.267 42.9861V78.0588C186.266 79.495 186.64 80.9064 187.352 82.154C184.844 82.5937 182.336 83.071 179.828 83.6226C178.301 83.9642 176.935 84.8167 175.958 86.0393C174.98 87.262 174.449 88.7815 174.452 90.3468V98.6798C174.452 100.506 175.178 102.258 176.469 103.55C177.761 104.841 179.513 105.567 181.339 105.567H259.372V84.8909C252.167 83.0762 244.855 81.7154 237.479 80.8165V80.8165Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_16"
                  d="M699.272 83.6226C696.765 83.071 694.257 82.5937 691.749 82.154C692.46 80.9064 692.834 79.495 692.834 78.0588V42.9861C692.834 41.8949 692.619 40.8145 692.201 39.8064C691.784 38.7983 691.172 37.8824 690.4 37.1108C689.629 36.3393 688.713 35.7272 687.705 35.3097C686.697 34.8921 685.616 34.6772 684.525 34.6772H681.151C683.921 31.8817 685.802 28.3288 686.556 24.4663C687.311 20.6038 686.905 16.6044 685.391 12.9719C683.877 9.33943 681.321 6.23637 678.046 4.05368C674.771 1.87099 670.924 0.706299 666.989 0.706299C663.053 0.706299 659.205 1.87099 655.931 4.05368C652.656 6.23637 650.1 9.33943 648.586 12.9719C647.072 16.6044 646.666 20.6038 647.421 24.4663C648.175 28.3288 650.056 31.8817 652.826 34.6772H649.452C648.361 34.6772 647.281 34.8921 646.272 35.3097C645.264 35.7272 644.348 36.3393 643.577 37.1108C642.805 37.8824 642.193 38.7983 641.776 39.8064C641.358 40.8145 641.143 41.8949 641.143 42.9861V78.0588C641.145 78.9986 641.307 79.9311 641.622 80.8165C634.246 81.7154 626.934 83.0762 619.729 84.8909V105.567H697.761C699.588 105.567 701.34 104.841 702.631 103.55C703.923 102.258 704.649 100.506 704.649 98.6798V90.3468C704.652 88.7815 704.12 87.262 703.143 86.0393C702.165 84.8167 700.8 83.9642 699.272 83.6226V83.6226Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_17"
                  d="M510.61 174.98L482.38 198.61H393.767L367.08 174.98H393.62L394.779 169.198C395.119 167.497 396.037 165.967 397.378 164.867C398.719 163.767 400.4 163.166 402.134 163.165H476.228C477.963 163.166 479.643 163.767 480.984 164.867C482.325 165.967 483.243 167.497 483.583 169.198L484.743 174.98H510.61Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_18"
                  d="M705.017 92.4304H174.821V95.8125H705.017V92.4304Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_19"
                  d="M468.719 169.442H409.644V181.257H468.719V169.442Z"
                  fill="#E6E6E6"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="601.5"
                y1="87"
                x2="19.5"
                y2="189"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0364583" stop-color="#4337D7" />
                <stop offset="1" stop-color="#1400FA" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Chip
        label="#SVG image from - undraw.co"
        style={{ color: "rgb(50, 138, 118)", fontWeight: "600" }}
      />
    </div>
  );
};

export default DroneUp;
