import svgPaths from "./svg-k2j87ddur7";
import imgCustomImg001CopyrightJpg from "figma:asset/c175e874c4aacf4ffa7f1e2ab0fc3be96ac8d0aa.webp";
import imgCustomImg002CopyrightJpg from "figma:asset/797b45911a1d0a1f965f58bc294a8d4a73f9d367.webp";
import imgCustomImg003CopyrightJpg from "figma:asset/d83f9a80814ccc977216de3c0728e23db20372e5.webp";
import imgCustomImg004CopyrightJpg from "figma:asset/95c906e032d463c9a1af96c555cb8b8b38c3355e.webp";
import imgCustomImg005CopyrightJpg from "figma:asset/b125d7cd6a5d7d4c157e4fe139575f17a032648f.webp";
import imgCustomImg006CopyrightJpg from "figma:asset/d1164ccabdda53ce7212976c9699db7b05f6c336.webp";

function CustomImg001CopyrightJpg() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-600px)] size-[240px] top-0" data-name="custom-img-001-copyright.webp">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCustomImg001CopyrightJpg} />
    </div>
  );
}

function CustomImg002CopyrightJpg() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-360px)] size-[240px] top-0" data-name="custom-img-002-copyright.webp">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCustomImg002CopyrightJpg} />
    </div>
  );
}

function CustomImg003CopyrightJpg() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-120px)] size-[240px] top-0" data-name="custom-img-003-copyright.webp">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCustomImg003CopyrightJpg} />
    </div>
  );
}

function CustomImg004CopyrightJpg() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+120px)] size-[240px] top-0" data-name="custom-img-004-copyright.webp">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCustomImg004CopyrightJpg} />
    </div>
  );
}

function CustomImg005CopyrightJpg() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+360px)] size-[240px] top-0" data-name="custom-img-005-copyright.webp">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCustomImg005CopyrightJpg} />
    </div>
  );
}

function CustomImg006CopyrightJpg() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+600px)] size-[240px] top-0" data-name="custom-img-006-copyright.webp">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCustomImg006CopyrightJpg} />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[28px] size-[24px] top-[28px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3bcd3c00} fill="var(--fill-0, #1A0604)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AElementorIcon() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffefe] left-1/2 rounded-[40px] size-[80px] top-[76px]" data-name="a.elementor-icon">
      <Frame />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <CustomImg001CopyrightJpg />
      <CustomImg002CopyrightJpg />
      <CustomImg003CopyrightJpg />
      <CustomImg004CopyrightJpg />
      <CustomImg005CopyrightJpg />
      <CustomImg006CopyrightJpg />
      <AElementorIcon />
    </div>
  );
}