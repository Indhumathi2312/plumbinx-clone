"use client";

import React from "react";
import Link from "next/link";
import {
  footerQuickLinkColumn,
  footerCompanyColumn,
  footerOtherPagesColumn,
  footerInfo,
} from "@/src/data/footer";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAFBF9] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto bg-[#0F110F] text-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 shadow-2xl">
        {/* Top Brand Logo Section */}
        <div className="mb-12 sm:mb-16">
          <Link href="/" className="inline-flex items-center gap-4 sm:gap-6 group">
            {/* Green Squircle Logo Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#02CD31] rounded-[20px] sm:rounded-[28px] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-md">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.0441 7.60927C28.8868 6.80331 30.2152 6.79965 31.0622 7.58229L31.1425 7.66005L31.4164 7.94729C34.1911 10.9318 35.2251 14.4098 34.9599 17.8065C34.6908 21.2511 33.1012 24.4994 30.8836 27.0664C28.6673 29.6316 25.7084 31.6519 22.51 32.5287C19.2714 33.4164 15.7294 33.1334 12.6547 30.9629C10.0469 29.1218 9.05406 26.1465 8.98661 23.2561C7.52323 22.5384 5.98346 21.6463 4.36789 20.5615L3.941 20.2716L3.85006 20.206C2.93285 19.5053 2.72313 18.2084 3.39161 17.2564C4.06029 16.3043 5.36233 16.046 6.34665 16.6512L6.44134 16.7126L6.83024 16.9771C7.79805 17.6269 8.72153 18.1903 9.59966 18.6767C10.1661 16.6889 11.1047 14.7802 12.3413 13.207C14.1938 10.8501 16.9713 8.96525 20.374 9.24647C23.439 9.49995 25.7036 11.081 26.8725 13.3122C28.0044 15.4728 28.0211 18.0719 27.0319 20.307C26.0234 22.5857 23.976 24.484 21.0309 25.2662C18.9114 25.8291 16.4284 25.7905 13.6267 25.0367V22.2555C15.8643 22.7844 17.7788 22.8465 19.3496 22.4273C21.4392 21.87 22.7849 20.4704 23.479 18.8986C24.1678 17.3392 24.1378 15.6565 23.3644 14.2255C22.6133 12.8359 21.1444 11.8398 18.9959 11.6608C16.8093 11.4786 14.8698 12.8407 13.4312 14.6644C12.3274 16.0638 11.4589 17.8485 10.9705 19.7891C12.0298 20.3235 13.1118 20.932 14.2492 21.6166C14.7397 21.9113 15.1706 22.0934 15.4777 22.2228C15.5458 22.2515 15.5898 22.2699 15.6022 22.2751C16.4801 22.6433 17.5195 22.2662 17.9238 21.4328C18.3282 20.5993 17.9443 19.6253 17.0664 19.2571L17.026 19.2401C16.8078 19.1486 16.4719 19.0062 16.0592 18.7583C15.1764 18.2279 14.364 17.7554 13.5658 17.3093C13.8829 16.5925 14.2697 15.9351 14.7291 15.3526C15.666 14.1646 16.8837 13.4475 18.4239 13.5758C19.9882 13.7061 20.893 14.2755 21.3653 15.1492C21.8447 16.0361 21.8659 17.1517 21.3508 18.318C20.8415 19.4709 19.8665 20.4497 18.3848 20.845C17.4479 21.095 16.3262 21.0538 15.0118 20.7303C15.438 18.2709 16.6346 15.9926 18.4116 14.3725C19.3496 13.5173 20.678 13.5209 21.525 14.3036L21.6053 14.3813L21.8792 14.6686C22.7219 15.548 24.0503 15.5517 24.8973 14.769L24.9776 14.6913L28.0441 11.4727C28.8868 10.6668 28.8906 9.33835 28.0441 8.55571L27.9638 8.47795L27.6899 8.19071C26.8472 7.31131 25.5188 7.30765 24.6718 8.09029L24.5915 8.16805L21.525 11.3867C20.6823 12.1926 19.3539 12.1963 18.5069 11.4136L18.4266 11.3359L18.1527 11.0487C17.31 10.1693 15.9816 10.1656 15.1346 10.9482L15.0543 11.026C12.8711 13.313 11.4158 16.1432 10.7933 19.1673C10.0886 18.7758 9.33388 18.3182 8.53026 17.777C7.75908 17.2579 7.02677 16.7649 6.32626 16.293C6.31306 16.2842 6.30006 16.2754 6.28723 16.2667L6.22019 16.2215C5.07436 15.4526 3.55877 15.7533 2.7782 16.8617C1.99763 17.9701 2.2423 19.4831 3.32488 20.3015L3.43285 20.3831L3.84029 20.6601C5.46747 11.7531 7.01777 12.6517 8.49089 13.3742C8.5284 16.6346 9.64506 20.0076 12.6394 22.127C16.1264 24.59 20.1436 24.9109 23.8152 23.9317C27.2476 23.0163 30.7001 20.7766 33.2981 17.7661C35.8974 14.7542 37.708 11.0256 37.4014 7.09848C37.0948 3.17135 34.6934 -0.6015 31.4164 1.10905C28.1394 2.8196 28.0441 7.60927 28.0441 7.60927Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Giant Text */}
            <span className="font-bold text-5xl sm:text-7xl lg:text-[88px] tracking-tight text-white font-figtree leading-none select-none">
              Plumbinx
            </span>
          </Link>
        </div>

        {/* 3 Columns Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
          {/* Column 1: Quick link */}
          <div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-4 tracking-wide font-figtree">
              {footerQuickLinkColumn.title}
            </h3>
            <ul className="space-y-3">
              {footerQuickLinkColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-normal font-figtree inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-4 tracking-wide font-figtree">
              {footerCompanyColumn.title}
            </h3>
            <ul className="space-y-3">
              {footerCompanyColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-normal font-figtree inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Other Pages */}
          <div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-4 tracking-wide font-figtree">
              {footerOtherPagesColumn.title}
            </h3>
            <ul className="space-y-3">
              {footerOtherPagesColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-normal font-figtree inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Thin Horizontal Divider Line */}
        <div className="w-full border-t border-white/10 mb-6 sm:mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-normal text-white/70 font-figtree">
          <div>{footerInfo.copyrightLeft}</div>
          <div>{footerInfo.copyrightRight}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
