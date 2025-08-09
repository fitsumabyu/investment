import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  MessageCircle, 
  Send,
  Bot,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  BarChart3
} from "lucide-react"

function CFOChatSkeleton() {
  return (
    <div className="container-mobile">
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-muted rounded-lg w-1/3"></div>
        <div className="grid-cards">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card-modern p-6">
              <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function CFOChatContent() {
  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">CFO Chat</h1>
            <p className="text-subtitle">AI-powered financial insights and analysis</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Bot className="h-4 w-4 mr-2" />
              AI Assistant
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Insights */}
      <div className="section-spacing">
        <div className="grid-cards">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Performance Insights
              </CardTitle>
              <CardDescription>
                AI analysis of your financial performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    Your portfolio is performing 15% above market average
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    Consider diversifying into commercial properties
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm font-medium text-yellow-800">
                    Monitor interest rate changes for refinancing opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                Risk Alerts
              </CardTitle>
              <CardDescription>
                AI-detected potential risks and opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    High vacancy rate detected in downtown properties
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    Opportunity: Market undervaluation in suburban areas
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    Consider tax optimization strategies for Q4
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Recommendations
              </CardTitle>
              <CardDescription>
                AI-generated strategic recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">
                    Increase investment in high-yield residential properties
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-sm font-medium text-indigo-800">
                    Optimize rental pricing based on market analysis
                  </p>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="text-sm font-medium text-teal-800">
                    Consider REIT investments for portfolio diversification
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Ask Your CFO</CardTitle>
            <CardDescription>
              Get instant financial insights and analysis from our AI CFO
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Chat Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm">
                        Hello! I'm your AI CFO assistant. I can help you analyze financial data, 
                        identify trends, and provide strategic recommendations. What would you like to know?
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Just now</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 justify-end">
                  <div className="flex-1 text-right">
                    <div className="bg-gray-100 rounded-lg p-3 inline-block">
                      <p className="text-sm">
                        How is my portfolio performing compared to market benchmarks?
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Just now</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">You</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm">
                        Your portfolio is performing exceptionally well! Here's my analysis:
                      </p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• 15% above market average returns</li>
                        <li>• Strong cash flow generation</li>
                        <li>• Excellent diversification across property types</li>
                        <li>• Low vacancy rates compared to market</li>
                      </ul>
                      <p className="text-sm mt-2 font-medium">
                        Recommendation: Consider increasing your investment in high-growth areas.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Just now</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex items-center space-x-2 pt-4 border-t border-border/50">
                <Input 
                  placeholder="Ask me anything about your finances..."
                  className="flex-1"
                />
                <Button size="sm" className="btn-modern">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Quick Questions</CardTitle>
            <CardDescription>
              Common questions you can ask your AI CFO
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start text-left h-auto p-3">
                <BarChart3 className="h-4 w-4 mr-2" />
                <div>
                  <div className="font-medium">Performance Analysis</div>
                  <div className="text-xs text-muted-foreground">How is my portfolio performing?</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start text-left h-auto p-3">
                <TrendingUp className="h-4 w-4 mr-2" />
                <div>
                  <div className="font-medium">Growth Opportunities</div>
                  <div className="text-xs text-muted-foreground">Where should I invest next?</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start text-left h-auto p-3">
                <AlertCircle className="h-4 w-4 mr-2" />
                <div>
                  <div className="font-medium">Risk Assessment</div>
                  <div className="text-xs text-muted-foreground">What risks should I be aware of?</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start text-left h-auto p-3">
                <Lightbulb className="h-4 w-4 mr-2" />
                <div>
                  <div className="font-medium">Strategic Advice</div>
                  <div className="text-xs text-muted-foreground">What's your strategic recommendation?</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CFOChatPage() {
  return (
    <Suspense fallback={<CFOChatSkeleton />}>
      <CFOChatContent />
    </Suspense>
  )
} 