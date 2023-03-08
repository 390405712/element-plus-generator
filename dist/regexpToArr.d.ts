declare const _default: ({
    key: string;
    title: string;
    rule: RegExp;
    examples: string[];
    counterExamples: string[];
} | {
    key: string;
    title: string;
    rule: RegExp;
    examples: (string | number)[];
    counterExamples?: undefined;
} | {
    key: string;
    title: string;
    rule: RegExp;
    examples: number[];
    counterExamples: string[];
})[];
export default _default;
