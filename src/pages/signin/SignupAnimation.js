import { TweenMax, Power4 } from "gsap";

//DESKTOP ANIMATION ---------------------

export function desktopAnimation(heading, sideCol, ele) {
  TweenMax.set(
    heading,

    {
      x: 0,
      perspective: 1000,
      opacity: 0,
      transformOrigin: "0 30px",
      transformStyle: "preserve-3d",
      rotationX: -180,
    },
  );
  TweenMax.from(
    ele,
    2,
    {
      y: -1000,
      opacity: 0,
      ease: Power4.easeIn,
    },
    1,
  );

  TweenMax.set(sideCol, {
    x: 0,
    transformOrigin: "-200px 50px",
    scale: 0,
    opacity: 0,
  });

  TweenMax.to(heading, 2, { rotationX: 0, opacity: 1 }, 0.05);

  TweenMax.to(sideCol, 0.85, {
    scale: 1,
    opacity: 1,
    delay: 0.35,
  });

  TweenMax.to(ele, 1.25, {
    y: 0,
    opacity: 1,
    ease: Power4.easeIn,
    delay: 5,
    onComplete: function () {
      TweenMax.set(ele, { overflow: "visible" });
    },
  });
}
