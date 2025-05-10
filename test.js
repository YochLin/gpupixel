const GpuPixel = require('./output/library/wasm/libgpupixel.js');

async function test() {
    try {
        const instance = await GpuPixel();
        const result = instance.BeautyFaceFilterWrapper.addNum(5, 3);
        console.log('5 + 3 =', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

test();
