import {
  trigger,
  animate,
  transition,
  style,
  query,
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition("* => *", [
    query(":enter", [style({ opacity: 0, position: "relative" })], {
      optional: true,
    }),
    query(
      ":leave",
      [
        style({ opacity: 1 }),
        animate("0.5s ease-out", style({ opacity: 0.5, position: "relative" })),
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [
        style({ opacity: 0.5 }),
        animate(
          "0.5s ease-in-out",
          style({ opacity: 1, position: "relative" })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
