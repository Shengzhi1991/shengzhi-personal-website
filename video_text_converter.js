// 引入需要的模块（如果需要的话）
// const axios = require('axios');

function main(args) {
    // 获取参数
    const input_commentcount = args.params['input_commentcount'];
    const input_desc = args.params['input_desc'];
    const input_digg_count = args.params['input_digg_count'];
    const input_nickname = args.params['input_nickname'];
    const input_text = args.params['input_text'];
    
    // 尝试返回一个values字段的对象
    return {
        values: JSON.stringify([[
            input_nickname || '',
            input_text || '',
            input_desc || '',
            input_commentcount || 0,
            input_digg_count || 0,
            '2025-06-04',
            '视频数据'
        ]])
    };
} 