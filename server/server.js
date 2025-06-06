const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 数据库初始化
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error('数据库连接失败:', err.message);
  } else {
    console.log('已连接到SQLite数据库');
    initDatabase();
  }
});

// 初始化数据库表
async function initDatabase() {
  return new Promise((resolve, reject) => {
    // 创建文章表
    db.run(`
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        summary TEXT,
        category TEXT DEFAULT 'AI洞察',
        tags TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('创建articles表失败:', err);
        reject(err);
        return;
      }
      console.log('articles表创建成功');

      // 创建产品表
      db.run(`
        CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT NOT NULL,
          url TEXT NOT NULL,
          category TEXT,
          features TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) {
          console.error('创建products表失败:', err);
          reject(err);
          return;
        }
        console.log('products表创建成功');
        
        // 插入初始数据
        insertInitialData();
        resolve();
      });
    });
  });
}

// 插入初始数据
function insertInitialData() {
  console.log('开始插入初始数据...');
  
  // 插入产品数据
  const products = [
    {
      name: 'AI实战培训体系',
      description: '专业的AI实战培训课程，涵盖AI工具使用、提示词工程、办公提效等核心技能',
      url: '#training',
      category: 'AI培训',
      features: JSON.stringify(['AI工具使用', '提示词工程', '办公提效', '实战案例'])
    },
    {
      name: 'AI媒体营销策略',
      description: '基于AI技术的媒体营销解决方案，提升内容创作和传播效率',
      url: '#marketing',
      category: 'AI营销',
      features: JSON.stringify(['内容创作', '智能分发', '数据分析', '效果优化'])
    },
    {
      name: 'AIP产品打造',
      description: 'AI产品设计与开发咨询，从概念到落地的全流程服务',
      url: '#aip',
      category: 'AI产品',
      features: JSON.stringify(['产品策划', '技术架构', '用户体验', '商业模式'])
    },
    {
      name: '企业AI咨询',
      description: '为世界500强企业提供AI战略咨询和数字化转型服务',
      url: '#consulting',
      category: 'AI咨询',
      features: JSON.stringify(['战略规划', '技术选型', '团队培训', '落地实施'])
    },
    {
      name: '自媒体运营矩阵',
      description: '跨平台自媒体运营，累计粉丝10W+，专注AI领域内容创作',
      url: '#media',
      category: '自媒体',
      features: JSON.stringify(['内容策划', '平台运营', '粉丝互动', '商业变现'])
    }
  ];

  let productsInserted = 0;
  products.forEach((product, index) => {
    db.run(
      'INSERT INTO products (name, description, url, category, features) VALUES (?, ?, ?, ?, ?)',
      [product.name, product.description, product.url, product.category, product.features],
      function(err) {
        if (err) {
          console.error('插入产品数据失败:', err);
        } else {
          productsInserted++;
          console.log(`产品数据插入成功: ${product.name}`);
          if (productsInserted === products.length) {
            console.log('所有产品数据插入完成');
          }
        }
      }
    );
  });

  // 插入示例文章
  const articles = [
    {
      title: 'AI时代的实战培训新模式',
      content: `在AI技术快速发展的今天，传统的培训方式已经无法满足企业和个人的学习需求。作为一名AI实战培训讲师，我在过去几年中培训了超过1000名学员，总结出了一套行之有效的AI实战培训新模式。

# 传统培训的痛点

传统的AI培训往往存在以下问题：
- 理论多实践少，学员难以上手
- 内容更新滞后，跟不上技术发展
- 缺乏个性化指导，学习效果参差不齐
- 培训后缺乏持续支持，知识容易遗忘

# AI实战培训新模式

我提出的AI实战培训新模式包含以下核心要素：

## 1. 项目驱动学习
- 以真实项目为载体，让学员在实践中学习
- 从简单到复杂，循序渐进提升技能
- 每个项目都有明确的交付成果

## 2. 工具化教学
- 重点教授实用的AI工具和平台
- 手把手演示操作流程
- 提供工具使用的最佳实践

## 3. 个性化指导
- 根据学员背景制定学习路径
- 一对一答疑解惑
- 定期评估学习进度

## 4. 社群化学习
- 建立学员交流群
- 定期分享最新AI资讯
- 组织线下实战活动

# 培训成果

通过这套培训模式，我的学员取得了显著成果：
- 90%的学员能够独立完成AI项目
- 平均提升工作效率50%以上
- 多名学员成功转型AI相关岗位
- 企业客户满意度达到95%以上

# 未来展望

随着AI技术的不断发展，我将继续优化培训内容和方式，为更多的个人和企业提供优质的AI实战培训服务。`,
      summary: '分享AI实战培训的新模式，通过项目驱动、工具化教学等方式提升培训效果',
      category: 'AI培训',
      tags: 'AI培训,实战教学,技能提升'
    },
    {
      title: '自媒体博主的AI内容创作心得',
      content: `作为一名拥有10W+粉丝的AI自媒体博主，我深知内容创作的重要性。在这个信息爆炸的时代，如何创作出既有价值又能吸引读者的内容，是每个自媒体人都需要思考的问题。

# 内容创作的核心原则

## 1. 价值导向
- 每篇内容都要为读者提供实际价值
- 分享真实的经验和见解
- 避免空洞的理论和概念

## 2. 通俗易懂
- 用简单的语言解释复杂的概念
- 多用案例和比喻
- 避免过多的专业术语

## 3. 实用性强
- 提供可操作的方法和工具
- 给出具体的实施步骤
- 分享实战经验和技巧

# AI工具在内容创作中的应用

作为AI领域的从业者，我也在内容创作中大量使用AI工具：

## 1. 内容策划
- 使用AI分析热点话题
- 生成内容大纲和框架
- 优化标题和摘要

## 2. 素材收集
- AI搜索相关资料
- 自动整理和分类信息
- 生成图表和可视化内容

## 3. 内容优化
- AI检查语法和表达
- 优化文章结构和逻辑
- 生成多个版本进行A/B测试

# 平台运营策略

## 今日头条
- 主力平台，发布深度文章
- 关注数据分析，优化推荐算法
- 与读者积极互动，建立信任关系

## 微信公众号
- 发布专业性较强的内容
- 建立私域流量池
- 提供更深度的服务

## 抖音
- 制作短视频内容
- 用生动的方式展示AI应用
- 吸引年轻用户群体

# 成长心得

通过几年的自媒体运营，我总结出以下心得：
1. 坚持原创，建立个人品牌
2. 深耕垂直领域，成为专家
3. 与粉丝建立真诚的连接
4. 不断学习，保持内容的前沿性
5. 商业化要自然，不能影响内容质量`,
      summary: '分享自媒体博主在AI内容创作和平台运营方面的实战经验和心得体会',
      category: '自媒体运营',
      tags: '自媒体,内容创作,AI应用,平台运营'
    },
    {
      title: '世界500强企业的AI数字化转型实践',
      content: `作为世界500强公司的项目合伙人，我有幸参与了多个大型企业的AI数字化转型项目。在这个过程中，我深刻体会到了企业级AI应用的复杂性和挑战性。

# 企业AI转型的现状

## 机遇与挑战并存
当前，大多数世界500强企业都意识到了AI的重要性，但在实际推进过程中面临诸多挑战：
- 技术与业务的结合难度大
- 数据质量和安全性问题
- 组织架构和文化的阻力
- ROI难以量化和评估

# 成功转型的关键要素

## 1. 高层支持和战略规划
- CEO和高管团队的坚定支持
- 制定清晰的AI战略和路线图
- 设立专门的AI转型团队

## 2. 数据基础设施建设
- 建立统一的数据平台
- 确保数据质量和安全
- 制定数据治理规范

## 3. 人才培养和组织变革
- 培养内部AI人才
- 引入外部专业团队
- 调整组织架构和流程

## 4. 渐进式实施策略
- 从小规模试点开始
- 选择合适的应用场景
- 逐步扩大应用范围

# 典型应用场景

## 智能客服
- 使用AI聊天机器人处理常见问题
- 提升客户服务效率和满意度
- 降低人工客服成本

## 供应链优化
- AI预测需求和库存
- 优化物流路径和配送
- 降低运营成本

## 风险管理
- AI识别和预警风险
- 自动化合规检查
- 提升决策质量

# 项目实施经验

在实际项目中，我总结出以下关键经验：

## 1. 业务导向
- 始终以解决业务问题为目标
- 避免为了技术而技术
- 确保AI应用能够创造实际价值

## 2. 敏捷开发
- 采用敏捷开发方法
- 快速迭代和优化
- 及时响应业务需求变化

## 3. 跨部门协作
- 建立有效的沟通机制
- 协调技术和业务团队
- 确保项目顺利推进

# 未来趋势

随着AI技术的不断发展，企业AI应用将呈现以下趋势：
1. 更加智能化和自动化
2. 与业务流程深度融合
3. 注重可解释性和透明度
4. 强化数据安全和隐私保护
5. 推动组织文化变革

作为AI咨询专家，我将继续为更多企业提供专业的AI转型服务，助力企业在数字化时代保持竞争优势。`,
      summary: '分享在世界500强企业AI数字化转型项目中的实践经验和成功要素',
      category: '企业AI',
      tags: '数字化转型,企业AI,项目管理,战略咨询'
    }
  ];

  articles.forEach(article => {
    db.run(
      'INSERT OR IGNORE INTO articles (title, content, summary, category, tags) VALUES (?, ?, ?, ?, ?)',
      [article.title, article.content, article.summary, article.category, article.tags]
    );
  });
}

// API路由

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'shengzhi-personal-website-api'
  });
});

// 获取所有产品
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const products = rows.map(row => ({
      ...row,
      features: JSON.parse(row.features || '[]')
    }));
    res.json(products);
  });
});

// 获取所有文章
app.get('/api/articles', (req, res) => {
  const { category, limit } = req.query;
  let sql = 'SELECT * FROM articles';
  let params = [];

  if (category) {
    sql += ' WHERE category = ?';
    params.push(category);
  }

  sql += ' ORDER BY created_at DESC';

  if (limit) {
    sql += ' LIMIT ?';
    params.push(parseInt(limit));
  }

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// 获取单篇文章
app.get('/api/articles/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM articles WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: '文章不存在' });
      return;
    }
    res.json(row);
  });
});

// 获取统计数据
app.get('/api/stats', (req, res) => {
  const stats = {};
  
  db.get('SELECT COUNT(*) as count FROM products', [], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    stats.products = row.count;
    
    db.get('SELECT COUNT(*) as count FROM articles', [], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      stats.articles = row.count;
      stats.experience = '5+'; // 经验年数
      stats.location = '佛山';
      
      res.json(stats);
    });
  });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '服务器内部错误' });
});

// 404处理
app.use((req, res) => {
  res.status(404).json({ error: '接口不存在' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n正在关闭服务器...');
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('数据库连接已关闭');
    process.exit(0);
  });
}); 