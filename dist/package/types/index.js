"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./piece/FlexType"), exports);
__exportStar(require("./props/ButtonPropsType"), exports);
__exportStar(require("./props/DividerPropsType"), exports);
__exportStar(require("./props/ExtendedElementPropsType"), exports);
__exportStar(require("./props/LayerPropsType"), exports);
__exportStar(require("./props/SkeletonPropsType"), exports);
__exportStar(require("./props/SpacingPropsType"), exports);
__exportStar(require("./props/TouchableOpacitPropsType"), exports);
__exportStar(require("./props/TxtPropsType"), exports);
