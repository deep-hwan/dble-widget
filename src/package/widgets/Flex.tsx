/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { flexStylesProps } from "../styles/flexStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { LayoutElementType } from "../types/piece/LayoutElementType";
import { FlexPropsType, FlexType } from "../types/props/FlexPropsType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Flex = React.forwardRef<
  HTMLElement,
  FlexPropsType<LayoutElementType> & ComponentPropsWithoutRef<LayoutElementType>
>((props, ref) => {
  const {
    as,
    children,
    className,
    flex,
    direction,
    isReverse,
    align,
    crossAlign,
    gap,
    order,
    grow,
    shrink,
    basis,
    alignContent,
    alignSelf,
    wrap,
    sizes,
    zIndex,
    cursor,
    userSelect,
    transition,
    _hover,
    _focus,
    _active,
    mq = {},
    css: cssProp,
    ...rest
  } = props;

  const pPs = {
    sizes,
    flex,
    direction,
    isReverse,
    align,
    crossAlign,
    gap,
    order,
    grow,
    shrink,
    basis,
    alignContent,
    alignSelf,
    wrap,
  };

  const Component = as || "div";

  //
  // extended props styles
  const ExtendedStyles = (props: FlexType) => {
    return {
      display: "flex",
      ...screenSizeStylesProps(props.sizes),
      ...flexStylesProps({
        flex: props.flex,
        direction: props.direction,
        isReverse: props.isReverse,
        align: props.align,
        crossAlign: props.crossAlign,
        gap: props.gap,
        order: props.order,
        grow: props.grow,
        shrink: props.shrink,
        basis: props.basis,
        alignContent: props.alignContent,
        alignSelf: props.alignSelf,
        wrap: props.wrap,
      }),
    };
  };

  //
  // base style
  const baseStyle = useMemo(
    () =>
      css({
        position: "relative",
        cursor: cursor
          ? cursor
          : (rest.onClick || rest.onMouseEnter) && "pointer",
        transition:
          transition && transition?.time && transition?.time > 0
            ? `all ${transition.time}s ${transition.type}`
            : undefined,
        listStyle: "none",
        outline: "none",
        zIndex,
        userSelect,
      }),
    [cursor, rest.onClick, rest.onMouseEnter, transition, zIndex, userSelect]
  );

  //
  // media-query styles
  const mediaStyles = useMemo(
    () =>
      mediaScreenSize.map((size) => {
        const breakpointKey = `w${size}` as keyof typeof mq;
        const styles = mq?.[breakpointKey];

        return css`
          @media (max-width: ${size}px) {
            ${styles ? ExtendedStyles(styles) : ""}
          }
        `;
      }),
    [mq]
  );

  //
  // pseudos
  const pseudoStyles = useMemo(
    () =>
      css({
        "&:hover": ExtendedStyles(_hover || {}),
        "&:focus": ExtendedStyles(_focus || {}),
        "&:active": ExtendedStyles(_active || {}),
      }),
    [_hover, _focus, _active]
  );

  //
  // combined styles
  const combinedStyles = useMemo(
    () => css`
      ${baseStyle}
      ${ExtendedStyles({
        ...pPs,
        sizes: { ...pPs.sizes, width: pPs.sizes?.width ?? "100%" },
        direction: pPs.direction ?? "column",
      })}
    ${mediaStyles}
    ${pseudoStyles}
    `,
    [baseStyle, pPs, mediaStyles, pseudoStyles]
  );

  const combinedClassName = cx("dble-flex", className);
  return (
    <Component
      ref={ref}
      className={combinedClassName}
      css={css([combinedStyles, cssProp])}
      {...(rest as any)}
    >
      {children}
    </Component>
  );
});

export default React.memo(Flex);
