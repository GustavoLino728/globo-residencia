(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-XHGGCEVJ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardProvider",
    ()=>CardProvider,
    "useCardContext",
    ()=>useCardContext
]);
// src/card-context.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-3XT5V4LF.mjs [app-client] (ecmascript)");
"use client";
;
var [CardProvider, useCardContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "CardContext",
    strict: true,
    errorMessage: "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"
});
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-KGFOLKLU.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "card",
    ()=>card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-TX3FPB7D.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$JGY6VQQQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-JGY6VQQQ.mjs [app-client] (ecmascript)");
;
;
// src/components/card.ts
var card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "flex",
            "flex-col",
            "relative",
            "overflow-hidden",
            "h-auto",
            "outline-solid outline-transparent",
            "text-foreground",
            "box-border",
            "bg-content1",
            // focus ring
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$JGY6VQQQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        header: [
            "flex",
            "p-3",
            "z-10",
            "w-full",
            "justify-start",
            "items-center",
            "shrink-0",
            "overflow-inherit",
            "color-inherit",
            "subpixel-antialiased"
        ],
        body: [
            "relative",
            "flex",
            "flex-1",
            "w-full",
            "p-3",
            "flex-auto",
            "flex-col",
            "place-content-inherit",
            "align-items-inherit",
            "h-auto",
            "break-words",
            "text-left",
            "overflow-y-auto",
            "subpixel-antialiased"
        ],
        footer: [
            "p-3",
            "h-auto",
            "flex",
            "w-full",
            "items-center",
            "overflow-hidden",
            "color-inherit",
            "subpixel-antialiased"
        ]
    },
    variants: {
        shadow: {
            none: {
                base: "shadow-none"
            },
            sm: {
                base: "shadow-small"
            },
            md: {
                base: "shadow-medium"
            },
            lg: {
                base: "shadow-large"
            }
        },
        radius: {
            none: {
                base: "rounded-none",
                header: "rounded-none",
                footer: "rounded-none"
            },
            sm: {
                base: "rounded-small",
                header: "rounded-t-small",
                footer: "rounded-b-small"
            },
            md: {
                base: "rounded-medium",
                header: "rounded-t-medium",
                footer: "rounded-b-medium"
            },
            lg: {
                base: "rounded-large",
                header: "rounded-t-large",
                footer: "rounded-b-large"
            }
        },
        fullWidth: {
            true: {
                base: "w-full"
            }
        },
        isHoverable: {
            true: {
                base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"
            }
        },
        isPressable: {
            true: {
                base: "cursor-pointer"
            }
        },
        isBlurred: {
            true: {
                base: [
                    "bg-background/80",
                    "dark:bg-background/20",
                    "backdrop-blur-md",
                    "backdrop-saturate-150"
                ]
            }
        },
        isFooterBlurred: {
            true: {
                footer: [
                    "bg-background/10",
                    "backdrop-blur",
                    "backdrop-saturate-150"
                ]
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled cursor-not-allowed"
            }
        },
        disableAnimation: {
            true: "",
            false: {
                base: "transition-transform-background motion-reduce:transition-none"
            }
        }
    },
    compoundVariants: [
        {
            isPressable: true,
            class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent"
        }
    ],
    defaultVariants: {
        radius: "lg",
        shadow: "md",
        fullWidth: false,
        isHoverable: false,
        isPressable: false,
        isDisabled: false,
        isFooterBlurred: false
    }
});
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-DHMIPUUY.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCard",
    ()=>useCard
]);
// src/use-card.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$KGFOLKLU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-KGFOLKLU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/use-aria-button/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system/dist/chunk-Q3W45BN5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-rsc-utils/dist/chunk-RJKRL3AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-BDGLNRCW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$ripple$2f$dist$2f$chunk$2d$6VC6TS2O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/ripple/dist/chunk-6VC6TS2O.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function useCard(originalProps) {
    var _a, _b, _c, _d;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$KGFOLKLU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card"].variantKeys);
    const { ref, as, children, onClick, onPress, autoFocus, className, classNames, allowTextSelectionOnPress = true, ...otherProps } = props;
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const Component = as || (originalProps.isPressable ? "button" : "div");
    const shouldFilterDOMProps = typeof Component === "string";
    const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const disableRipple = (_d = (_c = originalProps.disableRipple) != null ? _c : globalContext == null ? void 0 : globalContext.disableRipple) != null ? _d : false;
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    const { onClear: onClearRipple, onPress: onRipplePressHandler, ripples } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$ripple$2f$dist$2f$chunk$2d$6VC6TS2O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRipple"])();
    const handlePress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCard.useCallback[handlePress]": (e)=>{
            if (disableRipple || disableAnimation) return;
            domRef.current && onRipplePressHandler(e);
        }
    }["useCard.useCallback[handlePress]"], [
        disableRipple,
        disableAnimation,
        domRef,
        onRipplePressHandler
    ]);
    const { buttonProps, isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAriaButton"])({
        onPress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(onPress, handlePress),
        elementType: as,
        isDisabled: !originalProps.isPressable,
        onClick,
        allowTextSelectionOnPress,
        ...otherProps
    }, domRef);
    const { hoverProps, isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !originalProps.isHoverable,
        ...otherProps
    });
    const { isFocusVisible, isFocused, focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus
    });
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCard.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$KGFOLKLU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card"])({
                ...variantProps,
                disableAnimation
            })
    }["useCard.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        disableAnimation
    ]);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCard.useMemo[context]": ()=>({
                slots,
                classNames,
                disableAnimation,
                isDisabled: originalProps.isDisabled,
                isFooterBlurred: originalProps.isFooterBlurred,
                fullWidth: originalProps.fullWidth
            })
    }["useCard.useMemo[context]"], [
        slots,
        classNames,
        originalProps.isDisabled,
        originalProps.isFooterBlurred,
        disableAnimation,
        originalProps.fullWidth
    ]);
    const getCardProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCard.useCallback[getCardProps]": function() {
            let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return {
                ref: domRef,
                className: slots.base({
                    class: baseStyles
                }),
                tabIndex: originalProps.isPressable ? 0 : -1,
                "data-hover": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHovered),
                "data-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isPressed),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocused),
                "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusVisible),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(originalProps.isDisabled),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(originalProps.isPressable ? {
                    ...buttonProps,
                    ...focusProps,
                    role: "button"
                } : {}, originalProps.isHoverable ? hoverProps : {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(otherProps, {
                    enabled: shouldFilterDOMProps
                }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props2))
            };
        }
    }["useCard.useCallback[getCardProps]"], [
        domRef,
        slots,
        baseStyles,
        shouldFilterDOMProps,
        originalProps.isPressable,
        originalProps.isHoverable,
        originalProps.isDisabled,
        isHovered,
        isPressed,
        isFocusVisible,
        buttonProps,
        focusProps,
        hoverProps,
        otherProps
    ]);
    const getRippleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCard.useCallback[getRippleProps]": ()=>({
                ripples,
                onClear: onClearRipple
            })
    }["useCard.useCallback[getRippleProps]"], [
        ripples,
        onClearRipple
    ]);
    return {
        context,
        domRef,
        Component,
        classNames,
        children,
        isHovered,
        isPressed,
        disableAnimation,
        isPressable: originalProps.isPressable,
        isHoverable: originalProps.isHoverable,
        disableRipple,
        handlePress,
        isFocusVisible,
        getCardProps,
        getRippleProps
    };
}
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "card_default",
    ()=>card_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$XHGGCEVJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-XHGGCEVJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$DHMIPUUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-DHMIPUUY.mjs [app-client] (ecmascript)");
// src/card.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$ripple$2f$dist$2f$chunk$2d$QHRCZSEO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/ripple/dist/chunk-QHRCZSEO.mjs [app-client] (ecmascript) <export ripple_default as Ripple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { children, context, Component, isPressable, disableAnimation, disableRipple, getCardProps, getRippleProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$DHMIPUUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCard"])({
        ...props,
        ref
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ...getCardProps(),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$XHGGCEVJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardProvider"], {
                value: context,
                children
            }),
            isPressable && !disableAnimation && !disableRipple && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$ripple$2f$dist$2f$chunk$2d$QHRCZSEO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__["Ripple"], {
                ...getRippleProps()
            })
        ]
    });
});
Card.displayName = "HeroUI.Card";
var card_default = Card;
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript) <export card_default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript)");
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "card_body_default",
    ()=>card_body_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$XHGGCEVJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-XHGGCEVJ.mjs [app-client] (ecmascript)");
// src/card-body.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-BDGLNRCW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var CardBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const { as, className, children, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { slots, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$XHGGCEVJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardContext"])();
    const bodyStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.body, className);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        className: (_a = slots.body) == null ? void 0 : _a.call(slots, {
            class: bodyStyles
        }),
        ...otherProps,
        children
    });
});
CardBody.displayName = "HeroUI.CardBody";
var card_body_default = CardBody;
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_body_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript)");
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/slider/dist/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSliderThumbId",
    ()=>$aa519ee6cf463259$export$68e648cbec363a18,
    "sliderData",
    ()=>$aa519ee6cf463259$export$d6c8d9636a3dc49c
]);
const $aa519ee6cf463259$export$d6c8d9636a3dc49c = new WeakMap();
function $aa519ee6cf463259$export$68e648cbec363a18(state, index) {
    let data = $aa519ee6cf463259$export$d6c8d9636a3dc49c.get(state);
    if (!data) throw new Error('Unknown slider state');
    return "".concat(data.id, "-").concat(index);
}
;
 //# sourceMappingURL=utils.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useFormReset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormReset",
    ()=>$99facab73266f662$export$5add1d006293d136
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        if (onReset) onReset(initialValue);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}
;
 //# sourceMappingURL=useFormReset.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useMove.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMove",
    ()=>$e8a7022cf87cba2a$export$36da96379f79f245
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/textSelection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart, onMove: onMove, onMoveEnd: onMoveEnd } = props;
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalListeners"])();
    let move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((originalEvent, pointerType, deltaX, deltaY)=>{
        if (deltaX === 0 && deltaY === 0) return;
        if (!state.current.didMove) {
            state.current.didMove = true;
            onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
                type: 'movestart',
                pointerType: pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        }
        onMove === null || onMove === void 0 ? void 0 : onMove({
            type: 'move',
            pointerType: pointerType,
            deltaX: deltaX,
            deltaY: deltaY,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((originalEvent, pointerType)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreTextSelection"])();
        if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
            type: 'moveend',
            pointerType: pointerType,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let moveProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let moveProps = {};
        let start = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableTextSelection"])();
            state.current.didMove = false;
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    var _state_current_lastPosition, _state_current_lastPosition1;
                    let pointerType = e.pointerType || 'mouse';
                    var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(e, pointerType, e.pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), e.pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    end(e, pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, 'pointermove', onPointerMove, false);
                    removeGlobalListener(window, 'pointerup', onPointerUp, false);
                    removeGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, 'pointermove', onPointerMove, false);
                    addGlobalListener(window, 'pointerup', onPointerUp, false);
                    addGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            move(e, 'keyboard', deltaX, deltaY);
            end(e, 'keyboard');
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case 'Left':
                case 'ArrowLeft':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case 'Right':
                case 'ArrowRight':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case 'Up':
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case 'Down':
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        state,
        addGlobalListener,
        removeGlobalListener,
        move,
        end
    ]);
    return {
        moveProps: moveProps
    };
}
;
 //# sourceMappingURL=useMove.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/label/dist/useLabel.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabel",
    ()=>$d191a55c9702f145$export$8467354a121f1b9f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLabels$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useLabels.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(id);
    let labelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? "".concat(labelId, " ").concat(ariaLabelledby) : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel && ("TURBOPACK compile-time value", "development") !== 'production') console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLabels$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}
;
 //# sourceMappingURL=useLabel.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/slider/dist/useSliderThumb.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSliderThumb",
    ()=>$47b897dc8cdb026b$export$8d15029008292ae
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/slider/dist/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/utils/dist/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useFormReset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useFormReset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useKeyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useKeyboard.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useMove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useMove.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useFocusable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/label/dist/useLabel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/i18n/dist/context.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
function $47b897dc8cdb026b$export$8d15029008292ae(opts, state) {
    let { index: index = 0, isRequired: isRequired, validationState: validationState, isInvalid: isInvalid, trackRef: trackRef, inputRef: inputRef, orientation: orientation = state.orientation, name: name, form: form } = opts;
    let isDisabled = opts.isDisabled || state.isDisabled;
    let isVertical = orientation === 'vertical';
    let { direction: direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalListeners"])();
    let data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderData"]).get(state);
    var _opts_arialabelledby;
    const { labelProps: labelProps, fieldProps: fieldProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabel"])({
        ...opts,
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliderThumbId"])(state, index),
        'aria-labelledby': "".concat(data.id, " ").concat((_opts_arialabelledby = opts['aria-labelledby']) !== null && _opts_arialabelledby !== void 0 ? _opts_arialabelledby : '').trim()
    });
    const value = state.values[index];
    const focusInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (inputRef.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(inputRef.current);
    }, [
        inputRef
    ]);
    const isFocused = state.focusedThumb === index;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isFocused) focusInput();
    }, [
        isFocused,
        focusInput
    ]);
    let reverseX = direction === 'rtl';
    let currentPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { keyboardProps: keyboardProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useKeyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboard"])({
        onKeyDown (e) {
            let { getThumbMaxValue: getThumbMaxValue, getThumbMinValue: getThumbMinValue, decrementThumb: decrementThumb, incrementThumb: incrementThumb, setThumbValue: setThumbValue, setThumbDragging: setThumbDragging, pageSize: pageSize } = state;
            // these are the cases that useMove or useSlider don't handle
            if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                e.continuePropagation();
                return;
            }
            // same handling as useMove, stopPropagation to prevent useSlider from handling the event as well.
            e.preventDefault();
            // remember to set this so that onChangeEnd is fired
            setThumbDragging(index, true);
            switch(e.key){
                case 'PageUp':
                    incrementThumb(index, pageSize);
                    break;
                case 'PageDown':
                    decrementThumb(index, pageSize);
                    break;
                case 'Home':
                    setThumbValue(index, getThumbMinValue(index));
                    break;
                case 'End':
                    setThumbValue(index, getThumbMaxValue(index));
                    break;
            }
            setThumbDragging(index, false);
        }
    });
    let { moveProps: moveProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useMove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMove"])({
        onMoveStart () {
            currentPosition.current = null;
            state.setThumbDragging(index, true);
        },
        onMove (param) {
            let { deltaX: deltaX, deltaY: deltaY, pointerType: pointerType, shiftKey: shiftKey } = param;
            const { getThumbPercent: getThumbPercent, setThumbPercent: setThumbPercent, decrementThumb: decrementThumb, incrementThumb: incrementThumb, step: step, pageSize: pageSize } = state;
            if (!trackRef.current) return;
            let { width: width, height: height } = trackRef.current.getBoundingClientRect();
            let size = isVertical ? height : width;
            if (currentPosition.current == null) currentPosition.current = getThumbPercent(index) * size;
            if (pointerType === 'keyboard') {
                if (deltaX > 0 && reverseX || deltaX < 0 && !reverseX || deltaY > 0) decrementThumb(index, shiftKey ? pageSize : step);
                else incrementThumb(index, shiftKey ? pageSize : step);
            } else {
                let delta = isVertical ? deltaY : deltaX;
                if (isVertical || reverseX) delta = -delta;
                currentPosition.current += delta;
                setThumbPercent(index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(currentPosition.current / size, 0, 1));
            }
        },
        onMoveEnd () {
            state.setThumbDragging(index, false);
        }
    });
    // Immediately register editability with the state
    state.setThumbEditable(index, !isDisabled);
    const { focusableProps: focusableProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(opts, {
        onFocus: ()=>state.setFocusedThumb(index),
        onBlur: ()=>state.setFocusedThumb(undefined)
    }), inputRef);
    let currentPointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    let onDown = (id)=>{
        focusInput();
        currentPointer.current = id;
        state.setThumbDragging(index, true);
        addGlobalListener(window, 'mouseup', onUp, false);
        addGlobalListener(window, 'touchend', onUp, false);
        addGlobalListener(window, 'pointerup', onUp, false);
    };
    let onUp = (e)=>{
        var _e_changedTouches;
        var _e_pointerId;
        let id = (_e_pointerId = e.pointerId) !== null && _e_pointerId !== void 0 ? _e_pointerId : (_e_changedTouches = e.changedTouches) === null || _e_changedTouches === void 0 ? void 0 : _e_changedTouches[0].identifier;
        if (id === currentPointer.current) {
            focusInput();
            state.setThumbDragging(index, false);
            removeGlobalListener(window, 'mouseup', onUp, false);
            removeGlobalListener(window, 'touchend', onUp, false);
            removeGlobalListener(window, 'pointerup', onUp, false);
        }
    };
    let thumbPosition = state.getThumbPercent(index);
    if (isVertical || direction === 'rtl') thumbPosition = 1 - thumbPosition;
    let interactions = !isDisabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(keyboardProps, moveProps, {
        onMouseDown: (e)=>{
            if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
            onDown();
        },
        onPointerDown: (e)=>{
            if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
            onDown(e.pointerId);
        },
        onTouchStart: (e)=>{
            onDown(e.changedTouches[0].identifier);
        }
    }) : {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useFormReset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormReset"])(inputRef, state.defaultValues[index], (v)=>{
        state.setThumbValue(index, v);
    });
    // We install mouse handlers for the drag motion on the thumb div, but
    // not the key handler for moving the thumb with the slider.  Instead,
    // we focus the range input, and let the browser handle the keyboard
    // interactions; we then listen to input's onChange to update state.
    return {
        inputProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(focusableProps, fieldProps, {
            type: 'range',
            tabIndex: !isDisabled ? 0 : undefined,
            min: state.getThumbMinValue(index),
            max: state.getThumbMaxValue(index),
            step: state.step,
            value: value,
            name: name,
            form: form,
            disabled: isDisabled,
            'aria-orientation': orientation,
            'aria-valuetext': state.getThumbValueLabel(index),
            'aria-required': isRequired || undefined,
            'aria-invalid': isInvalid || validationState === 'invalid' || undefined,
            'aria-errormessage': opts['aria-errormessage'],
            'aria-describedby': [
                data['aria-describedby'],
                opts['aria-describedby']
            ].filter(Boolean).join(' '),
            'aria-details': [
                data['aria-details'],
                opts['aria-details']
            ].filter(Boolean).join(' '),
            onChange: (e)=>{
                state.setThumbValue(index, parseFloat(e.target.value));
            }
        }),
        thumbProps: {
            ...interactions,
            style: {
                position: 'absolute',
                [isVertical ? 'top' : 'left']: "".concat(thumbPosition * 100, "%"),
                transform: 'translate(-50%, -50%)',
                touchAction: 'none'
            }
        },
        labelProps: labelProps,
        isDragging: state.isThumbDragging(index),
        isDisabled: isDisabled,
        isFocused: isFocused
    };
}
;
 //# sourceMappingURL=useSliderThumb.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@internationalized/number/dist/NumberFormatter.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_context__.s([
    "NumberFormatter",
    ()=>$488c6ddbf4ef74c2$export$cc77c4ff7e8673c5,
    "numberFormatSignDisplayPolyfill",
    ()=>$488c6ddbf4ef74c2$export$711b50b3c525e0f2
]);
let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch (e) {}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch (e) {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return "".concat(this.format(start), " – ").concat(this.format(end));
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += "-nu-".concat(numberingSystem);
    }
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error("Unsupported unit ".concat(unit, " with unitDisplay = ").concat(unitDisplay));
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}
;
 //# sourceMappingURL=NumberFormatter.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/i18n/dist/useNumberFormatter.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNumberFormatter",
    ()=>$a916eb452884faea$export$b7a616150fdb9f44
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/i18n/dist/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$internationalized$2f$number$2f$dist$2f$NumberFormatter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@internationalized/number/dist/NumberFormatter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $a916eb452884faea$export$b7a616150fdb9f44() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let { locale: locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$internationalized$2f$number$2f$dist$2f$NumberFormatter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberFormatter"])(locale, options), [
        locale,
        options
    ]);
}
;
 //# sourceMappingURL=useNumberFormatter.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-JWATDH3I.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSliderThumb",
    ()=>useSliderThumb
]);
// src/use-slider-thumb.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$useSliderThumb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/slider/dist/useSliderThumb.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-BDGLNRCW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/usePress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useNumberFormatter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/i18n/dist/useNumberFormatter.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useSliderThumb(props) {
    const { ref, as, state, index, name, trackRef, className, tooltipProps, isVertical, showTooltip, getTooltipValue, formatOptions, renderThumb, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const numberFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useNumberFormatter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNumberFormatter"])(formatOptions);
    const { thumbProps, inputProps, isDragging, isFocused } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$useSliderThumb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderThumb"])({
        index,
        trackRef,
        inputRef,
        name,
        ...otherProps
    }, state);
    const { hoverProps, isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: state.isDisabled
    });
    const { focusProps, isFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])();
    const { pressProps, isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePress"])({
        isDisabled: state.isDisabled
    });
    const getThumbProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            ref: domRef,
            "data-slot": "thumb",
            "data-hover": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHovered),
            "data-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isPressed),
            "data-dragging": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isDragging),
            "data-focused": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocused),
            "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusVisible),
            "aria-label": props2["aria-label"] || "Slider thumb ".concat(index !== void 0 ? "".concat(index + 1) : ""),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(thumbProps, pressProps, hoverProps, otherProps),
            className,
            ...props2
        };
    };
    const getTooltipProps = ()=>{
        const stateValue = (tooltipProps == null ? void 0 : tooltipProps.content) ? tooltipProps.content : getTooltipValue ? state.values.length === 1 ? getTooltipValue(state.values[index != null ? index : 0]) : getTooltipValue(state.values, index != null ? index : 0) : state.values[index != null ? index : 0];
        const value = numberFormatter && typeof stateValue === "number" ? numberFormatter.format(stateValue) : stateValue;
        return {
            ...tooltipProps,
            placement: (tooltipProps == null ? void 0 : tooltipProps.placement) ? tooltipProps == null ? void 0 : tooltipProps.placement : isVertical ? "right" : "top",
            content: (tooltipProps == null ? void 0 : tooltipProps.content) ? tooltipProps == null ? void 0 : tooltipProps.content : value,
            updatePositionDeps: [
                isDragging,
                isHovered,
                isFocused,
                isFocusVisible,
                value
            ],
            isOpen: (tooltipProps == null ? void 0 : tooltipProps.isOpen) !== void 0 ? tooltipProps == null ? void 0 : tooltipProps.isOpen : isHovered || isDragging || isFocused || isFocusVisible,
            role: "tooltip",
            "aria-label": "Current value: ".concat(value)
        };
    };
    const getInputProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            ref: inputRef,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(inputProps, focusProps),
            ...props2
        };
    };
    return {
        Component,
        index,
        showTooltip,
        renderThumb,
        getThumbProps,
        getTooltipProps,
        getInputProps
    };
}
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/tooltip/dist/useTooltipTriggerState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTooltipTriggerState",
    ()=>$8796f90736e175cb$export$4d40659c25ecb50b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$overlays$2f$dist$2f$useOverlayTriggerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $8796f90736e175cb$var$TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const $8796f90736e175cb$var$TOOLTIP_COOLDOWN = 500;
let $8796f90736e175cb$var$tooltips = {};
let $8796f90736e175cb$var$tooltipId = 0;
let $8796f90736e175cb$var$globalWarmedUp = false;
let $8796f90736e175cb$var$globalWarmUpTimeout = null;
let $8796f90736e175cb$var$globalCooldownTimeout = null;
function $8796f90736e175cb$export$4d40659c25ecb50b() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let { delay: delay = $8796f90736e175cb$var$TOOLTIP_DELAY, closeDelay: closeDelay = $8796f90736e175cb$var$TOOLTIP_COOLDOWN } = props;
    let { isOpen: isOpen, open: open, close: close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$overlays$2f$dist$2f$useOverlayTriggerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOverlayTriggerState"])(props);
    let id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>"".concat(++$8796f90736e175cb$var$tooltipId), []);
    let closeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let closeCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(close);
    let ensureTooltipEntry = ()=>{
        $8796f90736e175cb$var$tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in $8796f90736e175cb$var$tooltips)if (hideTooltipId !== id) {
            $8796f90736e175cb$var$tooltips[hideTooltipId](true);
            delete $8796f90736e175cb$var$tooltips[hideTooltipId];
        }
    };
    let showTooltip = ()=>{
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        $8796f90736e175cb$var$globalWarmedUp = true;
        open();
        if ($8796f90736e175cb$var$globalWarmUpTimeout) {
            clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
        }
        if ($8796f90736e175cb$var$globalCooldownTimeout) {
            clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
            $8796f90736e175cb$var$globalCooldownTimeout = null;
        }
    };
    let hideTooltip = (immediate)=>{
        if (immediate || closeDelay <= 0) {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
            closeCallback.current();
        } else if (!closeTimeout.current) closeTimeout.current = setTimeout(()=>{
            closeTimeout.current = null;
            closeCallback.current();
        }, closeDelay);
        if ($8796f90736e175cb$var$globalWarmUpTimeout) {
            clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
        }
        if ($8796f90736e175cb$var$globalWarmedUp) {
            if ($8796f90736e175cb$var$globalCooldownTimeout) clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
            $8796f90736e175cb$var$globalCooldownTimeout = setTimeout(()=>{
                delete $8796f90736e175cb$var$tooltips[id];
                $8796f90736e175cb$var$globalCooldownTimeout = null;
                $8796f90736e175cb$var$globalWarmedUp = false;
            }, Math.max($8796f90736e175cb$var$TOOLTIP_COOLDOWN, closeDelay));
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !$8796f90736e175cb$var$globalWarmUpTimeout && !$8796f90736e175cb$var$globalWarmedUp) $8796f90736e175cb$var$globalWarmUpTimeout = setTimeout(()=>{
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
            $8796f90736e175cb$var$globalWarmedUp = true;
            showTooltip();
        }, delay);
        else if (!isOpen) showTooltip();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        closeCallback.current = close;
    }, [
        close
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            let tooltip = $8796f90736e175cb$var$tooltips[id];
            if (tooltip) delete $8796f90736e175cb$var$tooltips[id];
        };
    }, [
        id
    ]);
    return {
        isOpen: isOpen,
        open: (immediate)=>{
            if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
            else showTooltip();
        },
        close: hideTooltip
    };
}
;
 //# sourceMappingURL=useTooltipTriggerState.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/tooltip/dist/useTooltip.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTooltip",
    ()=>$326e436e94273fe1$export$1c4b08e0eca38426
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $326e436e94273fe1$export$1c4b08e0eca38426(props, state) {
    let domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        labelable: true
    });
    let { hoverProps: hoverProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        onHoverStart: ()=>state === null || state === void 0 ? void 0 : state.open(true),
        onHoverEnd: ()=>state === null || state === void 0 ? void 0 : state.close()
    });
    return {
        tooltipProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(domProps, hoverProps, {
            role: 'tooltip'
        })
    };
}
;
 //# sourceMappingURL=useTooltip.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/tooltip/dist/useTooltipTrigger.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTooltipTrigger",
    ()=>$4e1b34546679e357$export$a6da6c504e4bba8b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useFocusable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $4e1b34546679e357$export$a6da6c504e4bba8b(props, state, ref) {
    let { isDisabled: isDisabled, trigger: trigger } = props;
    let tooltipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let isHovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let isFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let onKeyDown = (e)=>{
            if (ref && ref.current) // dismiss tooltip on esc key press
            {
                if (e.key === 'Escape') {
                    e.stopPropagation();
                    state.close(true);
                }
            }
        };
        if (state.isOpen) {
            document.addEventListener('keydown', onKeyDown, true);
            return ()=>{
                document.removeEventListener('keydown', onKeyDown, true);
            };
        }
    }, [
        ref,
        state
    ]);
    let onHoverStart = ()=>{
        if (trigger === 'focus') return;
        // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
        // interactions for example, hover will end. When hover is restored after that element disappears,
        // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
        // is the result of moving the mouse.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInteractionModality"])() === 'pointer') isHovered.current = true;
        else isHovered.current = false;
        handleShow();
    };
    let onHoverEnd = ()=>{
        if (trigger === 'focus') return;
        // no matter how the trigger is left, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide();
    };
    let onPressStart = ()=>{
        // no matter how the trigger is pressed, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let onFocus = ()=>{
        let isVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusVisible"])();
        if (isVisible) {
            isFocused.current = true;
            handleShow();
        }
    };
    let onBlur = ()=>{
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let { hoverProps: hoverProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: isDisabled,
        onHoverStart: onHoverStart,
        onHoverEnd: onHoverEnd
    });
    let { focusableProps: focusableProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusable"])({
        isDisabled: isDisabled,
        onFocus: onFocus,
        onBlur: onBlur
    }, ref);
    return {
        triggerProps: {
            'aria-describedby': state.isOpen ? tooltipId : undefined,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(focusableProps, hoverProps, {
                onPointerDown: onPressStart,
                onKeyDown: onPressStart
            }),
            tabIndex: undefined
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}
;
 //# sourceMappingURL=useTooltipTrigger.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/tooltip/dist/chunk-5B7GRQND.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTooltip",
    ()=>useTooltip
]);
// src/use-tooltip.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$tooltip$2f$dist$2f$useTooltipTriggerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/tooltip/dist/useTooltipTriggerState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$tooltip$2f$dist$2f$useTooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/tooltip/dist/useTooltip.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$tooltip$2f$dist$2f$useTooltipTrigger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/tooltip/dist/useTooltipTrigger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useOverlayPosition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/overlays/dist/useOverlayPosition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system/dist/chunk-Q3W45BN5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$D2FF7S3A$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-D2FF7S3A.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$LGMZDQT5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-LGMZDQT5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-BDGLNRCW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$aria$2d$utils$2f$dist$2f$chunk$2d$WQVQ7P2I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/aria-utils/dist/chunk-WQVQ7P2I.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$safe$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/use-safe-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$aria$2d$overlay$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/use-aria-overlay/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function useTooltip(originalProps) {
    var _a, _b;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$D2FF7S3A$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popover"].variantKeys);
    const { ref, as, isOpen: isOpenProp, content, children, defaultOpen, onOpenChange, isDisabled, trigger: triggerAction, shouldFlip = true, containerPadding = 12, placement: placementProp = "top", delay = 0, closeDelay = 500, showArrow = false, offset = 7, crossOffset = 0, isDismissable, shouldCloseOnBlur = true, portalContainer, isKeyboardDismissDisabled = false, updatePositionDeps = [], shouldCloseOnInteractOutside, className, onClose, motionProps, classNames, ...otherProps } = props;
    const Component = as || "div";
    const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$tooltip$2f$dist$2f$useTooltipTriggerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipTriggerState"])({
        delay,
        closeDelay,
        isDisabled,
        defaultOpen,
        isOpen: isOpenProp,
        onOpenChange: {
            "useTooltip.useTooltipTriggerState[state]": (isOpen2)=>{
                onOpenChange == null ? void 0 : onOpenChange(isOpen2);
                if (!isOpen2) {
                    onClose == null ? void 0 : onClose();
                }
            }
        }["useTooltip.useTooltipTriggerState[state]"]
    });
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const isOpen = state.isOpen && !isDisabled;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "useTooltip.useImperativeHandle": ()=>// @ts-ignore
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDOMRef"])(overlayRef)
    }["useTooltip.useImperativeHandle"]);
    const { triggerProps, tooltipProps: triggerTooltipProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$tooltip$2f$dist$2f$useTooltipTrigger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipTrigger"])({
        isDisabled,
        trigger: triggerAction
    }, state, triggerRef);
    const { tooltipProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$tooltip$2f$dist$2f$useTooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltip"])({
        isOpen,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(props, triggerTooltipProps)
    }, state);
    const { overlayProps: positionProps, placement, updatePosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useOverlayPosition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOverlayPosition"])({
        isOpen,
        targetRef: triggerRef,
        placement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$aria$2d$utils$2f$dist$2f$chunk$2d$WQVQ7P2I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toReactAriaPlacement"])(placementProp),
        overlayRef,
        offset: showArrow ? offset + 3 : offset,
        crossOffset,
        shouldFlip,
        containerPadding
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$safe$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSafeLayoutEffect"])({
        "useTooltip.useSafeLayoutEffect": ()=>{
            if (!updatePositionDeps.length) return;
            updatePosition();
        }
    }["useTooltip.useSafeLayoutEffect"], updatePositionDeps);
    const { overlayProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$aria$2d$overlay$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAriaOverlay"])({
        isOpen,
        onClose: state.close,
        isDismissable,
        shouldCloseOnBlur,
        isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside
    }, overlayRef);
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTooltip.useMemo[slots]": ()=>{
            var _a2, _b2, _c;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$D2FF7S3A$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popover"])({
                ...variantProps,
                disableAnimation,
                radius: (_a2 = originalProps == null ? void 0 : originalProps.radius) != null ? _a2 : "md",
                size: (_b2 = originalProps == null ? void 0 : originalProps.size) != null ? _b2 : "md",
                shadow: (_c = originalProps == null ? void 0 : originalProps.shadow) != null ? _c : "sm"
            });
        }
    }["useTooltip.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        disableAnimation,
        originalProps == null ? void 0 : originalProps.radius,
        originalProps == null ? void 0 : originalProps.size,
        originalProps == null ? void 0 : originalProps.shadow
    ]);
    const getTriggerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTooltip.useCallback[getTriggerProps]": function() {
            let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            return {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(triggerProps, props2),
                ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$LGMZDQT5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])(_ref, triggerRef),
                "aria-describedby": isOpen ? tooltipId : void 0
            };
        }
    }["useTooltip.useCallback[getTriggerProps]"], [
        triggerProps,
        isOpen,
        tooltipId,
        state
    ]);
    const getTooltipProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTooltip.useCallback[getTooltipProps]": ()=>({
                ref: overlayRef,
                "data-slot": "base",
                "data-open": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isOpen),
                "data-arrow": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(showArrow),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isDisabled),
                "data-placement": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$aria$2d$utils$2f$dist$2f$chunk$2d$WQVQ7P2I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowPlacement"])(placement || "top", placementProp),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(tooltipProps, overlayProps, otherProps),
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(positionProps.style, otherProps.style, props.style),
                className: slots.base({
                    class: classNames == null ? void 0 : classNames.base
                }),
                id: tooltipId
            })
    }["useTooltip.useCallback[getTooltipProps]"], [
        slots,
        isOpen,
        showArrow,
        isDisabled,
        placement,
        placementProp,
        tooltipProps,
        overlayProps,
        otherProps,
        positionProps,
        props,
        tooltipId
    ]);
    const getTooltipContentProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTooltip.useCallback[getTooltipContentProps]": ()=>({
                "data-slot": "content",
                "data-open": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isOpen),
                "data-arrow": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(showArrow),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isDisabled),
                "data-placement": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$aria$2d$utils$2f$dist$2f$chunk$2d$WQVQ7P2I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowPlacement"])(placement || "top", placementProp),
                className: slots.content({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.content, className)
                })
            })
    }["useTooltip.useCallback[getTooltipContentProps]"], [
        slots,
        isOpen,
        showArrow,
        isDisabled,
        placement,
        placementProp,
        classNames
    ]);
    return {
        Component,
        content,
        children,
        isOpen,
        triggerRef,
        showArrow,
        portalContainer,
        placement: placementProp,
        disableAnimation,
        isDisabled,
        motionProps,
        getTooltipContentProps,
        getTriggerProps,
        getTooltipProps
    };
}
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/tooltip/dist/chunk-BOOVDPB6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tooltip_default",
    ()=>tooltip_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$5B7GRQND$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/tooltip/dist/chunk-5B7GRQND.mjs [app-client] (ecmascript)");
// src/tooltip.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useModal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/overlays/dist/useModal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$framer$2d$utils$2f$dist$2f$chunk$2d$736YWA4T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/framer-utils/dist/chunk-736YWA4T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$aria$2d$utils$2f$dist$2f$chunk$2d$WQVQ7P2I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/aria-utils/dist/chunk-WQVQ7P2I.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
var domAnimation = ()=>__turbopack_context__.A("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/dom-animation/dist/index.mjs [app-client] (ecmascript, async loader)").then((res)=>res.default);
var Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const { Component, children, content, isOpen, portalContainer, placement, disableAnimation, motionProps, getTriggerProps, getTooltipProps, getTooltipContentProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$5B7GRQND$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltip"])({
        ...props,
        ref
    });
    let trigger;
    try {
        const childrenNum = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children);
        if (childrenNum !== 1) throw new Error();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(children)) {
            trigger = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                ...getTriggerProps(),
                children
            });
        } else {
            const child = children;
            const childRef = (_a = child.props.ref) != null ? _a : child.ref;
            trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, getTriggerProps(child.props, childRef));
        }
    } catch (e) {
        trigger = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])("Tooltip must have only one child node. Please, check your code.");
    }
    const { ref: tooltipRef, id, style, ...otherTooltipProps } = getTooltipProps();
    const animatedContent = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: tooltipRef,
        id,
        style,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
            animate: "enter",
            exit: "exit",
            initial: "exit",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$framer$2d$utils$2f$dist$2f$chunk$2d$736YWA4T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSITION_VARIANTS"].scaleSpring,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(motionProps, otherTooltipProps),
            style: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$aria$2d$utils$2f$dist$2f$chunk$2d$WQVQ7P2I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransformOrigins"])(placement)
            },
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ...getTooltipContentProps(),
                children: content
            })
        }, "".concat(id, "-tooltip-inner"))
    }, "".concat(id, "-tooltip-content"));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            trigger,
            disableAnimation ? isOpen && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useModal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayContainer"], {
                portalContainer,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: tooltipRef,
                    id,
                    style,
                    ...otherTooltipProps,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                        ...getTooltipContentProps(),
                        children: content
                    })
                })
            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"], {
                features: domAnimation,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: isOpen && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useModal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayContainer"], {
                        portalContainer,
                        children: animatedContent
                    })
                })
            })
        ]
    });
});
Tooltip.displayName = "HeroUI.Tooltip";
var tooltip_default = Tooltip;
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/tooltip/dist/chunk-BOOVDPB6.mjs [app-client] (ecmascript) <export tooltip_default as Tooltip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$BOOVDPB6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltip_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$BOOVDPB6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/tooltip/dist/chunk-BOOVDPB6.mjs [app-client] (ecmascript)");
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-rsc-utils/dist/chunk-6HA6QXMR.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/functions.ts
__turbopack_context__.s([
    "renderFn",
    ()=>renderFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function renderFn(param) {
    let { Component, props, renderCustom } = param;
    if (renderCustom && typeof renderCustom === "function") {
        return renderCustom(props);
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, props);
    }
}
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-Y2LHSSQA.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slider_thumb_default",
    ()=>slider_thumb_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$JWATDH3I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-JWATDH3I.mjs [app-client] (ecmascript)");
// src/slider-thumb.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$BOOVDPB6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/tooltip/dist/chunk-BOOVDPB6.mjs [app-client] (ecmascript) <export tooltip_default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$6HA6QXMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-rsc-utils/dist/chunk-6HA6QXMR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$dist$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
var SliderThumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, index, renderThumb, showTooltip, getTooltipProps, getThumbProps, getInputProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$JWATDH3I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderThumb"])({
        ...props,
        ref
    });
    const thumbProps = {
        ...getThumbProps(),
        index,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$dist$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                ...getInputProps()
            })
        })
    };
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$6HA6QXMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderFn"])({
        Component,
        props: thumbProps,
        renderCustom: renderThumb
    });
    return showTooltip ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$BOOVDPB6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__["Tooltip"], {
        ...getTooltipProps(),
        children: content
    }) : content;
});
SliderThumb.displayName = "HeroUI.SliderThumb";
var slider_thumb_default = SliderThumb;
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-OA5N2ZUW.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slider",
    ()=>slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-TX3FPB7D.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$JGY6VQQQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-JGY6VQQQ.mjs [app-client] (ecmascript)");
;
;
// src/components/slider.ts
var slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "flex flex-col w-full gap-1",
        labelWrapper: "w-full flex justify-between items-center",
        label: "",
        value: "",
        step: [
            "h-1.5",
            "w-1.5",
            "absolute",
            "rounded-full",
            "bg-default-300/50",
            "data-[in-range=true]:bg-background/50"
        ],
        mark: [
            "absolute",
            "text-small",
            "cursor-default",
            "opacity-50",
            "data-[in-range=true]:opacity-100"
        ],
        trackWrapper: "relative flex gap-2",
        track: [
            "flex",
            "w-full",
            "relative",
            "rounded-full",
            "bg-default-300/50"
        ],
        filler: "h-full absolute",
        thumb: [
            "flex",
            "justify-center",
            "items-center",
            "before:absolute",
            "before:w-11",
            "before:h-11",
            "before:rounded-full",
            "after:shadow-small",
            "after:shadow-small",
            "after:bg-background",
            "data-[focused=true]:z-10",
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$JGY6VQQQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        startContent: [],
        endContent: []
    },
    variants: {
        size: {
            sm: {
                label: "text-small",
                value: "text-small",
                thumb: "w-5 h-5 after:w-4 after:h-4",
                step: "data-[in-range=false]:bg-default-200"
            },
            md: {
                thumb: "w-6 h-6 after:w-5 after:h-5",
                label: "text-small",
                value: "text-small"
            },
            lg: {
                thumb: "h-7 w-7 after:w-5 after:h-5",
                step: "w-2 h-2",
                label: "text-medium",
                value: "text-medium",
                mark: "mt-2"
            }
        },
        radius: {
            none: {
                thumb: "rounded-none after:rounded-none"
            },
            sm: {
                thumb: "rounded-[calc(var(--heroui-radius-small)/2)] after:rounded-[calc(var(--heroui-radius-small)/3)]"
            },
            md: {
                thumb: "rounded-[calc(var(--heroui-radius-medium)/2)] after:rounded-[calc(var(--heroui-radius-medium)/3)]"
            },
            lg: {
                thumb: "rounded-[calc(var(--heroui-radius-large)/1.5)] after:rounded-[calc(var(--heroui-radius-large)/2)]"
            },
            full: {
                thumb: "rounded-full after:rounded-full"
            }
        },
        color: {
            foreground: {
                filler: "bg-foreground",
                thumb: "bg-foreground"
            },
            primary: {
                filler: "bg-primary",
                thumb: "bg-primary"
            },
            secondary: {
                filler: "bg-secondary",
                thumb: "bg-secondary"
            },
            success: {
                filler: "bg-success",
                thumb: "bg-success"
            },
            warning: {
                filler: "bg-warning",
                thumb: "bg-warning"
            },
            danger: {
                filler: "bg-danger",
                thumb: "bg-danger"
            }
        },
        isVertical: {
            true: {
                base: "w-auto h-full flex-col-reverse items-center",
                trackWrapper: "flex-col h-full justify-center items-center",
                filler: "w-full h-auto",
                thumb: "left-1/2",
                track: "h-full border-y-transparent",
                labelWrapper: "flex-col justify-center items-center",
                step: [
                    "left-1/2",
                    "-translate-x-1/2",
                    "translate-y-1/2"
                ],
                mark: [
                    "left-1/2",
                    "ml-1",
                    "translate-x-1/2",
                    "translate-y-1/2"
                ]
            },
            false: {
                thumb: "top-1/2",
                trackWrapper: "items-center",
                track: "border-x-transparent",
                step: [
                    "top-1/2",
                    "-translate-x-1/2",
                    "-translate-y-1/2"
                ],
                mark: [
                    "top-1/2",
                    "mt-1",
                    "-translate-x-1/2",
                    "translate-y-1/2"
                ]
            }
        },
        isDisabled: {
            false: {
                thumb: [
                    "cursor-grab",
                    "data-[dragging=true]:cursor-grabbing"
                ]
            },
            true: {
                base: "opacity-disabled",
                thumb: "cursor-default"
            }
        },
        hasMarks: {
            true: {
                base: "mb-5",
                mark: "cursor-pointer"
            },
            false: {}
        },
        showOutline: {
            true: {
                thumb: "ring-2 ring-background"
            },
            false: {
                thumb: "ring-transparent border-0"
            }
        },
        hideValue: {
            true: {
                value: "sr-only"
            }
        },
        hideThumb: {
            true: {
                thumb: "sr-only",
                track: "cursor-pointer"
            }
        },
        hasSingleThumb: {
            true: {},
            false: {}
        },
        disableAnimation: {
            true: {
                thumb: "data-[dragging=true]:after:scale-100"
            },
            false: {
                thumb: "after:transition-all motion-reduce:after:transition-none",
                mark: "transition-opacity motion-reduce:transition-none"
            }
        },
        disableThumbScale: {
            true: {},
            false: {
                thumb: "data-[dragging=true]:after:scale-80"
            }
        }
    },
    compoundVariants: [
        // size="sm" || size="md" && showOutline={false}
        {
            size: [
                "sm",
                "md"
            ],
            showOutline: false,
            class: {
                thumb: "shadow-small"
            }
        },
        // size && color
        {
            size: "sm",
            color: "foreground",
            class: {
                step: "data-[in-range=true]:bg-foreground"
            }
        },
        {
            size: "sm",
            color: "primary",
            class: {
                step: "data-[in-range=true]:bg-primary"
            }
        },
        {
            size: "sm",
            color: "secondary",
            class: {
                step: "data-[in-range=true]:bg-secondary"
            }
        },
        {
            size: "sm",
            color: "success",
            class: {
                step: "data-[in-range=true]:bg-success"
            }
        },
        {
            size: "sm",
            color: "warning",
            class: {
                step: "data-[in-range=true]:bg-warning"
            }
        },
        {
            size: "sm",
            color: "danger",
            class: {
                step: "data-[in-range=true]:bg-danger"
            }
        },
        // size && !isVertical
        {
            size: "sm",
            isVertical: false,
            class: {
                track: "h-1 my-[calc((theme(spacing.5)-theme(spacing.1))/2)] border-x-[calc(theme(spacing.5)/2)]"
            }
        },
        {
            size: "md",
            isVertical: false,
            class: {
                track: "h-3 my-[calc((theme(spacing.6)-theme(spacing.3))/2)] border-x-[calc(theme(spacing.6)/2)]"
            }
        },
        {
            size: "lg",
            isVertical: false,
            class: {
                track: "h-7 my-[calc((theme(spacing.7)-theme(spacing.5))/2)] border-x-[calc(theme(spacing.7)/2)]"
            }
        },
        // size && isVertical
        {
            size: "sm",
            isVertical: true,
            class: {
                track: "w-1 mx-[calc((theme(spacing.5)-theme(spacing.1))/2)] border-y-[calc(theme(spacing.5)/2)]"
            }
        },
        {
            size: "md",
            isVertical: true,
            class: {
                track: "w-3 mx-[calc((theme(spacing.6)-theme(spacing.3))/2)] border-y-[calc(theme(spacing.6)/2)]"
            }
        },
        {
            size: "lg",
            isVertical: true,
            class: {
                track: "w-7 mx-[calc((theme(spacing.7)-theme(spacing.5))/2)] border-y-[calc(theme(spacing.7)/2)]"
            }
        },
        // color && !isVertical
        {
            color: "foreground",
            isVertical: false,
            class: {
                track: "data-[fill-start=true]:border-s-foreground data-[fill-end=true]:border-e-foreground"
            }
        },
        {
            color: "primary",
            isVertical: false,
            class: {
                track: "data-[fill-start=true]:border-s-primary data-[fill-end=true]:border-e-primary"
            }
        },
        {
            color: "secondary",
            isVertical: false,
            class: {
                track: "data-[fill-start=true]:border-s-secondary data-[fill-end=true]:border-e-secondary"
            }
        },
        {
            color: "success",
            isVertical: false,
            class: {
                track: "data-[fill-start=true]:border-s-success data-[fill-end=true]:border-e-success"
            }
        },
        {
            color: "warning",
            isVertical: false,
            class: {
                track: "data-[fill-start=true]:border-s-warning data-[fill-end=true]:border-e-warning"
            }
        },
        {
            color: "danger",
            isVertical: false,
            class: {
                track: "data-[fill-start=true]:border-s-danger data-[fill-end=true]:border-e-danger"
            }
        },
        // color && isVertical
        {
            color: "foreground",
            isVertical: true,
            class: {
                track: "data-[fill-start=true]:border-b-foreground data-[fill-end=true]:border-t-foreground"
            }
        },
        {
            color: "primary",
            isVertical: true,
            class: {
                track: "data-[fill-start=true]:border-b-primary data-[fill-end=true]:border-t-primary"
            }
        },
        {
            color: "secondary",
            isVertical: true,
            class: {
                track: "data-[fill-start=true]:border-b-secondary data-[fill-end=true]:border-t-secondary"
            }
        },
        {
            color: "success",
            isVertical: true,
            class: {
                track: "data-[fill-start=true]:border-b-success data-[fill-end=true]:border-t-success"
            }
        },
        {
            color: "warning",
            isVertical: true,
            class: {
                track: "data-[fill-start=true]:border-b-warning data-[fill-end=true]:border-t-warning"
            }
        },
        {
            color: "danger",
            isVertical: true,
            class: {
                track: "data-[fill-start=true]:border-b-danger data-[fill-end=true]:border-t-danger"
            }
        }
    ],
    defaultVariants: {
        size: "md",
        color: "primary",
        radius: "full",
        hideValue: false,
        hideThumb: false,
        isDisabled: false,
        disableThumbScale: false,
        showOutline: false
    }
});
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/slider/dist/useSliderState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSliderState",
    ()=>$28f99e3e86e6ec45$export$e5fda3247f5d67f9
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/utils/dist/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/utils/dist/useControlledState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $28f99e3e86e6ec45$var$DEFAULT_MIN_VALUE = 0;
const $28f99e3e86e6ec45$var$DEFAULT_MAX_VALUE = 100;
const $28f99e3e86e6ec45$var$DEFAULT_STEP_VALUE = 1;
function $28f99e3e86e6ec45$export$e5fda3247f5d67f9(props) {
    const { isDisabled: isDisabled = false, minValue: minValue = $28f99e3e86e6ec45$var$DEFAULT_MIN_VALUE, maxValue: maxValue = $28f99e3e86e6ec45$var$DEFAULT_MAX_VALUE, numberFormatter: formatter, step: step = $28f99e3e86e6ec45$var$DEFAULT_STEP_VALUE, orientation: orientation = 'horizontal' } = props;
    // Page step should be at least equal to step and always a multiple of the step.
    let pageSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let calcPageSize = (maxValue - minValue) / 10;
        calcPageSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapValueToStep"])(calcPageSize, 0, calcPageSize + step, step);
        return Math.max(calcPageSize, step);
    }, [
        step,
        maxValue,
        minValue
    ]);
    let restrictValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((values)=>values === null || values === void 0 ? void 0 : values.map((val, idx)=>{
            let min = idx === 0 ? minValue : values[idx - 1];
            let max = idx === values.length - 1 ? maxValue : values[idx + 1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapValueToStep"])(val, min, max, step);
        }), [
        minValue,
        maxValue,
        step
    ]);
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>restrictValues($28f99e3e86e6ec45$var$convertValue(props.value)), [
        props.value,
        restrictValues
    ]);
    let defaultValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var _convertValue;
        return restrictValues((_convertValue = $28f99e3e86e6ec45$var$convertValue(props.defaultValue)) !== null && _convertValue !== void 0 ? _convertValue : [
            minValue
        ]);
    }, [
        props.defaultValue,
        minValue,
        restrictValues
    ]);
    let onChange = $28f99e3e86e6ec45$var$createOnChange(props.value, props.defaultValue, props.onChange);
    let onChangeEnd = $28f99e3e86e6ec45$var$createOnChange(props.value, props.defaultValue, props.onChangeEnd);
    const [values, setValuesState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledState"])(value, defaultValue, onChange);
    let [initialValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(values);
    const [isDraggings, setDraggingsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Array(values.length).fill(false));
    const isEditablesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Array(values.length).fill(true));
    const [focusedIndex, setFocusedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const valuesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(values);
    const isDraggingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isDraggings);
    let setValues = (values)=>{
        valuesRef.current = values;
        setValuesState(values);
    };
    let setDraggings = (draggings)=>{
        isDraggingsRef.current = draggings;
        setDraggingsState(draggings);
    };
    function getValuePercent(value) {
        return (value - minValue) / (maxValue - minValue);
    }
    function getThumbMinValue(index) {
        return index === 0 ? minValue : values[index - 1];
    }
    function getThumbMaxValue(index) {
        return index === values.length - 1 ? maxValue : values[index + 1];
    }
    function isThumbEditable(index) {
        return isEditablesRef.current[index];
    }
    function setThumbEditable(index, editable) {
        isEditablesRef.current[index] = editable;
    }
    function updateValue(index, value) {
        if (isDisabled || !isThumbEditable(index)) return;
        const thisMin = getThumbMinValue(index);
        const thisMax = getThumbMaxValue(index);
        // Round value to multiple of step, clamp value between min and max
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapValueToStep"])(value, thisMin, thisMax, step);
        let newValues = $28f99e3e86e6ec45$var$replaceIndex(valuesRef.current, index, value);
        setValues(newValues);
    }
    function updateDragging(index, dragging) {
        if (isDisabled || !isThumbEditable(index)) return;
        if (dragging) valuesRef.current = values;
        const wasDragging = isDraggingsRef.current[index];
        isDraggingsRef.current = $28f99e3e86e6ec45$var$replaceIndex(isDraggingsRef.current, index, dragging);
        setDraggings(isDraggingsRef.current);
        // Call onChangeEnd if no handles are dragging.
        if (onChangeEnd && wasDragging && !isDraggingsRef.current.some(Boolean)) onChangeEnd(valuesRef.current);
    }
    function getFormattedValue(value) {
        return formatter.format(value);
    }
    function setThumbPercent(index, percent) {
        updateValue(index, getPercentValue(percent));
    }
    function getRoundedValue(value) {
        return Math.round((value - minValue) / step) * step + minValue;
    }
    function getPercentValue(percent) {
        const val = percent * (maxValue - minValue) + minValue;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(getRoundedValue(val), minValue, maxValue);
    }
    function incrementThumb(index) {
        let stepSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        let s = Math.max(stepSize, step);
        updateValue(index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapValueToStep"])(values[index] + s, minValue, maxValue, step));
    }
    function decrementThumb(index) {
        let stepSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        let s = Math.max(stepSize, step);
        updateValue(index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapValueToStep"])(values[index] - s, minValue, maxValue, step));
    }
    return {
        values: values,
        defaultValues: props.defaultValue !== undefined ? defaultValue : initialValues,
        getThumbValue: (index)=>values[index],
        setThumbValue: updateValue,
        setThumbPercent: setThumbPercent,
        isThumbDragging: (index)=>isDraggings[index],
        setThumbDragging: updateDragging,
        focusedThumb: focusedIndex,
        setFocusedThumb: setFocusedIndex,
        getThumbPercent: (index)=>getValuePercent(values[index]),
        getValuePercent: getValuePercent,
        getThumbValueLabel: (index)=>getFormattedValue(values[index]),
        getFormattedValue: getFormattedValue,
        getThumbMinValue: getThumbMinValue,
        getThumbMaxValue: getThumbMaxValue,
        getPercentValue: getPercentValue,
        isThumbEditable: isThumbEditable,
        setThumbEditable: setThumbEditable,
        incrementThumb: incrementThumb,
        decrementThumb: decrementThumb,
        step: step,
        pageSize: pageSize,
        orientation: orientation,
        isDisabled: isDisabled
    };
}
function $28f99e3e86e6ec45$var$replaceIndex(array, index, value) {
    if (array[index] === value) return array;
    return [
        ...array.slice(0, index),
        value,
        ...array.slice(index + 1)
    ];
}
function $28f99e3e86e6ec45$var$convertValue(value) {
    if (value == null) return undefined;
    return Array.isArray(value) ? value : [
        value
    ];
}
function $28f99e3e86e6ec45$var$createOnChange(value, defaultValue, onChange) {
    return (newValue)=>{
        if (typeof value === 'number' || typeof defaultValue === 'number') onChange === null || onChange === void 0 ? void 0 : onChange(newValue[0]);
        else onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
}
;
 //# sourceMappingURL=useSliderState.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/slider/dist/useSlider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSlider",
    ()=>$bcca50147b47f54d$export$56b2c08e277f365
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/slider/dist/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/utils/dist/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useMove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useMove.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/label/dist/useLabel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/i18n/dist/context.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $bcca50147b47f54d$export$56b2c08e277f365(props, state, trackRef) {
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabel"])(props);
    let isVertical = props.orientation === 'vertical';
    var _labelProps_id;
    // Attach id of the label to the state so it can be accessed by useSliderThumb.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderData"]).set(state, {
        id: (_labelProps_id = labelProps.id) !== null && _labelProps_id !== void 0 ? _labelProps_id : fieldProps.id,
        'aria-describedby': props['aria-describedby'],
        'aria-details': props['aria-details']
    });
    let { direction: direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalListeners"])();
    // When the user clicks or drags the track, we want the motion to set and drag the
    // closest thumb.  Hence we also need to install useMove() on the track element.
    // Here, we keep track of which index is the "closest" to the drag start point.
    // It is set onMouseDown/onTouchDown; see trackProps below.
    const realTimeTrackDraggingIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reverseX = direction === 'rtl';
    const currentPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { moveProps: moveProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useMove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMove"])({
        onMoveStart () {
            currentPosition.current = null;
        },
        onMove (param) {
            let { deltaX: deltaX, deltaY: deltaY } = param;
            if (!trackRef.current) return;
            let { height: height, width: width } = trackRef.current.getBoundingClientRect();
            let size = isVertical ? height : width;
            if (currentPosition.current == null && realTimeTrackDraggingIndex.current != null) currentPosition.current = state.getThumbPercent(realTimeTrackDraggingIndex.current) * size;
            let delta = isVertical ? deltaY : deltaX;
            if (isVertical || reverseX) delta = -delta;
            currentPosition.current += delta;
            if (realTimeTrackDraggingIndex.current != null && trackRef.current) {
                const percent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(currentPosition.current / size, 0, 1);
                state.setThumbPercent(realTimeTrackDraggingIndex.current, percent);
            }
        },
        onMoveEnd () {
            if (realTimeTrackDraggingIndex.current != null) {
                state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
        }
    });
    let currentPointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    let onDownTrack = (e, id, clientX, clientY)=>{
        // We only trigger track-dragging if the user clicks on the track itself and nothing is currently being dragged.
        if (trackRef.current && !props.isDisabled && state.values.every((_, i)=>!state.isThumbDragging(i))) {
            let { height: height, width: width, top: top, left: left } = trackRef.current.getBoundingClientRect();
            let size = isVertical ? height : width;
            // Find the closest thumb
            const trackPosition = isVertical ? top : left;
            const clickPosition = isVertical ? clientY : clientX;
            const offset = clickPosition - trackPosition;
            let percent = offset / size;
            if (direction === 'rtl' || isVertical) percent = 1 - percent;
            let value = state.getPercentValue(percent);
            // to find the closet thumb we split the array based on the first thumb position to the "right/end" of the click.
            let closestThumb;
            let split = state.values.findIndex((v)=>value - v < 0);
            if (split === 0) closestThumb = split;
            else if (split === -1) closestThumb = state.values.length - 1;
            else {
                let lastLeft = state.values[split - 1];
                let firstRight = state.values[split];
                // Pick the last left/start thumb, unless they are stacked on top of each other, then pick the right/end one
                if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) closestThumb = split - 1;
                else closestThumb = split;
            }
            // Confirm that the found closest thumb is editable, not disabled, and move it
            if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
                // Don't unfocus anything
                e.preventDefault();
                realTimeTrackDraggingIndex.current = closestThumb;
                state.setFocusedThumb(closestThumb);
                currentPointer.current = id;
                state.setThumbDragging(realTimeTrackDraggingIndex.current, true);
                state.setThumbValue(closestThumb, value);
                addGlobalListener(window, 'mouseup', onUpTrack, false);
                addGlobalListener(window, 'touchend', onUpTrack, false);
                addGlobalListener(window, 'pointerup', onUpTrack, false);
            } else realTimeTrackDraggingIndex.current = null;
        }
    };
    let onUpTrack = (e)=>{
        var _e_changedTouches;
        var _e_pointerId;
        let id = (_e_pointerId = e.pointerId) !== null && _e_pointerId !== void 0 ? _e_pointerId : (_e_changedTouches = e.changedTouches) === null || _e_changedTouches === void 0 ? void 0 : _e_changedTouches[0].identifier;
        if (id === currentPointer.current) {
            if (realTimeTrackDraggingIndex.current != null) {
                state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
            removeGlobalListener(window, 'mouseup', onUpTrack, false);
            removeGlobalListener(window, 'touchend', onUpTrack, false);
            removeGlobalListener(window, 'pointerup', onUpTrack, false);
        }
    };
    if ('htmlFor' in labelProps && labelProps.htmlFor) {
        // Ideally the `for` attribute should point to the first thumb, but VoiceOver on iOS
        // causes this to override the `aria-labelledby` on the thumb. This causes the first
        // thumb to only be announced as the slider label rather than its individual name as well.
        // See https://bugs.webkit.org/show_bug.cgi?id=172464.
        delete labelProps.htmlFor;
        labelProps.onClick = ()=>{
            var // so do it manually. In addition, make sure we show the focus ring.
            _document_getElementById;
            (_document_getElementById = document.getElementById((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliderThumbId"])(state, 0))) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.focus();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInteractionModality"])('keyboard');
        };
    }
    return {
        labelProps: labelProps,
        // The root element of the Slider will have role="group" to group together
        // all the thumb inputs in the Slider.  The label of the Slider will
        // be used to label the group.
        groupProps: {
            role: 'group',
            ...fieldProps
        },
        trackProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
            onMouseDown (e) {
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDownTrack(e, undefined, e.clientX, e.clientY);
            },
            onPointerDown (e) {
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onDownTrack(e, e.pointerId, e.clientX, e.clientY);
            },
            onTouchStart (e) {
                onDownTrack(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            },
            style: {
                position: 'relative',
                touchAction: 'none'
            }
        }, moveProps),
        outputProps: {
            htmlFor: state.values.map((_, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliderThumbId"])(state, index)).join(' '),
            'aria-live': 'off'
        }
    };
}
;
 //# sourceMappingURL=useSlider.module.js.map
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-KAWYWWSG.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSlider",
    ()=>useSlider
]);
// src/use-slider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system/dist/chunk-Q3W45BN5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$OA5N2ZUW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-OA5N2ZUW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-BDGLNRCW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-rsc-utils/dist/chunk-RJKRL3AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$slider$2f$dist$2f$useSliderState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-stately/slider/dist/useSliderState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useNumberFormatter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/i18n/dist/useNumberFormatter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/i18n/dist/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$useSlider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/slider/dist/useSlider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function useSlider(originalProps) {
    var _a, _b, _c, _d;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$OA5N2ZUW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slider"].variantKeys);
    const { ref, as, name, label, formatOptions, value: valueProp, maxValue = 100, minValue = 0, step = 1, showSteps = false, showTooltip = false, orientation = "horizontal", marks = [], startContent, endContent, fillOffset, className, classNames, renderThumb, renderLabel, renderValue, onChange, onChangeEnd, getValue, getTooltipValue, tooltipValueFormatOptions = formatOptions, tooltipProps: userTooltipProps = {}, ...otherProps } = props;
    const isFixedValue = minValue === maxValue;
    if (isFixedValue) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])("Min and max values should not be the same. This may cause unexpected behavior.");
    }
    const Component = as || "div";
    const shouldFilterDOMProps = typeof Component === "string";
    const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const numberFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useNumberFormatter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNumberFormatter"])(formatOptions);
    const { direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const clampValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSlider.useCallback[clampValue]": (valueToClamp)=>{
            return Math.min(Math.max(valueToClamp, minValue), maxValue);
        }
    }["useSlider.useCallback[clampValue]"], [
        minValue,
        maxValue
    ]);
    const validatedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSlider.useMemo[validatedValue]": ()=>{
            if (isFixedValue) return minValue;
            if (valueProp === void 0) return void 0;
            if (Array.isArray(valueProp)) {
                return valueProp.map(clampValue);
            }
            return clampValue(valueProp);
        }
    }["useSlider.useMemo[validatedValue]"], [
        valueProp,
        clampValue,
        isFixedValue,
        minValue
    ]);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$stately$2f$slider$2f$dist$2f$useSliderState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderState"])({
        ...otherProps,
        value: validatedValue,
        isDisabled: (_c = originalProps == null ? void 0 : originalProps.isDisabled) != null ? _c : false,
        orientation,
        step,
        minValue,
        maxValue,
        numberFormatter,
        onChange,
        onChangeEnd
    });
    const tooltipProps = {
        offset: 5,
        delay: 0,
        size: "sm",
        showArrow: true,
        color: (originalProps == null ? void 0 : originalProps.color) ? originalProps == null ? void 0 : originalProps.color : (_d = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$OA5N2ZUW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slider"].defaultVariants) == null ? void 0 : _d.color,
        isDisabled: originalProps.isDisabled,
        ...userTooltipProps
    };
    const { groupProps, trackProps, labelProps, outputProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$slider$2f$dist$2f$useSlider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlider"])(originalProps, state, trackRef);
    const { isHovered, hoverProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: originalProps.isDisabled
    });
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    const isVertical = orientation === "vertical";
    const hasMarks = (marks == null ? void 0 : marks.length) > 0;
    const hasSingleThumb = fillOffset === void 0 ? state.values.length === 1 : false;
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSlider.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$OA5N2ZUW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slider"])({
                ...variantProps,
                hasMarks,
                disableAnimation,
                hasSingleThumb,
                isVertical
            })
    }["useSlider.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        isVertical,
        disableAnimation,
        hasSingleThumb,
        hasMarks
    ]);
    const [startOffset, endOffset] = [
        state.values.length > 1 ? state.getThumbPercent(0) : fillOffset !== void 0 ? state.getValuePercent(fillOffset) : 0,
        state.getThumbPercent(state.values.length - 1)
    ].sort();
    const value = state.values.length === 1 ? numberFormatter.format(state.values[0]) : numberFormatter.formatRange(state.values[0], state.values[state.values.length - 1]);
    const steps = showSteps ? Math.floor((maxValue - minValue) / step) + 1 : 0;
    const getBaseProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            ref: domRef,
            "data-orientation": state.orientation,
            "data-slot": "base",
            "data-hover": isHovered,
            className: slots.base({
                class: baseStyles
            }),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(groupProps, hoverProps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(otherProps, {
                enabled: shouldFilterDOMProps
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props2))
        };
    };
    const getLabelWrapperProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            className: slots.labelWrapper({
                class: classNames == null ? void 0 : classNames.labelWrapper
            }),
            "data-slot": "labelWrapper",
            ...props2
        };
    };
    const getLabelProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            "data-slot": "label",
            className: slots.label({
                class: classNames == null ? void 0 : classNames.label
            }),
            children: label,
            ...labelProps,
            ...props2
        };
    };
    const getValueProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            "data-slot": "value",
            className: slots.value({
                class: classNames == null ? void 0 : classNames.value
            }),
            children: getValue && typeof getValue === "function" ? getValue(state.values) : value,
            ...outputProps,
            ...props2
        };
    };
    const getTrackProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const fillWidth = (endOffset - startOffset) * 100;
        return {
            ref: trackRef,
            "data-slot": "track",
            "data-thumb-hidden": !!(originalProps == null ? void 0 : originalProps.hideThumb),
            "data-vertical": isVertical,
            ...hasSingleThumb ? {
                "data-fill-start": fillWidth > 0,
                "data-fill-end": fillWidth == 100
            } : {
                "data-fill-start": startOffset == 0,
                "data-fill-end": startOffset * 100 + fillWidth == 100
            },
            className: slots.track({
                class: classNames == null ? void 0 : classNames.track
            }),
            ...trackProps,
            ...props2
        };
    };
    const getTrackWrapperProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            "data-slot": "track-wrapper",
            className: slots.trackWrapper({
                class: classNames == null ? void 0 : classNames.trackWrapper
            }),
            ...props2
        };
    };
    const getFillerProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            "data-slot": "filler",
            className: slots.filler({
                class: classNames == null ? void 0 : classNames.filler
            }),
            ...props2,
            style: {
                ...props2.style,
                [isVertical ? "bottom" : direction === "rtl" ? "right" : "left"]: "".concat(startOffset * 100, "%"),
                ...isVertical ? {
                    height: "".concat((endOffset - startOffset) * 100, "%")
                } : {
                    width: "".concat((endOffset - startOffset) * 100, "%")
                }
            }
        };
    };
    const getThumbProps = (index)=>{
        return {
            name,
            index,
            state,
            trackRef,
            orientation,
            isVertical,
            tooltipProps,
            getTooltipValue,
            showTooltip,
            renderThumb,
            formatOptions: tooltipValueFormatOptions,
            className: slots.thumb({
                class: classNames == null ? void 0 : classNames.thumb
            })
        };
    };
    const getStepProps = (index)=>{
        const percent = state.getValuePercent(index * step + minValue);
        return {
            className: slots.step({
                class: classNames == null ? void 0 : classNames.step
            }),
            "data-slot": "step",
            "data-in-range": percent <= endOffset && percent >= startOffset,
            style: {
                [isVertical ? "bottom" : direction === "rtl" ? "right" : "left"]: "".concat(percent * 100, "%")
            }
        };
    };
    const getMarkProps = (mark)=>{
        const percent = state.getValuePercent(mark.value);
        return {
            className: slots.mark({
                class: classNames == null ? void 0 : classNames.mark
            }),
            "data-slot": "mark",
            "data-in-range": percent <= endOffset && percent >= startOffset,
            style: {
                [isVertical ? "bottom" : direction === "rtl" ? "right" : "left"]: "".concat(percent * 100, "%")
            },
            // avoid `onDownTrack` is being called since when you click the mark,
            // `onDownTrack` will calculate the percent based on the position you click
            // the calculated value will be set instead of the actual value defined in `marks`
            onMouseDown: (e)=>e.stopPropagation(),
            onPointerDown: (e)=>e.stopPropagation(),
            onClick: (e)=>{
                e.stopPropagation();
                if (isFixedValue) return;
                if (state.values.length === 1) {
                    state.setThumbPercent(0, percent);
                } else {
                    const leftThumbVal = state.values[0];
                    const rightThumbVal = state.values[1];
                    if (mark.value < leftThumbVal) {
                        state.setThumbPercent(0, percent);
                    } else if (mark.value > rightThumbVal) {
                        state.setThumbPercent(1, percent);
                    } else if (Math.abs(mark.value - leftThumbVal) < Math.abs(mark.value - rightThumbVal)) {
                        state.setThumbPercent(0, percent);
                    } else {
                        state.setThumbPercent(1, percent);
                    }
                }
            }
        };
    };
    const getStartContentProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            "data-slot": "startContent",
            className: slots.startContent({
                class: classNames == null ? void 0 : classNames.startContent
            }),
            ...props2
        };
    };
    const getEndContentProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            "data-slot": "endContent",
            className: slots.endContent({
                class: classNames == null ? void 0 : classNames.endContent
            }),
            ...props2
        };
    };
    return {
        Component,
        state,
        value,
        domRef,
        label,
        steps,
        marks,
        startContent,
        endContent,
        getStepProps,
        getBaseProps,
        getValue,
        renderLabel,
        renderValue,
        getTrackWrapperProps,
        getLabelWrapperProps,
        getLabelProps,
        getValueProps,
        getTrackProps,
        getFillerProps,
        getThumbProps,
        getMarkProps,
        getStartContentProps,
        getEndContentProps
    };
}
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-EUS52Q2W.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slider_default",
    ()=>slider_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$Y2LHSSQA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-Y2LHSSQA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$KAWYWWSG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-KAWYWWSG.mjs [app-client] (ecmascript)");
// src/slider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$6HA6QXMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-rsc-utils/dist/chunk-6HA6QXMR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var Slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, state, label, steps, marks, startContent, endContent, getStepProps, getBaseProps, renderValue, renderLabel, getTrackWrapperProps, getLabelWrapperProps, getLabelProps, getValueProps, getTrackProps, getFillerProps, getThumbProps, getMarkProps, getStartContentProps, getEndContentProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$KAWYWWSG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlider"])({
        ...props,
        ref
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ...getBaseProps(),
        children: [
            label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                ...getLabelWrapperProps(),
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$6HA6QXMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderFn"])({
                        Component: "label",
                        props: getLabelProps(),
                        renderCustom: renderLabel
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$6HA6QXMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderFn"])({
                        Component: "output",
                        props: getValueProps(),
                        renderCustom: renderValue
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                ...getTrackWrapperProps(),
                children: [
                    startContent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...getStartContentProps(),
                        children: startContent
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        ...getTrackProps(),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                ...getFillerProps()
                            }),
                            Number.isFinite(steps) && Array.from({
                                length: steps
                            }, (_, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    ...getStepProps(index)
                                }, index)),
                            state.values.map((_, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$Y2LHSSQA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slider_thumb_default"], {
                                    ...getThumbProps(index)
                                }, index)),
                            (marks == null ? void 0 : marks.length) > 0 && marks.map((mark, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    ...getMarkProps(mark),
                                    children: mark.label
                                }, index))
                        ]
                    }),
                    endContent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...getEndContentProps(),
                        children: endContent
                    })
                ]
            })
        ]
    });
});
Slider.displayName = "HeroUI.Slider";
var slider_default = Slider;
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-EUS52Q2W.mjs [app-client] (ecmascript) <export slider_default as Slider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$EUS52Q2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slider_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$slider$2f$dist$2f$chunk$2d$EUS52Q2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/slider/dist/chunk-EUS52Q2W.mjs [app-client] (ecmascript)");
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-QPMYACSN.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "image",
    ()=>image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-TX3FPB7D.mjs [app-client] (ecmascript)");
;
// src/components/image.ts
var image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        wrapper: "relative shadow-black/5",
        zoomedWrapper: "relative overflow-hidden rounded-inherit",
        img: "relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",
        blurredImg: [
            "absolute",
            "z-0",
            "inset-0",
            "w-full",
            "h-full",
            "object-cover",
            "filter",
            "blur-lg",
            "scale-105",
            "saturate-150",
            "opacity-30",
            "translate-y-1"
        ]
    },
    variants: {
        radius: {
            none: {},
            sm: {},
            md: {},
            lg: {},
            full: {}
        },
        shadow: {
            none: {
                wrapper: "shadow-none",
                img: "shadow-none"
            },
            sm: {
                wrapper: "shadow-small",
                img: "shadow-small"
            },
            md: {
                wrapper: "shadow-medium",
                img: "shadow-medium"
            },
            lg: {
                wrapper: "shadow-large",
                img: "shadow-large"
            }
        },
        isZoomed: {
            true: {
                img: [
                    "object-cover",
                    "transform",
                    "hover:scale-125"
                ]
            }
        },
        showSkeleton: {
            true: {
                wrapper: [
                    "group",
                    "relative",
                    "overflow-hidden",
                    "bg-content3 dark:bg-content2"
                ],
                img: "opacity-0"
            }
        },
        disableAnimation: {
            true: {
                img: "transition-none"
            },
            false: {
                img: "transition-transform-opacity motion-reduce:transition-none !duration-300"
            }
        }
    },
    defaultVariants: {
        radius: "lg",
        shadow: "none",
        isZoomed: false,
        isBlurred: false,
        showSkeleton: false
    },
    compoundVariants: [
        {
            showSkeleton: true,
            disableAnimation: false,
            class: {
                wrapper: [
                    // before
                    "before:opacity-100",
                    "before:absolute",
                    "before:inset-0",
                    "before:-translate-x-full",
                    "before:animate-shimmer",
                    "before:border-t",
                    "before:border-content4/30",
                    "before:bg-gradient-to-r",
                    "before:from-transparent",
                    "before:via-content4",
                    "dark:before:via-default-700/10",
                    "before:to-transparent",
                    //after
                    "after:opacity-100",
                    "after:absolute",
                    "after:inset-0",
                    "after:-z-10",
                    "after:bg-content3",
                    "dark:after:bg-content2"
                ]
            }
        }
    ],
    compoundSlots: [
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "none",
            class: "rounded-none"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "full",
            class: "rounded-full"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "sm",
            class: "rounded-small"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "md",
            class: "rounded-md"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "lg",
            class: "rounded-large"
        }
    ]
});
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/image/dist/chunk-VKNWGH3N.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImage",
    ()=>useImage
]);
// src/use-image.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system/dist/chunk-Q3W45BN5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$QPMYACSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-QPMYACSN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/react-utils/dist/chunk-BDGLNRCW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$image$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/use-image/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useImage(originalProps) {
    var _a, _b;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$Q3W45BN5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$QPMYACSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image"].variantKeys);
    const { ref, as, src, className, classNames, loading, isBlurred, fallbackSrc, isLoading: isLoadingProp, disableSkeleton = !!fallbackSrc, removeWrapper = false, onError, onLoad, srcSet, sizes, crossOrigin, ...otherProps } = props;
    const imageStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$use$2d$image$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImage"])({
        src,
        loading,
        onError,
        onLoad,
        ignoreFallback: false,
        srcSet,
        sizes,
        crossOrigin,
        shouldBypassImageLoad: as !== void 0
    });
    const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const isImgLoaded = imageStatus === "loaded" && !isLoadingProp;
    const isLoading = imageStatus === "loading" || isLoadingProp;
    const isZoomed = originalProps.isZoomed;
    const Component = as || "img";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$react$2d$utils$2f$dist$2f$chunk$2d$BDGLNRCW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { w, h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useImage.useMemo": ()=>{
            return {
                w: props.width ? typeof props.width === "number" ? "".concat(props.width, "px") : props.width : "fit-content",
                h: props.height ? typeof props.height === "number" ? "".concat(props.height, "px") : props.height : "auto"
            };
        }
    }["useImage.useMemo"], [
        props == null ? void 0 : props.width,
        props == null ? void 0 : props.height
    ]);
    const showFallback = (!src || !isImgLoaded) && !!fallbackSrc;
    const showSkeleton = isLoading && !disableSkeleton;
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useImage.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$QPMYACSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image"])({
                ...variantProps,
                disableAnimation,
                showSkeleton
            })
    }["useImage.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        disableAnimation,
        showSkeleton
    ]);
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, classNames == null ? void 0 : classNames.img);
    const getImgProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const imgStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseStyles, props2 == null ? void 0 : props2.className);
        return {
            src,
            ref: domRef,
            "data-loaded": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isImgLoaded),
            className: slots.img({
                class: imgStyles
            }),
            loading,
            srcSet,
            sizes,
            crossOrigin,
            ...otherProps,
            style: {
                // img has `height: auto` by default
                // passing the custom height here to override if it is specified
                ...(otherProps == null ? void 0 : otherProps.height) && {
                    height: h
                },
                ...props2.style,
                ...otherProps.style
            }
        };
    };
    const getWrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImage.useCallback[getWrapperProps]": ()=>{
            const fallbackStyle = showFallback ? {
                backgroundImage: "url(".concat(fallbackSrc, ")")
            } : {};
            return {
                className: slots.wrapper({
                    class: classNames == null ? void 0 : classNames.wrapper
                }),
                style: {
                    ...fallbackStyle,
                    maxWidth: w
                }
            };
        }
    }["useImage.useCallback[getWrapperProps]"], [
        slots,
        showFallback,
        fallbackSrc,
        classNames == null ? void 0 : classNames.wrapper,
        w
    ]);
    const getBlurredImgProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImage.useCallback[getBlurredImgProps]": ()=>{
            return {
                src,
                "aria-hidden": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(true),
                className: slots.blurredImg({
                    class: classNames == null ? void 0 : classNames.blurredImg
                })
            };
        }
    }["useImage.useCallback[getBlurredImgProps]"], [
        slots,
        src,
        classNames == null ? void 0 : classNames.blurredImg
    ]);
    return {
        Component,
        domRef,
        slots,
        classNames,
        isBlurred,
        disableSkeleton,
        fallbackSrc,
        removeWrapper,
        isZoomed,
        isLoading,
        getImgProps,
        getWrapperProps,
        getBlurredImgProps
    };
}
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/image/dist/chunk-BHGNW4BO.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "image_default",
    ()=>image_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$VKNWGH3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/image/dist/chunk-VKNWGH3N.mjs [app-client] (ecmascript)");
// src/image.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
var Image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, domRef, slots, classNames, isBlurred, isZoomed, fallbackSrc, removeWrapper, disableSkeleton, getImgProps, getWrapperProps, getBlurredImgProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$VKNWGH3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImage"])({
        ...props,
        ref
    });
    const img = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        ...getImgProps()
    });
    if (removeWrapper) {
        return img;
    }
    const zoomed = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: slots.zoomedWrapper({
            class: classNames == null ? void 0 : classNames.zoomedWrapper
        }),
        children: img
    });
    if (isBlurred) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ...getWrapperProps(),
            children: [
                isZoomed ? zoomed : img,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(img, getBlurredImgProps())
            ]
        });
    }
    if (isZoomed || !disableSkeleton || fallbackSrc) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ...getWrapperProps(),
            children: [
                " ",
                isZoomed ? zoomed : img
            ]
        });
    }
    return img;
});
Image.displayName = "HeroUI.Image";
var image_default = Image;
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/image/dist/chunk-BHGNW4BO.mjs [app-client] (ecmascript) <export image_default as Image>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/image/dist/chunk-BHGNW4BO.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=8de78_2458f1c5._.js.map