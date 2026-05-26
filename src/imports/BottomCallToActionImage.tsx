import imgBottomCallToActionImage from "figma:asset/e8d56ebc415002dbd15dc991825ef1684a7a8be2.webp";

export default function BottomCallToActionImage() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[60px] py-[100px] relative size-full" data-name="bottom Call to action IMAGE">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBottomCallToActionImage} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
      <div className="absolute left-[75px] size-[18px] top-[743.48px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #FBB040)" fillOpacity="0.7" id="Ellipse 33" r="9" />
        </svg>
      </div>
    </div>
  );
}