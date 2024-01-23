const Medal = ({ rank }) => {

  //메달 svg 3개 모아놓은 배열
  const medalArray = [
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_iii_464_1164)">
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="#4686EC"
        />
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="url(#paint0_radial_464_1164)"
        />
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="url(#paint1_linear_464_1164)"
        />
      </g>
      <g filter="url(#filter1_iii_464_1164)">
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="#4686EC"
        />
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="url(#paint2_radial_464_1164)"
        />
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="url(#paint3_linear_464_1164)"
        />
      </g>
      <path
        d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
        fill="url(#paint4_linear_464_1164)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="10.0477"
        fill="url(#paint5_linear_464_1164)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="10.0477"
        fill="url(#paint6_linear_464_1164)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="8.68832"
        fill="url(#paint7_linear_464_1164)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint8_linear_464_1164)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint9_radial_464_1164)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint10_radial_464_1164)"
      />
      <g filter="url(#filter2_ii_464_1164)">
        <path
          d="M17.2197 16.8C17.2197 16.3582 16.8616 16 16.4197 16H14.4791C14.2582 16 14.0791 16.1791 14.0791 16.4V17.5766C14.0791 17.7975 14.2582 17.9766 14.4791 17.9766H14.9229C15.0609 17.9766 15.1729 18.0885 15.1729 18.2266V24C15.1729 24.2761 15.3967 24.5 15.6729 24.5H16.7197C16.9959 24.5 17.2197 24.2761 17.2197 24V16.8Z"
          fill="#6F3955"
        />
      </g>
      <path
        d="M17.2197 16.8C17.2197 16.3582 16.8616 16 16.4197 16H14.4791C14.2582 16 14.0791 16.1791 14.0791 16.4V17.5766C14.0791 17.7975 14.2582 17.9766 14.4791 17.9766H14.9229C15.0609 17.9766 15.1729 18.0885 15.1729 18.2266V24C15.1729 24.2761 15.3967 24.5 15.6729 24.5H16.7197C16.9959 24.5 17.2197 24.2761 17.2197 24V16.8Z"
        fill="url(#paint11_linear_464_1164)"
      />
      <defs>
        <filter
          id="filter0_iii_464_1164"
          x="3.60986"
          y="2.3625"
          width="14.889"
          height="10.4344"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1164"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1164"
            result="effect2_innerShadow_464_1164"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.25" dy="0.25" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_464_1164"
            result="effect3_innerShadow_464_1164"
          />
        </filter>
        <filter
          id="filter1_iii_464_1164"
          x="13.2979"
          y="2.3625"
          width="14.889"
          height="10.4344"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1164"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1164"
            result="effect2_innerShadow_464_1164"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.25" dy="0.25" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_464_1164"
            result="effect3_innerShadow_464_1164"
          />
        </filter>
        <filter
          id="filter2_ii_464_1164"
          x="13.7791"
          y="15.8"
          width="3.64063"
          height="9"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.3" dy="0.3" />
          <feGaussianBlur stdDeviation="0.3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.392157 0 0 0 0 0.164706 0 0 0 0 0.254902 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1164"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.501961 0 0 0 0 0.333333 0 0 0 0 0.360784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1164"
            result="effect2_innerShadow_464_1164"
          />
        </filter>
        <radialGradient
          id="paint0_radial_464_1164"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.1027 11.8416) rotate(-123.321) scale(4.60352 17.1923)"
        >
          <stop stop-color="#3669D9" />
          <stop offset="1" stop-color="#3669D9" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_464_1164"
          x1="6.58159"
          y1="2.02319"
          x2="8.37674"
          y2="6.49275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3D89EC" />
          <stop offset="1" stop-color="#3D89EC" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_464_1164"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.7439 11.8416) rotate(-57.2648) scale(3.0487 6.68733)"
        >
          <stop stop-color="#3669D9" />
          <stop offset="1" stop-color="#3669D9" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_464_1164"
          x1="25.2651"
          y1="2.02319"
          x2="23.4699"
          y2="6.49275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3D89EC" />
          <stop offset="1" stop-color="#3D89EC" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_464_1164"
          x1="15.7486"
          y1="7.06334"
          x2="16.0863"
          y2="7.24966"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A6DD8" />
          <stop offset="1" stop-color="#1A6DD8" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_464_1164"
          x1="21.4179"
          y1="16.5701"
          x2="14.4134"
          y2="23.4336"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F4C654" />
          <stop offset="1" stop-color="#DC9729" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_464_1164"
          x1="12.5361"
          y1="30.6676"
          x2="14.8022"
          y2="17.5274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FA8547" />
          <stop offset="1" stop-color="#FA8547" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_464_1164"
          x1="23.9635"
          y1="18.6135"
          x2="16.0472"
          y2="18.6135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F9A842" />
          <stop offset="1" stop-color="#FAA742" />
          <stop offset="1" stop-color="#FAA742" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_464_1164"
          x1="12.5405"
          y1="19.1699"
          x2="23.855"
          y2="19.1699"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FAA945" />
          <stop offset="1" stop-color="#EC9936" />
        </linearGradient>
        <radialGradient
          id="paint9_radial_464_1164"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.9876 20.1317) rotate(180) scale(10.5257 8.96905)"
        >
          <stop offset="0.893104" stop-color="#F7B44D" stop-opacity="0" />
          <stop offset="1" stop-color="#F7B44D" />
        </radialGradient>
        <radialGradient
          id="paint10_radial_464_1164"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.0775 20.1317) scale(10.128 8.88135)"
        >
          <stop offset="0.878757" stop-color="#D2801F" stop-opacity="0" />
          <stop offset="0.98268" stop-color="#D2801F" />
        </radialGradient>
        <linearGradient
          id="paint11_linear_464_1164"
          x1="16.4229"
          y1="24.5"
          x2="16.4229"
          y2="23.6835"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#693B2E" />
          <stop offset="1" stop-color="#693B2E" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>,
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_iii_464_1213)">
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="#4686EC"
        />
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="url(#paint0_radial_464_1213)"
        />
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="url(#paint1_linear_464_1213)"
        />
      </g>
      <g filter="url(#filter1_iii_464_1213)">
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="#4686EC"
        />
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="url(#paint2_radial_464_1213)"
        />
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="url(#paint3_linear_464_1213)"
        />
      </g>
      <path
        d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
        fill="url(#paint4_linear_464_1213)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="10.0477"
        fill="url(#paint5_linear_464_1213)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="10.0477"
        fill="url(#paint6_linear_464_1213)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="8.68832"
        fill="url(#paint7_linear_464_1213)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint8_linear_464_1213)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint9_radial_464_1213)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint10_radial_464_1213)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint11_radial_464_1213)"
      />
      <g filter="url(#filter2_ii_464_1213)">
        <path
          d="M18.0368 24.5719H14.0668C13.6768 24.5719 13.3268 24.3519 13.1568 23.9919C12.9868 23.6419 13.0368 23.2219 13.2868 22.9219L16.5868 18.8719C16.8468 18.5519 16.7268 18.2119 16.6868 18.1119C16.6368 17.9919 16.4768 17.7219 16.1068 17.7119C16.0968 17.7119 16.0768 17.7119 16.0568 17.7119C15.7368 17.7119 15.4468 17.8619 15.2568 18.1219C14.9368 18.5719 14.3068 18.6819 13.8468 18.3619C13.3868 18.0419 13.2868 17.4119 13.6068 16.9519C14.1668 16.1619 15.0768 15.6919 16.0468 15.6919C16.0968 15.6919 16.1368 15.6919 16.1768 15.6919C17.1968 15.7419 18.0868 16.3519 18.5068 17.2819C18.9368 18.2419 18.7968 19.3319 18.1368 20.1419L16.1868 22.5419H18.0268C18.5868 22.5419 19.0368 22.9919 19.0368 23.5519C19.0368 24.1119 18.5968 24.5719 18.0368 24.5719Z"
          fill="#6A6372"
        />
      </g>
      <defs>
        <filter
          id="filter0_iii_464_1213"
          x="3.60986"
          y="2.3625"
          width="14.889"
          height="10.4344"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1213"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1213"
            result="effect2_innerShadow_464_1213"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.25" dy="0.25" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_464_1213"
            result="effect3_innerShadow_464_1213"
          />
        </filter>
        <filter
          id="filter1_iii_464_1213"
          x="13.2979"
          y="2.3625"
          width="14.889"
          height="10.4344"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1213"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1213"
            result="effect2_innerShadow_464_1213"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.25" dy="0.25" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_464_1213"
            result="effect3_innerShadow_464_1213"
          />
        </filter>
        <filter
          id="filter2_ii_464_1213"
          x="12.7571"
          y="15.4919"
          width="6.47949"
          height="9.37988"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.3" dy="0.3" />
          <feGaussianBlur stdDeviation="0.3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.286275 0 0 0 0 0.223529 0 0 0 0 0.345098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1213"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.482353 0 0 0 0 0.47451 0 0 0 0 0.490196 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1213"
            result="effect2_innerShadow_464_1213"
          />
        </filter>
        <radialGradient
          id="paint0_radial_464_1213"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.1027 11.8416) rotate(-123.321) scale(4.60352 17.1923)"
        >
          <stop stop-color="#3669D9" />
          <stop offset="1" stop-color="#3669D9" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_464_1213"
          x1="6.58159"
          y1="2.02319"
          x2="8.37674"
          y2="6.49275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3D89EC" />
          <stop offset="1" stop-color="#3D89EC" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_464_1213"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.7439 11.8416) rotate(-57.2648) scale(3.0487 6.68733)"
        >
          <stop stop-color="#3669D9" />
          <stop offset="1" stop-color="#3669D9" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_464_1213"
          x1="25.2651"
          y1="2.02319"
          x2="23.4699"
          y2="6.49275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3D89EC" />
          <stop offset="1" stop-color="#3D89EC" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_464_1213"
          x1="15.7486"
          y1="7.06334"
          x2="16.0863"
          y2="7.24966"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A6DD8" />
          <stop offset="1" stop-color="#1A6DD8" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_464_1213"
          x1="23.7972"
          y1="14.9374"
          x2="14.4497"
          y2="23.4841"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EFEAF6" />
          <stop offset="1" stop-color="#B5A8C3" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_464_1213"
          x1="12.5361"
          y1="30.6676"
          x2="14.8022"
          y2="17.5274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D0A9F4" />
          <stop offset="1" stop-color="#D0A9F4" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_464_1213"
          x1="23.9635"
          y1="18.6135"
          x2="16.0472"
          y2="18.6135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D3C6E2" />
          <stop offset="1" stop-color="#D6C6E8" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_464_1213"
          x1="11.2861"
          y1="22.1026"
          x2="23.909"
          y2="18.2831"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E0D3EF" />
          <stop offset="1" stop-color="#C1B0D4" />
        </linearGradient>
        <radialGradient
          id="paint9_radial_464_1213"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.9251 18.9818) rotate(156.644) scale(11.397 9.71148)"
        >
          <stop offset="0.837399" stop-color="#F6ECFE" stop-opacity="0" />
          <stop offset="1" stop-color="#F6ECFE" />
        </radialGradient>
        <radialGradient
          id="paint10_radial_464_1213"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.078 21.0313) rotate(-41.2938) scale(8.96398 8.60716)"
        >
          <stop offset="0.909611" stop-color="#B396CF" stop-opacity="0" />
          <stop offset="0.991989" stop-color="#B796D5" />
        </radialGradient>
        <radialGradient
          id="paint11_radial_464_1213"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.828 19.5) rotate(37.9308) scale(8.43895 9.56333)"
        >
          <stop offset="0.925972" stop-color="#AB9CBB" stop-opacity="0" />
          <stop offset="1" stop-color="#AB9CBB" />
        </radialGradient>
      </defs>
    </svg>,
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_iii_464_1261)">
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="#4686EC"
        />
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="url(#paint0_radial_464_1261)"
        />
        <path
          d="M14.0344 3.55204L18.2988 10.8362L12.2832 12.5469C8.12804 11.172 5.6805 8.52904 4.20508 5.8125C3.58283 4.66681 3.58789 2.5625 6.06083 2.5625H12.3084C13.0186 2.5625 13.6756 2.93914 14.0344 3.55204Z"
          fill="url(#paint1_linear_464_1261)"
        />
      </g>
      <g filter="url(#filter1_iii_464_1261)">
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="#4686EC"
        />
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="url(#paint2_radial_464_1261)"
        />
        <path
          d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
          fill="url(#paint3_linear_464_1261)"
        />
      </g>
      <path
        d="M17.8123 3.55204L13.5479 10.8362L19.5635 12.5469C23.7186 11.172 26.1662 8.52904 27.6416 5.8125C28.2639 4.66681 28.2588 2.5625 25.7858 2.5625H19.5383C18.828 2.5625 18.1711 2.93914 17.8123 3.55204Z"
        fill="url(#paint4_linear_464_1261)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="10.0477"
        fill="url(#paint5_linear_464_1261)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="10.0477"
        fill="url(#paint6_linear_464_1261)"
      />
      <circle
        cx="16.0472"
        cy="20.1317"
        r="8.68832"
        fill="url(#paint7_linear_464_1261)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint8_linear_464_1261)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint9_radial_464_1261)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint10_radial_464_1261)"
      />
      <circle
        cx="16.0468"
        cy="20.1317"
        r="7.58486"
        fill="url(#paint11_radial_464_1261)"
      />
      <g filter="url(#filter2_iii_464_1261)">
        <path
          d="M17.459 18.675L18.5065 16.8648C18.6794 16.5597 18.6794 16.1936 18.5065 15.8885C18.3336 15.5834 18.0082 15.4004 17.6624 15.4004H14.5709C14.0319 15.4004 13.5946 15.8377 13.5946 16.3767C13.5946 16.9156 14.0319 17.3529 14.5709 17.3529H15.5426C15.7348 17.3529 15.8551 17.5607 15.7595 17.7273L15.2217 18.6648C15.0895 18.8275 15.0082 19.0411 15.0082 19.2648C15.0082 19.8038 15.4455 20.2411 15.9844 20.2411C16.5946 20.2411 17.0929 20.7394 17.0929 21.3495C17.0929 21.9597 16.5946 22.458 15.9844 22.458C15.5166 22.458 15.0997 22.1631 14.9471 21.7258C14.7641 21.2173 14.2149 20.9631 13.7065 21.136C13.198 21.319 12.9336 21.8682 13.1166 22.3767C13.5539 23.5868 14.7031 24.4004 15.9844 24.4004C17.6624 24.4004 19.0353 23.0377 19.0353 21.3495C19.0251 20.1902 18.3946 19.1936 17.459 18.675Z"
          fill="#6C3F48"
        />
      </g>
      <defs>
        <filter
          id="filter0_iii_464_1261"
          x="3.60986"
          y="2.3625"
          width="14.889"
          height="10.4344"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1261"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1261"
            result="effect2_innerShadow_464_1261"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.25" dy="0.25" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_464_1261"
            result="effect3_innerShadow_464_1261"
          />
        </filter>
        <filter
          id="filter1_iii_464_1261"
          x="13.2979"
          y="2.3625"
          width="14.889"
          height="10.4344"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1261"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1261"
            result="effect2_innerShadow_464_1261"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.25" dy="0.25" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_464_1261"
            result="effect3_innerShadow_464_1261"
          />
        </filter>
        <filter
          id="filter2_iii_464_1261"
          x="12.7586"
          y="15.2004"
          width="6.47656"
          height="9.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.3" dy="0.3" />
          <feGaussianBlur stdDeviation="0.3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.270588 0 0 0 0 0.113725 0 0 0 0 0.0745098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_464_1261"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="-0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.490196 0 0 0 0 0.352941 0 0 0 0 0.321569 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_464_1261"
            result="effect2_innerShadow_464_1261"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.270588 0 0 0 0 0.113725 0 0 0 0 0.0745098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_464_1261"
            result="effect3_innerShadow_464_1261"
          />
        </filter>
        <radialGradient
          id="paint0_radial_464_1261"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.1027 11.8416) rotate(-123.321) scale(4.60352 17.1923)"
        >
          <stop stop-color="#3669D9" />
          <stop offset="1" stop-color="#3669D9" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_464_1261"
          x1="6.58159"
          y1="2.02319"
          x2="8.37674"
          y2="6.49275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3D89EC" />
          <stop offset="1" stop-color="#3D89EC" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_464_1261"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.7439 11.8416) rotate(-57.2648) scale(3.0487 6.68733)"
        >
          <stop stop-color="#3669D9" />
          <stop offset="1" stop-color="#3669D9" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_464_1261"
          x1="25.2651"
          y1="2.02319"
          x2="23.4699"
          y2="6.49275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3D89EC" />
          <stop offset="1" stop-color="#3D89EC" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_464_1261"
          x1="15.7486"
          y1="7.06334"
          x2="16.0863"
          y2="7.24966"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A6DD8" />
          <stop offset="1" stop-color="#1A6DD8" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_464_1261"
          x1="23.7972"
          y1="14.9374"
          x2="14.4497"
          y2="23.4841"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F6BC7F" />
          <stop offset="1" stop-color="#A76740" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_464_1261"
          x1="12.5361"
          y1="30.6676"
          x2="14.8022"
          y2="17.5274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B05B5B" />
          <stop offset="1" stop-color="#B05B5B" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_464_1261"
          x1="23.9635"
          y1="18.6135"
          x2="16.0472"
          y2="18.6135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CD8858" />
          <stop offset="1" stop-color="#D28D59" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_464_1261"
          x1="11.2861"
          y1="22.1026"
          x2="23.909"
          y2="18.2831"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D38E5F" />
          <stop offset="1" stop-color="#BE794E" />
        </linearGradient>
        <radialGradient
          id="paint9_radial_464_1261"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.9251 18.9818) rotate(156.644) scale(11.397 9.71148)"
        >
          <stop offset="0.837399" stop-color="#E5AC75" stop-opacity="0" />
          <stop offset="1" stop-color="#E5AC75" />
        </radialGradient>
        <radialGradient
          id="paint10_radial_464_1261"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.078 21.0313) rotate(-41.2938) scale(8.96398 8.60716)"
        >
          <stop offset="0.909611" stop-color="#B36441" stop-opacity="0" />
          <stop offset="1" stop-color="#B36441" />
        </radialGradient>
        <radialGradient
          id="paint11_radial_464_1261"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.828 19.5) rotate(37.9308) scale(8.43895 9.56333)"
        >
          <stop offset="0.925972" stop-color="#AB662B" stop-opacity="0" />
          <stop offset="1" stop-color="#AB662B" />
        </radialGradient>
      </defs>
    </svg>,
  ];

  return medalArray[rank - 1];
};

export default Medal;
