import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
          <defs>
              <filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
                  <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/>
                  <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                  <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/>
              </filter>
              <filter id="d" width="123.3%" height="114.6%" x="-11.7%" y="-5.2%" filterUnits="objectBoundingBox">
                  <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/>
                  <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                  <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/>
              </filter>
              <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
                  <stop offset="100%" stopOpacity=".5"/>
              </linearGradient>
              <circle id="b" cx="16" cy="15" r="15"/>
              <path id="e" d="M16.498 20.968L24 16.616l-7.502 10.379L9 16.615l7.498 4.351zm0-17.968l7.497 12.22-7.497 4.353L9 15.22 16.498 3z"/>
          </defs>
          <g fill="none" fillRule="evenodd">
              <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
              <use fill="#627EEA" xlinkHref="#b"/>
              <use fill="url(#c)" style={{mixBlendMode: 'soft-light'}} xlinkHref="#b"/>
              <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097"/>
              <g fillRule="nonzero"><use fill="#000" filter="url(#d)" xlinkHref="#e"/>
                <use fill="#FFF" fillOpacity="0" fillRule="evenodd" xlinkHref="#e"/>
              </g>
              <g fill="#FFF" fillRule="nonzero">
                  <path fillOpacity=".602" d="M16.498 3v8.87l7.497 3.35z"/>
                  <path d="M16.498 3L9 15.22l7.498-3.35z"/>
                  <path fillOpacity=".602" d="M16.498 20.968v6.027L24 16.616z"/>
                  <path d="M16.498 26.995v-6.028L9 16.616z"/>
                  <path fillOpacity=".2" d="M16.498 19.573l7.497-4.353-7.497-3.348z"/>
                  <path fillOpacity=".602" d="M9 15.22l7.498 4.353v-7.701z"/>
              </g>
          </g>
      </svg>
    </Svg>
  );
};

export default Icon;
