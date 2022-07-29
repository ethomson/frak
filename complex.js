    function magnitude(c) {
        return Math.sqrt(c[0] * c[0] + c[1] * c[1]);
    }
    function angle(c) {
        return Math.atan2(c[1], c[0]);
    }
    function add(c1, c2) {
        return [c1[0] + c2[0], c1[1] + c2[1]];
    }
    function subtract(c1, c2) {
        return [c1[0] - c2[0], c1[1] - c2[1]];
    }
    function multiply(c1, c2) {
        return [
            c1[0] * c2[0] - c1[1] * c2[1],
            c1[0] * c2[1] + c1[1] * c2[0]
        ];
    }
    function divide(c1, c2) {
        let numerator;
        let divisor;
        if (c2[1] == 0) {
            numerator = c1;
            divisor = c2[0];
        }
        else {
            const conjugate = [c2[0], 0 - c2[1]];
            numerator = [
                c1[0] * conjugate[0] - c1[1] * conjugate[1],
                c1[0] * conjugate[1] + c1[1] * conjugate[0]
            ];
            const divisorComponents = [
                c2[0] * conjugate[0] - c2[1] * conjugate[1],
                c2[0] * conjugate[1] + c2[1] * conjugate[0]
            ];
            divisor = divisorComponents[0];
        }
        return [numerator[0] / divisor, numerator[1] / divisor];
    }
    function log(c, n = 0) {
        const magnitude = Math.sqrt(c[0] * c[0] + c[1] * c[1]);
        const angle = Math.atan2(c[1], c[0]);
        return [Math.log(magnitude), angle + n * 2 * 3.141592653589793];
    }
    function exp(c) {
        const r = Math.exp(c[0]);
        return [r * Math.cos(c[1]), r * Math.sin(c[1])];
    }
    function power(c1, c2) {
        if (c2[1] == 0) {
            if (c2[0] == 0) {
                return [1, 0];
            } else if (c2[0] == 1) {
                return c1;
            } else if (c2[0] < 10) {
                let result = c1;
                for (let i = 1; i < c2[0]; i++) {
                    result = [
                        result[0] * c1[0] - result[1] * c1[1],
                        result[0] * c1[1] + result[1] * c1[0]
                    ];
                }
                return result;
            }
        }
        const magnitude = Math.sqrt(c1[0] * c1[0] + c1[1] * c1[1]);
        const angle = Math.atan2(c1[1], c1[0]);
        const l = [Math.log(magnitude), angle];
        const m = [
            l[0] * c2[0] - l[1] * c2[1],
            l[0] * c2[1] + l[1] * c2[0]
        ];
        const r = Math.exp(m[0]);
        return [r * Math.cos(m[1]), r * Math.sin(m[1])];
    }
