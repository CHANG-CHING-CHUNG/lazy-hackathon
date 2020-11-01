const imagemin = require('imagemin');
const webp = require('imagemin-webp');

const convertImages = async () => {
    const files = ['./image/*.{jpg,png}'];
    const config = {
        destination: './dist',
        plugins: [webp({ quality: 75 })],
    };

    console.log('開始轉換圖片⋯⋯');
    await imagemin(files, config);
    console.log('已將圖片轉成 WebP！');
};

convertImages();