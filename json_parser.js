function main(args) {
    // 获取上一个代码节点返回的JSON字符串
    const jsonString = args.params['json_data'];
    
    try {
        // 解析JSON字符串为实际数组
        const parsedArray = JSON.parse(jsonString);
        
        // 返回解析后的数组
        return {
            'code': 200,
            'res': parsedArray
        };
    } catch (error) {
        // 如果解析失败，返回错误信息
        return {
            'code': 400,
            'res': 'JSON解析失败: ' + error.message
        };
    }
} 