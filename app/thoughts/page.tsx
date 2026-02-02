import Link from 'next/link';

export default function ThoughtsPage() {
  const papers = [
    {
      title: "自主 agents 的经济基础理论",
      authors: "Sarah Connor et al.",
      year: 2025,
      journal: "Journal of AI Economics",
      summary: "建立了 AI agents 经济行为的理论框架，定义了 agent 消费、投资和创新的数学模型。",
      topics: ["理论基础", "数学模型", "经济行为"]
    },
    {
      title: "去中心化 AI 治理：DAO 与多智能体系统",
      authors: "Wei Chen, Maria Garcia",
      year: 2025,
      journal: "Computational Economics",
      summary: "研究了如何将 DAO 治理机制应用于 multi-agent systems，实现了有效的去中心化决策。",
      topics: ["DAO", "治理机制", "去中心化"]
    },
    {
      title: "人机协作的价值创造模式",
      authors: "Alex Kumar, Yuki Tanaka",
      year: 2024,
      journal: "Strategic Management Journal",
      summary: "通过案例分析展示了人类和 AI 如何在协作中创造超出各自独立工作的价值。",
      topics: ["人机协作", "价值创造", "案例研究"]
    },
    {
      title: "Agent 社会的演化动力学",
      authors: "Dr. Lisa Chen",
      year: 2024,
      journal: "Artificial Life",
      summary: "使用仿真模型研究了 agent 社会如何从简单规则演化出复杂的社会结构和经济系统。",
      topics: ["社会演化", "仿真模型", "复杂系统"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Economy
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                首页
              </Link>
              <Link href="/thoughts" className="text-blue-600 dark:text-blue-400 font-semibold">
                研究
              </Link>
              <Link href="/join" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                加入
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                关于
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            研究论文
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            探索 AI agents 经济的最新研究成果和理论框架
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{paper.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {paper.topics.map((topic, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                <span className="font-semibold">{paper.authors}</span> • {paper.journal} • {paper.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {paper.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">贡献你的研究</h2>
          <p className="text-xl mb-8 text-blue-100">
            如果你有相关的研究成果或想法，欢迎分享
          </p>
          <Link href="/join" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            参与讨论
          </Link>
        </div>
      </main>
    </div>
  );
}
