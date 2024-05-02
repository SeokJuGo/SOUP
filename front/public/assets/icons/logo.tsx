import React from 'react'

type Fill = {
  logoColor: string;
  leafColor: string;
}
const logo = ({ logoColor,leafColor }: Fill) => (
  <svg width="80" height="80" viewBox="0 0 134 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.2381 54.028C13.4461 54.028 11.7821 53.836 10.2461 53.452C8.71013 53.068 7.31813 52.54 6.07013 51.868C4.82213 51.196 3.70213 50.428 2.71013 49.564C1.75013 48.668 0.934125 47.708 0.262125 46.684L7.99013 41.068C8.79013 42.7 9.86213 43.948 11.2061 44.812C12.5501 45.676 14.1661 46.108 16.0541 46.108C17.3341 46.108 18.4061 45.836 19.2701 45.292C20.1661 44.716 20.6941 43.996 20.8541 43.132C20.9501 42.492 20.8381 41.948 20.5181 41.5C20.1981 41.052 19.7181 40.668 19.0781 40.348C18.4701 39.996 17.7501 39.676 16.9181 39.388C16.0861 39.1 15.2061 38.812 14.2781 38.524C13.0621 38.14 11.8301 37.692 10.5821 37.18C9.36613 36.668 8.29413 35.996 7.36613 35.164C6.43813 34.332 5.75013 33.292 5.30213 32.044C4.85413 30.796 4.79013 29.228 5.11013 27.34C5.36613 25.9 5.89413 24.604 6.69413 23.452C7.52613 22.3 8.55013 21.324 9.76613 20.524C10.9821 19.692 12.3421 19.052 13.8461 18.604C15.3821 18.156 16.9661 17.932 18.5981 17.932C20.3261 17.932 21.8781 18.076 23.2541 18.364C24.6301 18.652 25.8621 19.068 26.9501 19.612C28.0701 20.156 29.0781 20.828 29.9741 21.628C30.8701 22.396 31.7021 23.276 32.4701 24.268L25.1261 29.212C24.5821 28.188 23.7181 27.276 22.5341 26.476C21.3501 25.644 19.8461 25.228 18.0221 25.228C16.6461 25.228 15.5741 25.484 14.8061 25.996C14.0381 26.508 13.5741 27.18 13.4141 28.012C13.3181 28.556 13.4141 29.02 13.7021 29.404C14.0221 29.756 14.4701 30.092 15.0461 30.412C15.6541 30.7 16.3581 30.972 17.1581 31.228C17.9581 31.484 18.8061 31.756 19.7021 32.044C20.9501 32.428 22.2141 32.892 23.4941 33.436C24.7741 33.98 25.8941 34.716 26.8541 35.644C27.8461 36.54 28.5821 37.676 29.0621 39.052C29.5421 40.396 29.6061 42.092 29.2541 44.14C28.9981 45.484 28.4861 46.764 27.7181 47.98C26.9821 49.164 26.0061 50.204 24.7901 51.1C23.6061 51.996 22.1981 52.716 20.5661 53.26C18.9661 53.772 17.1901 54.028 15.2381 54.028ZM45.3341 54.028C43.0301 54.028 41.0141 53.596 39.2861 52.732C37.5901 51.868 36.2141 50.732 35.1581 49.324C34.1021 47.916 33.3661 46.3 32.9501 44.476C32.5661 42.652 32.5501 40.78 32.9021 38.86C33.2221 37.228 33.7981 35.692 34.6301 34.252C35.4621 32.812 36.5021 31.564 37.7501 30.508C39.0301 29.42 40.4861 28.572 42.1181 27.964C43.7501 27.356 45.5101 27.052 47.3981 27.052C49.6701 27.052 51.6541 27.484 53.3501 28.348C55.0781 29.18 56.4701 30.3 57.5261 31.708C58.6141 33.116 59.3501 34.732 59.7341 36.556C60.1501 38.348 60.1821 40.204 59.8301 42.124C59.5101 43.788 58.9501 45.356 58.1501 46.828C57.3501 48.268 56.3261 49.532 55.0781 50.62C53.8301 51.676 52.3741 52.508 50.7101 53.116C49.0781 53.724 47.2861 54.028 45.3341 54.028ZM45.8621 46.588C47.3341 46.588 48.6461 46.108 49.7981 45.148C50.9821 44.156 51.7181 42.844 52.0061 41.212C52.1661 40.348 52.1501 39.516 51.9581 38.716C51.7981 37.884 51.4941 37.164 51.0461 36.556C50.5981 35.916 50.0221 35.404 49.3181 35.02C48.6141 34.636 47.8141 34.428 46.9181 34.396C46.1821 34.396 45.4781 34.524 44.8061 34.78C44.1341 35.036 43.5101 35.404 42.9341 35.884C42.3901 36.364 41.9101 36.94 41.4941 37.612C41.1101 38.284 40.8541 39.02 40.7261 39.82C40.5661 40.684 40.5821 41.532 40.7741 42.364C40.9661 43.164 41.2861 43.884 41.7341 44.524C42.1821 45.132 42.7581 45.628 43.4621 46.012C44.1661 46.396 44.9661 46.588 45.8621 46.588ZM70.6256 54.028C67.6176 54.028 65.4416 53.052 64.0976 51.1C62.7536 49.148 62.4016 46.46 63.0416 43.036L65.7296 27.58H73.9856L71.3936 42.172C71.1056 43.772 71.2176 44.972 71.7296 45.772C72.2736 46.572 73.1696 46.972 74.4176 46.972C75.6016 46.972 76.5936 46.572 77.3936 45.772C78.2256 44.94 78.7856 43.676 79.0736 41.98L81.6656 27.58H89.6816L85.1216 53.5H77.1536L77.6816 50.524C76.7856 51.644 75.7616 52.508 74.6096 53.116C73.4576 53.724 72.1296 54.028 70.6256 54.028ZM94.1839 27.58H102.008L101.48 30.556C102.216 29.532 103.144 28.7 104.264 28.06C105.416 27.42 106.808 27.084 108.44 27.052C110.168 27.052 111.752 27.436 113.192 28.204C114.632 28.972 115.816 30.028 116.744 31.372C117.704 32.716 118.376 34.3 118.76 36.124C119.144 37.916 119.16 39.836 118.808 41.884C118.52 43.676 117.976 45.324 117.176 46.828C116.408 48.3 115.448 49.58 114.296 50.668C113.144 51.724 111.832 52.556 110.36 53.164C108.92 53.74 107.368 54.028 105.704 54.028C103.816 54.028 102.248 53.676 101 52.972C99.7839 52.236 98.8559 51.244 98.2159 49.996L95.7679 63.868H87.7519L94.1839 27.58ZM104.696 46.588C105.496 46.588 106.248 46.444 106.952 46.156C107.656 45.868 108.28 45.484 108.824 45.004C109.4 44.524 109.864 43.964 110.216 43.324C110.568 42.652 110.808 41.932 110.936 41.164C111.064 40.3 111.032 39.468 110.84 38.668C110.68 37.868 110.376 37.164 109.928 36.556C109.48 35.916 108.888 35.42 108.152 35.068C107.448 34.684 106.632 34.492 105.704 34.492C104.168 34.492 102.824 35.02 101.672 36.076C100.552 37.1 99.8479 38.396 99.5599 39.964C99.3679 40.86 99.3679 41.708 99.5599 42.508C99.7519 43.308 100.072 44.012 100.52 44.62C101 45.228 101.592 45.708 102.296 46.06C103.032 46.412 103.832 46.588 104.696 46.588ZM125.123 54.028C124.387 54.028 123.731 53.884 123.155 53.596C122.579 53.34 122.099 52.972 121.715 52.492C121.331 52.012 121.059 51.452 120.899 50.812C120.771 50.172 120.771 49.5 120.899 48.796C121.123 47.516 121.731 46.492 122.723 45.724C123.715 44.956 124.835 44.572 126.083 44.572C126.851 44.572 127.523 44.716 128.099 45.004C128.675 45.292 129.139 45.676 129.491 46.156C129.875 46.636 130.131 47.196 130.259 47.836C130.387 48.476 130.371 49.148 130.211 49.852C129.955 51.068 129.395 52.076 128.531 52.876C127.699 53.644 126.563 54.028 125.123 54.028Z"
      fill={logoColor} />
    <g clipPath="url(#clip0_330_536)">
      <path opacity="0.807" fillRule="evenodd" clipRule="evenodd"
            d="M121.867 4.22895C125.768 3.25707 129.668 3.25696 134 4.22895C133.198 17.4265 126.843 23.2583 114.934 21.7243C114.869 24.3546 114.581 26.9465 114.068 29.5C112.912 29.5 111.757 29.5 110.601 29.5C110.669 26.8254 110.813 24.2335 111.035 21.7243C102.849 19.8909 99.6711 14.3831 101.502 5.20092C106.07 5.55892 110.259 7.17887 114.068 10.0607C116.307 7.3583 118.907 5.41435 121.867 4.22895ZM125.334 7.14484C129.821 6.16511 131.121 7.78509 129.234 12.0047C127.06 16.8645 121.435 20.2663 115.801 18.8084C116.235 10.5466 121.002 8.09077 125.334 7.14484ZM103.236 8.60276C108.741 7.14483 112.226 12.8429 111.035 18.3224C106.702 18.8084 102.369 12.9766 103.236 8.60276Z"
            fill={leafColor} />
    </g>
    <defs>
      <clipPath id="clip0_330_536">
        <rect width="33" height="26" fill="white" transform="translate(101 3.5)" />
      </clipPath>
    </defs>
  </svg>

)

export default logo;