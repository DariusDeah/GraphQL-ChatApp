import React from "react";

type Props = {};

function WelcomeSvg({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      stroke-width=".75"
    >
      <path
        fill="#eba9a9"
        d="M192.948 140.659C187.93 132.182 178.773 121.046 169.274 118.505L166.614 124.851C166.44 125.242 166.145 125.566 165.772 125.775C165.398 125.984 164.967 126.067 164.543 126.01L157.266 124.984C156.972 124.942 156.692 124.835 156.445 124.67C156.198 124.505 155.992 124.287 155.84 124.032C155.689 123.777 155.597 123.491 155.571 123.195C155.544 122.9 155.585 122.602 155.689 122.324L157.266 117.65C152.207 118.934 144.631 115.16 140.109 112.52L148.013 94C146.497 92.2425 144.61 90.8434 142.487 89.9037C140.365 88.964 138.06 88.5071 135.74 88.566L126.487 108.915C125.331 111.466 125.134 114.349 125.934 117.033C126.733 119.717 128.475 122.023 130.838 123.526C136.393 127.151 142.521 129.811 148.963 131.392C148.846 136.777 150.018 142.112 152.383 146.952C158.204 148.528 164.336 148.548 170.167 147.009C169.811 143.572 171.343 139.165 172.58 135.933L179.838 143.627L164.738 156.68C165.238 161.758 169.28 166.08 173.972 167.548L190.772 153.393C192.58 151.869 193.791 149.755 194.189 147.424C194.587 145.093 194.148 142.697 192.948 140.659V140.659Z"
      ></path>
      <path
        fill="#eba9a9"
        d="M106.5 74.558C104.602 74.7949 102.693 74.9344 100.781 74.976C108.875 78.092 104.809 77.484 99.641 76.876C103.141 79.085 101.989 79.049 99.578 78.445C96.887 77.771 92.635 76.411 91.528 76.629C90.7777 77.03 90.0596 77.4883 89.38 78C89.1929 76.6372 88.7162 75.3302 87.9822 74.1668C87.2481 73.0034 86.2735 72.0106 85.124 71.255C88.875 70.505 92.789 67.69 94.924 66.264C97.059 64.838 97.4 64.8 94.035 69.58C93.446 70.549 93.275 71.195 93.997 71.442C100.191 72.088 107.012 73.437 106.5 74.558Z"
      ></path>
      <path
        fill="#eba9a9"
        d="M57.917 109.252C54.3151 108.304 50.7751 107.135 47.317 105.752C47.489 105.714 49.581 105.237 49.517 104.441C49.503 104.25 48.795 104.08 47.717 103.928C44.3172 103.54 40.8978 103.35 37.476 103.358V103.377C38.2308 107.04 37.6796 110.851 35.918 114.15C38.0877 113.755 40.313 113.781 42.473 114.226C43.499 116.826 47.147 117.342 48.23 116.354C48.3552 116.234 48.4536 116.089 48.5189 115.929C48.5843 115.769 48.6149 115.596 48.609 115.423C49.864 115.556 50.852 115.252 50.567 113.789C50.8447 113.744 51.11 113.642 51.346 113.489C52.146 112.862 51.646 110.867 49.883 109.289C55.713 110.867 59.09 109.484 57.917 109.252Z"
      ></path>
      <path
        fill="#eba9a9"
        d="M43.1 56.945C41.656 50.694 37.476 54.798 36.6 57.763C36.391 58.332 36.011 58.333 35.365 57.344C34.016 55.273 31.451 57.972 34.358 60.859C34.909 61.412 33.321 67.69 27.974 70.72C33.522 72.601 37.74 72.392 40.02 69.048C39.203 68.912 37.567 68.948 37.379 67.661C36.812 67.0448 36.4981 66.2374 36.5 65.4C37.74 66.242 39.939 67.214 41.417 66.648C43.757 65.754 43.836 61.559 43.1 56.945Z"
      ></path>
      <g>
        <path
          fill="#5452ff"
          d="M122.554 39.275H73.762C72.2447 39.2743 70.7421 39.5727 69.3402 40.1531C67.9383 40.7335 66.6645 41.5845 65.5917 42.6574C64.5188 43.7303 63.668 45.0042 63.0877 46.4062C62.5075 47.8081 62.2092 49.3107 62.21 50.828V58.674H67.338V51.948C67.3437 50.8858 67.5623 49.8356 67.9808 48.8594C68.3993 47.8831 69.0093 47.0007 69.7747 46.2642C70.54 45.5277 71.4453 44.9521 72.4369 44.5715C73.4285 44.1908 74.4864 44.0128 75.548 44.048H121.11C122.171 44.0145 123.228 44.1936 124.219 44.5749C125.21 44.9562 126.114 45.5319 126.879 46.2681C127.644 47.0042 128.254 47.886 128.673 48.8615C129.091 49.837 129.311 50.8864 129.318 51.948V102.678L134.106 92.152V50.828C134.107 49.3107 133.808 47.8082 133.228 46.4063C132.648 45.0044 131.797 43.7306 130.724 42.6577C129.651 41.5848 128.377 40.7338 126.976 40.1534C125.574 39.573 124.071 39.2745 122.554 39.275V39.275Z"
        ></path>
        <path
          fill="#5452ff"
          d="M129.3 154.623V161.123C129.299 163.3 128.435 165.387 126.895 166.926C125.356 168.466 123.269 169.33 121.092 169.331H75.529C73.3522 169.33 71.2648 168.466 69.7256 166.926C68.1864 165.387 67.3215 163.3 67.321 161.123V109.923H62.191V162.552C62.1908 164.069 62.4896 165.571 63.0701 166.972C63.6507 168.374 64.5017 169.647 65.5744 170.719C66.6472 171.792 67.9208 172.642 69.3224 173.222C70.724 173.802 72.2261 174.101 73.743 174.1H122.554C124.071 174.101 125.574 173.802 126.976 173.222C128.377 172.642 129.651 171.791 130.724 170.718C131.797 169.645 132.648 168.371 133.228 166.97C133.808 165.568 134.107 164.065 134.106 162.548V154.625L129.3 154.623Z"
        ></path>
        <path
          fill="#5452ff"
          d="M163.346 111.076L161.541 113.185C161.675 112.554 161.738 111.911 161.731 111.266C162.274 111.246 162.814 111.182 163.346 111.076V111.076Z"
        ></path>
        <path
          fill="#5452ff"
          d="M37.378 67.642C36.8128 67.025 36.5007 66.2177 36.504 65.381C36.919 65.6501 37.352 65.8904 37.8 66.1C37.5022 66.5575 37.3547 67.0966 37.378 67.642Z"
        ></path>
        <path
          fill="#5452ff"
          d="M25.427 88.542L25.1 94.717L23.979 90.879C24.4 90.157 24.876 89.4 25.427 88.542Z"
        ></path>
        <path
          fill="#5452ff"
          d="M49.006 86.053C49.111 83.8225 49.0538 81.5873 48.835 79.365L51.435 87.839C50.659 87.307 49.842 86.718 49.006 86.053Z"
        ></path>
        <path
          fill="#5452ff"
          d="M41.9 50.6C41.8691 50.2791 41.7319 49.9778 41.5102 49.7438C41.2884 49.5098 40.9949 49.3566 40.6761 49.3086C40.3573 49.2606 40.0317 49.3204 39.7508 49.4787C39.47 49.6369 39.2501 49.8845 39.126 50.182H38.936C38.8386 49.8732 38.6408 49.6059 38.374 49.4224C38.1073 49.239 37.7868 49.1499 37.4637 49.1695C37.1405 49.189 36.8331 49.316 36.5904 49.5303C36.3477 49.7445 36.1835 50.0338 36.124 50.352H36.048C35.9545 49.9899 35.7246 49.6779 35.4064 49.4814C35.0883 49.2849 34.7064 49.219 34.3407 49.2975C33.9751 49.376 33.654 49.5929 33.4445 49.9028C33.2351 50.2126 33.1536 50.5914 33.217 50.96C33.1106 50.6323 32.891 50.3532 32.5976 50.1726C32.3042 49.9919 31.9561 49.9216 31.6156 49.9742C31.2751 50.0267 30.9644 50.1988 30.7391 50.4594C30.5138 50.7201 30.3887 51.0525 30.386 51.397C30.3849 51.5383 30.4041 51.6791 30.443 51.815C31.1913 54.0679 31.8254 56.3572 32.343 58.674C32.97 61.714 33.293 64.982 32.343 66.674C34.224 63.919 34.699 61.145 34.395 60.841C31.469 57.954 34.053 55.255 35.402 57.326C36.048 58.314 36.428 58.314 36.637 57.745C37.511 54.78 41.672 50.677 43.137 56.927L41.9 50.6Z"
        ></path>
        <path
          fill="#5452ff"
          d="M165.892 67.3C165.885 67.4794 165.809 67.6491 165.68 67.7736C165.551 67.8981 165.378 67.9677 165.199 67.9677C165.019 67.9677 164.846 67.8981 164.717 67.7736C164.588 67.6491 164.512 67.4794 164.505 67.3C164.512 67.1206 164.588 66.9509 164.717 66.8264C164.846 66.7019 165.019 66.6323 165.199 66.6323C165.378 66.6323 165.551 66.7019 165.68 66.8264C165.809 66.9509 165.885 67.1206 165.892 67.3Z"
        ></path>
        <path
          fill="#5452ff"
          d="M173.34 106.649C173.667 105.582 173.859 104.477 173.91 103.362C174.138 96.462 167.127 94.869 162.225 98.916C164.904 97.206 166.443 101.386 166.177 103.951C166.177 104.403 166.331 104.825 167.488 104.051C169.521 102.645 170.87 106.122 167.07 107.68C166.348 107.965 165.57 111.537 166.462 115.945C166.804 117.692 167.621 117.945 169.274 118.472C173.82 119.798 178.362 123 181.643 126.11C190.326 109.119 173.321 106.649 173.34 106.649Z"
        ></path>
        <path
          fill="#5452ff"
          d="M33.559 104.217C33.3486 104.217 33.1428 104.279 32.9679 104.396C32.7929 104.513 32.6565 104.679 32.576 104.874C32.4955 105.068 32.4744 105.282 32.5154 105.489C32.5565 105.695 32.6578 105.885 32.8066 106.033C32.9554 106.182 33.145 106.284 33.3514 106.325C33.5578 106.366 33.7717 106.345 33.9662 106.264C34.1606 106.183 34.3268 106.047 34.4437 105.872C34.5606 105.697 34.623 105.491 34.623 105.281C34.6186 105 34.5051 104.732 34.3065 104.533C34.1079 104.335 33.8398 104.221 33.559 104.217V104.217Z"
        ></path>
        <path
          fill="#5452ff"
          d="M18.112 110.031C18.6996 110.031 19.176 109.555 19.176 108.967C19.176 108.379 18.6996 107.903 18.112 107.903C17.5243 107.903 17.048 108.379 17.048 108.967C17.048 109.555 17.5243 110.031 18.112 110.031Z"
        ></path>
        <path
          fill="#5452ff"
          d="M10.588 95.8C11.1756 95.8 11.652 95.3236 11.652 94.736C11.652 94.1484 11.1756 93.672 10.588 93.672C10.0004 93.672 9.52399 94.1484 9.52399 94.736C9.52399 95.3236 10.0004 95.8 10.588 95.8Z"
        ></path>
        <path
          fill="#5452ff"
          d="M23.413 86.775C24.0006 86.775 24.477 86.2986 24.477 85.711C24.477 85.1234 24.0006 84.647 23.413 84.647C22.8254 84.647 22.349 85.1234 22.349 85.711C22.349 86.2986 22.8254 86.775 23.413 86.775Z"
        ></path>
        <path
          fill="#5452ff"
          d="M28.315 72.278C28.1045 72.278 27.8988 72.3404 27.7239 72.4573C27.5489 72.5742 27.4125 72.7404 27.332 72.9348C27.2514 73.1292 27.2304 73.3432 27.2714 73.5496C27.3125 73.756 27.4138 73.9456 27.5626 74.0944C27.7114 74.2432 27.901 74.3445 28.1074 74.3856C28.3138 74.4266 28.5277 74.4055 28.7222 74.325C28.9166 74.2445 29.0827 74.1081 29.1997 73.9331C29.3166 73.7582 29.379 73.5524 29.379 73.342C29.3746 73.0612 29.2611 72.7931 29.0625 72.5945C28.8639 72.3959 28.5958 72.2824 28.315 72.278Z"
        ></path>
        <path
          fill="#5452ff"
          d="M38.974 82.956C38.7635 82.956 38.5578 83.0184 38.3828 83.1353C38.2079 83.2522 38.0715 83.4184 37.991 83.6128C37.9104 83.8072 37.8894 84.0212 37.9304 84.2276C37.9715 84.434 38.0728 84.6236 38.2216 84.7724C38.3704 84.9212 38.56 85.0225 38.7664 85.0636C38.9728 85.1046 39.1867 85.0835 39.3812 85.003C39.5756 84.9225 39.7417 84.7861 39.8587 84.6111C39.9756 84.4362 40.038 84.2304 40.038 84.02C40.0336 83.7392 39.9201 83.4711 39.7215 83.2725C39.5229 83.0739 39.2548 82.9604 38.974 82.956V82.956Z"
        ></path>
        <path
          fill="#5452ff"
          d="M30.329 92.608C30.1185 92.608 29.9128 92.6704 29.7379 92.7873C29.5629 92.9042 29.4265 93.0704 29.346 93.2648C29.2654 93.4592 29.2444 93.6732 29.2854 93.8796C29.3265 94.086 29.4278 94.2756 29.5766 94.4244C29.7254 94.5732 29.915 94.6745 30.1214 94.7156C30.3278 94.7566 30.5417 94.7355 30.7362 94.655C30.9306 94.5745 31.0968 94.4381 31.2137 94.2631C31.3306 94.0882 31.393 93.8824 31.393 93.672C31.3932 93.5322 31.3659 93.3937 31.3125 93.2645C31.2592 93.1353 31.1808 93.0179 31.0819 92.9191C30.9831 92.8202 30.8657 92.7418 30.7365 92.6885C30.6073 92.6351 30.4688 92.6077 30.329 92.608V92.608Z"
        ></path>
        <path
          fill="#5452ff"
          d="M54.534 86.775C55.1216 86.775 55.598 86.2986 55.598 85.711C55.598 85.1234 55.1216 84.647 54.534 84.647C53.9463 84.647 53.47 85.1234 53.47 85.711C53.47 86.2986 53.9463 86.775 54.534 86.775Z"
        ></path>
        <path
          fill="#5452ff"
          d="M64.775 81.7C64.5646 81.7 64.3588 81.7624 64.1839 81.8793C64.0089 81.9962 63.8725 82.1624 63.792 82.3568C63.7115 82.5512 63.6904 82.7652 63.7314 82.9716C63.7725 83.178 63.8738 83.3676 64.0226 83.5164C64.1714 83.6652 64.361 83.7665 64.5674 83.8076C64.7738 83.8486 64.9878 83.8275 65.1822 83.747C65.3766 83.6665 65.5428 83.5301 65.6597 83.3551C65.7766 83.1802 65.839 82.9744 65.839 82.764C65.8346 82.4832 65.7211 82.2151 65.5225 82.0165C65.3239 81.8179 65.0558 81.7044 64.775 81.7V81.7Z"
        ></path>
        <path
          fill="#5452ff"
          d="M77.676 86.148C78.2636 86.148 78.74 85.6716 78.74 85.084C78.74 84.4964 78.2636 84.02 77.676 84.02C77.0884 84.02 76.612 84.4964 76.612 85.084C76.612 85.6716 77.0884 86.148 77.676 86.148Z"
        ></path>
        <path
          fill="#5452ff"
          d="M83.319 74.691C83.9066 74.691 84.383 74.2146 84.383 73.627C84.383 73.0394 83.9066 72.563 83.319 72.563C82.7313 72.563 82.255 73.0394 82.255 73.627C82.255 74.2146 82.7313 74.691 83.319 74.691Z"
        ></path>
        <path
          fill="#5452ff"
          d="M44.18 94.717C43.9695 94.717 43.7638 94.7794 43.5888 94.8963C43.4139 95.0132 43.2775 95.1794 43.197 95.3738C43.1164 95.5682 43.0954 95.7822 43.1364 95.9886C43.1775 96.195 43.2788 96.3846 43.4276 96.5334C43.5764 96.6822 43.766 96.7835 43.9724 96.8246C44.1788 96.8656 44.3927 96.8445 44.5871 96.764C44.7816 96.6835 44.9477 96.5471 45.0646 96.3721C45.1816 96.1971 45.244 95.9914 45.244 95.781C45.2396 95.5002 45.1261 95.2321 44.9275 95.0335C44.7289 94.8349 44.4608 94.7214 44.18 94.717V94.717Z"
        ></path>
        <path
          fill="#5452ff"
          d="M46.289 74.026C46.8766 74.026 47.353 73.5496 47.353 72.962C47.353 72.3744 46.8766 71.898 46.289 71.898C45.7013 71.898 45.225 72.3744 45.225 72.962C45.225 73.5496 45.7013 74.026 46.289 74.026Z"
        ></path>
      </g>
      <g>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M152.383 146.947L149.248 154.623"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M67.338 58.674V51.93C67.343 50.8674 67.5611 49.8166 67.9793 48.8398C68.3975 47.863 69.0074 46.9799 69.7729 46.2429C70.5383 45.5059 71.4438 44.9299 72.4357 44.5489C73.4277 44.168 74.486 43.9898 75.548 44.025H121.11C122.171 43.9915 123.229 44.1708 124.22 44.5524C125.211 44.934 126.116 45.5101 126.881 46.2468C127.646 46.9835 128.255 47.8659 128.674 48.842C129.093 49.818 129.312 50.868 129.318 51.93V102.678"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M134.1 92.133V50.809C134.099 49.2918 133.8 47.7895 133.219 46.3881C132.637 44.9867 131.785 43.7137 130.712 42.6417C129.638 41.5697 128.363 40.7198 126.961 40.1406C125.559 39.5613 124.056 39.2642 122.539 39.266H73.743C72.2252 39.2664 70.7224 39.5658 69.3204 40.1471C67.9183 40.7284 66.6446 41.5802 65.5718 42.6539C64.4991 43.7276 63.6483 45.0021 63.0683 46.4046C62.4882 47.8072 62.1901 49.3102 62.191 50.828V58.674"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M158.9 103.381H144.004"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M173.891 103.371H183.448C184.024 103.37 184.594 103.483 185.126 103.703C185.659 103.922 186.142 104.245 186.55 104.652C186.958 105.058 187.281 105.541 187.502 106.073C187.723 106.605 187.837 107.175 187.837 107.751V132.926"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M129 103.381H126.05L113.4 99.486L117.428 111.836V150.236C117.429 151.4 117.891 152.516 118.714 153.339C119.537 154.162 120.653 154.624 121.817 154.625H167.07"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M79.329 72.6V63.063C79.3285 61.8991 78.8659 60.7831 78.0429 59.9601C77.2199 59.1371 76.1039 58.6745 74.94 58.674H43.42"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M129.318 154.623V161.123C129.317 163.3 128.453 165.387 126.913 166.926C125.374 168.466 123.287 169.33 121.11 169.331H75.529C73.3522 169.33 71.2648 168.466 69.7256 166.926C68.1865 165.387 67.3215 163.3 67.321 161.123V109.923"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M62.191 109.917V162.546C62.1901 164.063 62.4882 165.566 63.0684 166.968C63.6486 168.37 64.4994 169.644 65.5723 170.717C66.6452 171.79 67.919 172.641 69.321 173.222C70.723 173.802 72.2256 174.101 73.743 174.1H122.554C124.071 174.101 125.574 173.802 126.976 173.222C128.377 172.642 129.651 171.791 130.724 170.718C131.797 169.645 132.648 168.371 133.228 166.97C133.808 165.568 134.107 164.065 134.106 162.548V154.625"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M32.305 58.674H13.286C12.1226 58.6753 11.0074 59.1383 10.185 59.9611C9.36269 60.784 8.90052 61.8996 8.89999 63.063V89.363"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M56.72 109.917H70.703L83.338 113.793L79.329 101.462V87.364"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M100.666 174.1C96.7864 178.375 92.08 181.819 86.8313 184.222C81.5827 186.626 75.9009 187.94 70.1298 188.085C64.3587 188.23 58.6182 187.203 53.2555 185.065C47.8929 182.928 43.0196 179.725 38.9305 175.65C34.8413 171.575 31.6213 166.712 29.4653 161.357C27.3092 156.002 26.262 150.265 26.3868 144.493C26.5117 138.722 27.806 133.036 30.1916 127.779C32.5772 122.522 36.0045 117.803 40.266 113.909"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M87.423 182.952L69.81 182.5C69.6554 182.486 69.4997 182.509 69.3557 182.567C69.2117 182.625 69.0835 182.717 68.9816 182.834C68.8796 182.951 68.8068 183.09 68.7692 183.241C68.7316 183.391 68.7301 183.549 68.765 183.7L69.565 186.968C73.1874 187.052 76.8114 186.9 80.414 186.512C77.113 187.863 73.681 188.868 70.173 189.512L71.807 194.262C71.8425 194.412 71.9136 194.552 72.0143 194.669C72.115 194.787 72.2425 194.878 72.3858 194.936C72.5292 194.993 72.6844 195.016 72.8382 195.001C72.9921 194.986 73.1402 194.935 73.27 194.851C78.5975 192.215 83.5078 188.809 87.843 184.743C88.0154 184.636 88.1499 184.477 88.2274 184.289C88.305 184.102 88.3218 183.895 88.2754 183.697C88.2291 183.499 88.1219 183.321 87.969 183.187C87.8161 183.054 87.6251 182.971 87.423 182.952V182.952Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M161.731 111.247C162.273 111.237 162.814 111.179 163.346 111.076L161.541 113.166"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M148.963 131.349C142.503 129.841 136.365 127.19 130.838 123.521C128.475 122.018 126.734 119.712 125.934 117.028C125.135 114.344 125.331 111.461 126.487 108.91L135.739 88.543C140.553 88.868 144.449 89.809 148.013 93.976L140.113 112.52C143.666 114.591 148.055 116.778 152.121 117.574C157.697 118.665 161.735 116.922 161.735 111.247C159.208 111.323 155.028 110.392 159.398 102.431C163.768 94.47 166.675 100.631 166.314 103.989C166.333 104.578 166.637 104.73 167.625 104.046C169.658 102.639 171.017 106.146 167.207 107.675C166.487 107.965 165.707 111.533 166.599 115.94C167.28 119.284 169.622 117.173 176.517 121.94C184.176 127.24 189.71 134.912 193.085 140.616C194.292 142.653 194.737 145.053 194.34 147.388C193.943 149.722 192.731 151.841 190.919 153.365L173.99 167.539C171.574 166.795 169.419 165.378 167.781 163.453C166.142 161.528 165.086 159.175 164.737 156.671L179.837 143.618L170.945 134.176"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M37.378 67.642C36.8128 67.025 36.5007 66.2177 36.504 65.381C36.919 65.6501 37.352 65.8904 37.8 66.1"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M36.618 57.743C37.492 54.779 41.672 50.675 43.118 56.926L43.441 58.94C44.448 68.14 40.078 67.167 37.798 66.103C37.798 66.103 36.204 68.46 39.123 68.949C39.591 69.027 39.909 69.034 40.023 69.049C37.743 72.393 33.523 72.602 27.977 70.721C33.134 67.799 34.99 61.488 34.361 60.86C31.461 57.968 34.017 55.275 35.368 57.345C36.013 58.334 36.356 58.314 36.603 57.782L36.618 57.743Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M23.974 90.932C24.411 90.191 24.895 89.397 25.427 88.542L25.1 94.736"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M49.006 86.053C49.111 83.8225 49.0538 81.5873 48.835 79.365L51.435 87.839"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M27.973 70.72C26.9502 71.3074 25.8502 71.7486 24.705 72.031C14.236 74.672 8.593 88.371 5.9 98.27C5.20048 100.837 5.51198 103.574 6.77034 105.918C8.02869 108.262 10.1381 110.035 12.664 110.87C20.0743 113.254 27.7831 114.585 35.564 114.822C37.7319 111.189 38.3869 106.849 37.388 102.738C31.4869 102.227 25.6433 101.19 19.927 99.638C21.0103 96.6181 22.3683 93.7039 23.984 90.932C25.406 95.721 24.862 93.876 26.384 99.087C32.654 100.113 40.045 100.569 47.018 98.802C48.1376 94.636 48.8064 90.3618 49.013 86.053C52.4076 88.7434 56.2111 90.873 60.279 92.361C61.845 92.9728 63.5178 93.2645 65.1984 93.2188C66.8791 93.1732 68.5335 92.791 70.064 92.095C76.927 88.969 81.217 86.623 89.558 80.372C89.615 75.413 87.411 71.955 82.889 70.036C77.569 74.007 71.261 78.073 65.466 80.372C61.4498 77.369 57.2067 74.6819 52.775 72.335C47.893 69.956 41.033 69.181 40.026 69.048"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M141.744 79.676C141.824 79.4483 141.958 79.2429 142.133 79.0766C142.308 78.9103 142.52 78.7877 142.751 78.719C143.757 78.453 145.239 80.562 144.764 83.279C144.519 84.754 143.482 85.42 142.892 83.196"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M143.795 79.175C143.963 79.0085 144.173 78.8904 144.403 78.833C145.412 78.574 146.949 80.106 146.588 82.861C146.4 84.292 145.54 84.641 144.822 82.872"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M136.766 88.6C139.027 84.534 138.854 83.394 139.445 81.456C139.729 80.525 140.127 79.704 140.945 79.499C141.945 79.247 143.218 80.942 142.845 83.599C142.691 84.699 141.212 84.473 140.945 81.68"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M147.329 93.235C148.051 91.658 153.088 82.459 152.516 82.196C151.891 81.908 148.488 84.932 148.488 84.932C148.488 84.932 144.498 85.483 144.764 88.032"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M148.469 84.932C150.141 78.301 148.869 72.732 148.526 73.722C147.878 75.602 147.082 80.622 146.588 82.842"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M140.034 82.842C140.413 82.7399 140.816 82.7641 141.18 82.911"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M85.2 71.233C88.848 70.302 107.316 72.753 106.518 74.558C101.939 75.258 95.066 74.566 91.109 76.838C90.843 76.991 89.909 77.638 89.399 77.997"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M85.713 71.138C92.819 69.466 100.685 60.156 94.073 69.58C93.446 70.625 93.142 71.214 94.035 71.423"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M91.375 76.686C94.985 75.261 113.928 80.03 100.78 74.976"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M91.394 76.667C92.894 75.867 107.259 81.667 99.659 76.876"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M47.3 109.917C50.226 111.517 51.254 114.385 50.264 115.161C49.7619 115.423 49.1891 115.516 48.63 115.427"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M48.4 108.226C51.326 109.826 52.349 112.687 51.364 113.47C51.1277 113.622 50.8625 113.725 50.585 113.77"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M35.953 114.135C39.2851 113.536 42.7198 113.925 45.833 115.256"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M45.643 111.57C48.417 113.204 49.154 115.499 48.227 116.339C47.14 117.322 43.496 116.814 42.47 114.211"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M37.473 103.343C39.943 103.267 49.483 103.704 49.519 104.426C49.56 105.262 47.296 105.737 47.296 105.737"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M37.492 103.362C40.5948 103.586 43.6448 104.285 46.536 105.433C46.536 105.433 54.368 108.433 57.916 109.214C59.096 109.473 55.716 110.867 49.88 109.29"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M26.377 99.087C25.6468 99.5235 25.0028 100.09 24.477 100.759"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M47.011 98.802L47.714 103.894"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M172.466 135.813C171.193 139.081 169.673 143.85 170.166 147.004C164.335 148.543 158.203 148.524 152.382 146.947C147.347 135.794 148.411 127.777 151.641 122.347"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M162.121 99C167.732 94.282 176.185 96.989 173.321 106.654C173.321 106.654 190.321 109.124 181.643 126.11"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M170.167 147C171.331 147.57 172.375 148.357 173.245 149.318"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M169.388 118.505L166.614 124.832C166.441 125.223 166.145 125.548 165.772 125.757C165.398 125.966 164.967 126.048 164.543 125.991L157.266 124.984C156.972 124.942 156.692 124.835 156.445 124.67C156.198 124.505 155.992 124.287 155.84 124.032C155.689 123.777 155.597 123.491 155.571 123.195C155.544 122.9 155.585 122.602 155.689 122.324L157.494 117.593"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M43.135 56.926L41.862 50.58C41.8152 50.2567 41.6647 49.9572 41.4331 49.7268C41.2015 49.4964 40.9013 49.3474 40.5778 49.3023C40.2542 49.2572 39.9247 49.3184 39.6389 49.4766C39.3531 49.6349 39.1264 49.8818 38.993 50.18C38.8801 49.8683 38.6696 49.6014 38.3928 49.419C38.116 49.2366 37.7877 49.1484 37.4567 49.1676C37.1258 49.1868 36.8099 49.3124 36.5561 49.5256C36.3022 49.7388 36.124 50.0283 36.048 50.351C35.9486 49.9901 35.7151 49.6807 35.3953 49.4862C35.0755 49.2916 34.6934 49.2264 34.3272 49.3041C33.961 49.3817 33.6382 49.5962 33.4248 49.9038C33.2114 50.2113 33.1235 50.5888 33.179 50.959C33.0573 50.6014 32.801 50.3052 32.4645 50.1335C32.128 49.9618 31.7378 49.9279 31.3767 50.0392C31.0157 50.1505 30.7123 50.3981 30.5308 50.7295C30.3494 51.0608 30.3043 51.4499 30.405 51.814C31.1533 54.0669 31.7874 56.3562 32.305 58.673C32.923 61.673 33.246 64.891 32.344 66.601"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M96.524 15.45C96.524 15.6716 96.4583 15.8882 96.3353 16.0725C96.2122 16.2568 96.0373 16.4004 95.8327 16.4854C95.628 16.5703 95.4028 16.5927 95.1854 16.5497C94.968 16.5067 94.7683 16.4002 94.6114 16.2437C94.4545 16.0872 94.3475 15.8878 94.3039 15.6705C94.2603 15.4533 94.2821 15.228 94.3665 15.0231C94.4508 14.8182 94.5941 14.6429 94.778 14.5194C94.962 14.3958 95.1784 14.3296 95.4 14.329C95.6976 14.3287 95.9832 14.4467 96.194 14.6569C96.4048 14.8671 96.5235 15.1523 96.524 15.45V15.45Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M101.407 15.45C101.407 15.6717 101.341 15.8884 101.218 16.0728C101.095 16.2571 100.92 16.4008 100.715 16.4857C100.51 16.5705 100.285 16.5927 100.067 16.5495C99.8498 16.5062 99.6501 16.3994 99.4933 16.2427C99.3365 16.0859 99.2298 15.8862 99.1865 15.6687C99.1433 15.4512 99.1655 15.2259 99.2503 15.021C99.3352 14.8162 99.4788 14.6411 99.6632 14.5179C99.8475 14.3947 100.064 14.329 100.286 14.329C100.583 14.3295 100.868 14.4478 101.078 14.6579C101.288 14.868 101.406 15.1529 101.407 15.45Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M106.309 15.45C106.309 15.6717 106.243 15.8884 106.12 16.0728C105.997 16.2571 105.822 16.4008 105.617 16.4857C105.412 16.5705 105.187 16.5927 104.969 16.5495C104.752 16.5062 104.552 16.3994 104.395 16.2427C104.239 16.0859 104.132 15.8862 104.089 15.6687C104.045 15.4512 104.067 15.2259 104.152 15.021C104.237 14.8162 104.381 14.6411 104.565 14.5179C104.75 14.3947 104.966 14.329 105.188 14.329C105.485 14.3295 105.77 14.4478 105.98 14.6579C106.19 14.868 106.308 15.1529 106.309 15.45Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M165.436 64.982H158.007C156.895 64.982 155.993 65.8837 155.993 66.996V74.425C155.993 75.5373 156.895 76.439 158.007 76.439H165.436C166.548 76.439 167.45 75.5373 167.45 74.425V66.996C167.45 65.8837 166.548 64.982 165.436 64.982Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M163.745 70.72C163.745 71.1183 163.627 71.5077 163.406 71.8389C163.184 72.1701 162.87 72.4283 162.502 72.5807C162.134 72.7331 161.729 72.773 161.338 72.6953C160.947 72.6176 160.589 72.4258 160.307 72.1441C160.025 71.8624 159.833 71.5036 159.756 71.1129C159.678 70.7222 159.718 70.3173 159.87 69.9493C160.023 69.5813 160.281 69.2667 160.612 69.0454C160.943 68.8241 161.333 68.706 161.731 68.706C162.265 68.7063 162.777 68.9185 163.155 69.2962C163.532 69.6738 163.745 70.1859 163.745 70.72Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M145.448 164.37C145.448 164.697 145.351 165.017 145.169 165.288C144.988 165.56 144.73 165.772 144.428 165.897C144.126 166.022 143.793 166.055 143.473 165.991C143.152 165.927 142.857 165.77 142.626 165.539C142.395 165.308 142.238 165.013 142.174 164.692C142.11 164.372 142.143 164.039 142.268 163.737C142.393 163.435 142.605 163.177 142.877 162.996C143.148 162.814 143.468 162.717 143.795 162.717C144.233 162.717 144.654 162.892 144.964 163.201C145.273 163.511 145.448 163.932 145.448 164.37V164.37Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M51.409 40.112V48.32"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M55.504 44.216H47.296"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M165.873 164.465C164.057 166.614 162.507 168.975 161.256 171.495C160.503 172.736 159.885 174.055 159.413 175.428C158.076 179.302 159.2 179.206 161.237 176.169C166.414 168.449 168.856 167.695 170.737 166.023"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M159.831 174.288C158.615 175.129 157.293 175.806 155.9 176.3C155.5 176.408 154.875 176.092 156.812 174.419C157.23 174.058 158.958 172.498 159.548 171.911C160.782 170.781 161.95 169.582 163.048 168.32"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M164.486 166.232C165.303 164.522 161.351 165.658 159.622 165.932C158.064 166.176 156.222 165.878 160.135 163.956C162.178 162.975 164.041 161.657 165.645 160.056"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M90.672 21.093L88.848 25.9L93.636 23.943C95.6133 25.2323 97.9255 25.9127 100.286 25.9C106.613 25.9 111.743 21.226 111.743 15.45C111.743 9.674 106.632 5 100.305 5C93.978 5 88.848 9.674 88.848 15.45C88.8586 17.4742 89.4958 19.4455 90.672 21.093V21.093Z"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M179.838 143.622L181.282 142.501"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M65.459 80.372L66.979 81.455"
        ></path>
        <path
          stroke="#5452ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.898 99.619L19.176 101.348"
        ></path>
      </g>
    </svg>
  );
}

export default WelcomeSvg;