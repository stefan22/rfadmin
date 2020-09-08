import { TweenMax } from "gsap";

//DESKTOP ANIMATION ---------------------

export function desktopAnimation(heading, sideCol, ele) {
  TweenMax.set(
    heading,
    {
      x: 0,
      perspective: 1200,
      opacity: 0,
      transformOrigin: "0px 40px",
      transformStyle: "preserve-3d",
      rotationX: -180,
    },
    0.35,
  );

  TweenMax.from(ele, 0.5, {
    y: 250,
    opacity: 0,
  });

  TweenMax.set(sideCol, {
    x: 0,
    transformOrigin: "-200px 50px",
    scale: 0,
    opacity: 0,
  });

  TweenMax.to(heading, 1, { rotationX: 0, opacity: 1 });

  TweenMax.to(sideCol, 0.85, {
    scale: 1,
    opacity: 1,
    delay: 0.35,
  });

  TweenMax.to(
    ele,
    0.5,
    {
      y: 0,
      opacity: 1,
    },
    0.45,
  );
}
