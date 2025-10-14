(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$AWMMSYR4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spacer_default__as__Spacer$3e$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-AWMMSYR4.mjs [app-client] (ecmascript) <export spacer_default as Spacer>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MediaUpload() {
    _s();
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mediaURL, setMediaURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileType, setFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFile = (file)=>{
        if (file && (file.type.startsWith("audio/") || file.type.startsWith("video/") || file.name.toLowerCase().endsWith('.mxf'))) {
            setFileName(file.name);
            setMediaURL(URL.createObjectURL(file));
            setFileType(file.type || 'video/mxf');
        } else {
            alert("Por favor, envie um arquivo de áudio ou vídeo válido 🎵🎬");
        }
    };
    const handleFileChange = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) handleFile(file);
    };
    const handleDrop = (e)=>{
        var _e_dataTransfer_files;
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const file = (_e_dataTransfer_files = e.dataTransfer.files) === null || _e_dataTransfer_files === void 0 ? void 0 : _e_dataTransfer_files[0];
        if (file) handleFile(file);
    };
    const handleRemove = ()=>{
        setFileName(null);
        setMediaURL(null);
        setFileType(null);
        // limpa o input de arquivo
        const input = document.getElementById("media-upload");
        if (input) input.value = "";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
        className: "max-w-md mx-auto p-8 rounded-2xl bg-white text-center border-2 border-solid border-[#4B4B53] mt-20 mb-20",
        onDragOver: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
        },
        onDragLeave: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
        },
        onDrop: handleDrop,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
            className: "flex flex-col items-center justify-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "media-upload",
                    type: "file",
                    accept: "audio/*,video/*,.mxf",
                    onChange: handleFileChange,
                    style: {
                        display: "none"
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-30 flex flex-col items-center justify-center cursor-pointer",
                    onClick: ()=>{
                        var _document_getElementById;
                        return (_document_getElementById = document.getElementById("media-upload")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-gray-900 text-lg font-semibold mb-1",
                            children: "Arraste e solte o arquivo aqui"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: "ou clique aqui para selecionar um arquivo"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$AWMMSYR4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spacer_default__as__Spacer$3e$__["Spacer"], {
                    y: 1
                }, void 0, false, {
                    fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transition-all duration-500 ease-in-out transform ".concat(!fileName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        className: "bg-[#6F1FC6] text-white font-semibold rounded-full px-8 py-3 w-3/4",
                        onClick: ()=>{
                            var _document_getElementById;
                            return (_document_getElementById = document.getElementById("media-upload")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
                        },
                        children: "Fazer upload"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$AWMMSYR4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spacer_default__as__Spacer$3e$__["Spacer"], {
                    y: 1
                }, void 0, false, {
                    fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transition-all duration-500 ease-in-out transform ".concat(fileName && mediaURL ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none h-0 overflow-hidden'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-sm mb-2",
                                        children: [
                                            "Arquivo selecionado: ",
                                            fileName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    (fileType === null || fileType === void 0 ? void 0 : fileType.startsWith("audio/")) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                        controls: true,
                                        className: "w-full",
                                        src: mediaURL || undefined,
                                        children: "Seu navegador não suporta o elemento de áudio."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        controls: true,
                                        className: "w-full max-h-64",
                                        src: mediaURL || undefined,
                                        children: [
                                            "Seu navegador não suporta o elemento de vídeo.",
                                            (fileName === null || fileName === void 0 ? void 0 : fileName.toLowerCase().endsWith('.mxf')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mt-1",
                                                children: "Arquivo MXF detectado. Alguns navegadores podem não reproduzir este formato."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    className: "justify-center",
                                    color: "danger",
                                    variant: "flat",
                                    size: "sm",
                                    onClick: handleRemove,
                                    children: "Remover arquivo"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/components/inputFile.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(MediaUpload, "rPIG1Zyq/2ATZHowSP1uHQ6g18A=");
_c = MediaUpload;
var _c;
__turbopack_context__.k.register(_c, "MediaUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-CH7FQ62Q.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "spacing",
    ()=>spacing
]);
var spacing = {
    px: "1px",
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem"
};
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-SBOMX3YT.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spacer",
    ()=>spacer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-TX3FPB7D.mjs [app-client] (ecmascript)");
;
// src/components/spacer.ts
var spacer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "w-px h-px inline-block",
    variants: {
        isInline: {
            true: "inline-block",
            false: "block"
        }
    },
    defaultVariants: {
        isInline: false
    }
});
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-BRFD4NXM.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMargin",
    ()=>getMargin,
    "useSpacer",
    ()=>useSpacer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$CH7FQ62Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-CH7FQ62Q.mjs [app-client] (ecmascript)");
// src/use-spacer.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$SBOMX3YT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/theme/dist/chunk-SBOMX3YT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/shared-utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
var getMargin = (value)=>{
    var _a;
    return (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$CH7FQ62Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][value]) != null ? _a : value;
};
function useSpacer(originalProps) {
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$SBOMX3YT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacer"].variantKeys);
    const { as, className, x = 1, y = 1, ...otherProps } = props;
    const Component = as || "span";
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSpacer.useMemo[styles]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$SBOMX3YT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacer"])({
                ...variantProps,
                className
            })
    }["useSpacer.useMemo[styles]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        className
    ]);
    const marginLeft = getMargin(x);
    const marginTop = getMargin(y);
    const getSpacerProps = function() {
        let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return {
            ...props2,
            ...otherProps,
            "aria-hidden": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(true),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(styles, props2.className),
            style: {
                ...props2.style,
                ...otherProps.style,
                marginLeft,
                marginTop
            }
        };
    };
    return {
        Component,
        getSpacerProps
    };
}
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-AWMMSYR4.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spacer_default",
    ()=>spacer_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$BRFD4NXM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-BRFD4NXM.mjs [app-client] (ecmascript)");
// src/spacer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var Spacer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$system$2d$rsc$2f$dist$2f$chunk$2d$YFAKJTDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, getSpacerProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$BRFD4NXM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpacer"])({
        ...props
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref,
        ...getSpacerProps()
    });
});
Spacer.displayName = "HeroUI.Spacer";
var spacer_default = Spacer;
;
}),
"[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-AWMMSYR4.mjs [app-client] (ecmascript) <export spacer_default as Spacer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spacer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$AWMMSYR4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacer_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$localToGithub$2f$frontend_globo_residencia$2f$ContagIA$2f$HeroUI$2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$AWMMSYR4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/localToGithub/frontend_globo_residencia/ContagIA/HeroUI/node_modules/@heroui/spacer/dist/chunk-AWMMSYR4.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_localToGithub_frontend_globo_residencia_ContagIA_HeroUI_e90ecbab._.js.map