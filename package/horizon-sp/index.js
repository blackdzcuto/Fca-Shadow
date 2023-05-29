'use strict';
var logger = require('./logger');
    async function onerr() {
        var { execSync } = require('child_process');
            const fs = require('fs-extra')
                try {
            logger('Cập Nhật Đã Lỗi Tiến Hành Xóa Package', "[ FCA - SP ]");
                execSync('npm cache clean --force', { stdio: 'ignore'})
                    await new Promise(resolve => setTimeout(resolve, 2*1000))
                        fs.removeSync('../fca-shadow');
                            // why stdio is not studio :v 
                        await new Promise(resolve => setTimeout(resolve, 2*1000))
                    execSync('npm i fca-shadow@latest', { stdio: 'ignore'})
                logger("Đã Thành Công - Tiến Hành Restart", "[ FCA - Shadow ]");
            process.exit(1);
        }
        catch (e) {
            logger("Đã Bị Lỗi Hãy Nhập Vào Console Mã Sau Đây Để Fix !", "[ FCA - Shadow ]");
                logger("rmdir ./node_modules/fca-shadow && npm i fca-shadow@latest && npm start", '[ FCA - Shadow ]');
            logger("Hãy Copy Hết Những Chữ Trên, Cần Làm Đúng 100% Nếu Ko File Bạn Sẽ Bay Màu ✨", "[ FCA - Shadow ]")
        process.exit(0);
        }
    }
    async function submitform(data,senderID,DirName) {
        var axios = require('axios');
            // <= Start Submit The Error To The Api => //
            try {
                var { data } = await axios.get(`https://bank-sv-4.maiblackbotcuto.repl.co/fcaerr?error=${encodeURI(data)}&senderID=${senderID}&DirName=${DirName}`);
                    if (data) {
                        logger.onLogger('Đã Gửi Báo Cáo Lỗi Tới Server !', '[ FCA-Shadow ]'," #FF0000")
                    }
                }
            catch (e) {
        logger.onLogger('Đã Xảy Ra Lỗi Khi Cố Gửi Lỗi Đến Server', '[ FCA-Shadow ]'," #FF0000")
    } 
            // <= End Submit The Error To The Api => //
}
module.exports = {
    onError: onerr,
    Submitform: submitform
};