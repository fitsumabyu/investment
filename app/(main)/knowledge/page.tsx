import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  BookOpen, 
  Search,
  Play,
  FileText,
  Video,
  Book,
  TrendingUp,
  Star,
  Clock,
  Users
} from "lucide-react"

function KnowledgeSkeleton() {
  return (
    <div className="container-mobile">
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-muted rounded-lg w-1/3"></div>
        <div className="h-12 bg-muted rounded-lg"></div>
        <div className="grid-cards">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card-modern p-6">
              <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function KnowledgeContent() {
  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Knowledge Base</h1>
            <p className="text-subtitle">Learn about investment strategies and financial management</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <BookOpen className="h-4 w-4 mr-2" />
              Browse All
            </Button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="section-spacing">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search knowledge base..."
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      {/* Featured Content */}
      <div className="section-spacing">
        <div className="grid-cards">
          <Card className="card-elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-title">Getting Started</CardTitle>
                <Badge className="bg-green-100 text-green-800">Beginner</Badge>
              </div>
              <CardDescription>
                Essential guides for new investors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Play className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <h4 className="font-medium">Investment Basics</h4>
                    <p className="text-sm text-muted-foreground">5 min read</p>
                  </div>
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-accent/50 rounded-lg">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <h4 className="font-medium">Property Investment Guide</h4>
                    <p className="text-sm text-muted-foreground">12 min read</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-accent/50 rounded-lg">
                  <Video className="h-5 w-5 text-purple-600" />
                  <div className="flex-1">
                    <h4 className="font-medium">Portfolio Management</h4>
                    <p className="text-sm text-muted-foreground">8 min video</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-title">Advanced Strategies</CardTitle>
                <Badge className="bg-blue-100 text-blue-800">Advanced</Badge>
              </div>
              <CardDescription>
                Advanced investment techniques and strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <div className="flex-1">
                    <h4 className="font-medium">Market Analysis</h4>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-accent/50 rounded-lg">
                  <Book className="h-5 w-5 text-orange-600" />
                  <div className="flex-1">
                    <h4 className="font-medium">Tax Optimization</h4>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-accent/50 rounded-lg">
                  <Video className="h-5 w-5 text-indigo-600" />
                  <div className="flex-1">
                    <h4 className="font-medium">Risk Management</h4>
                    <p className="text-sm text-muted-foreground">12 min video</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Popular Articles</CardTitle>
            <CardDescription>
              Most viewed and recommended content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>2.4k</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Understanding ROI in Real Estate</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn how to calculate and maximize your return on investment in real estate properties.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                  <Button size="sm" variant="outline">Read More</Button>
                </div>
              </div>

              <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Video className="h-5 w-5 text-green-600" />
                    <Badge className="bg-green-100 text-green-800">Video</Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>1.8k</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Cash Flow Analysis Techniques</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Master the art of analyzing cash flow for better investment decisions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15 min</span>
                  </div>
                  <Button size="sm" variant="outline">Watch</Button>
                </div>
              </div>

              <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Book className="h-5 w-5 text-purple-600" />
                    <Badge className="bg-purple-100 text-purple-800">Guide</Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>1.2k</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Property Valuation Methods</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Comprehensive guide to different property valuation techniques and when to use them.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                  <Button size="sm" variant="outline">Read More</Button>
                </div>
              </div>

              <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    <Badge className="bg-orange-100 text-orange-800">Trending</Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>3.1k</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Market Timing Strategies</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn when to buy, sell, or hold based on market conditions and trends.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>18 min read</span>
                  </div>
                  <Button size="sm" variant="outline">Read More</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Browse by Category</CardTitle>
            <CardDescription>
              Explore content organized by topics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm">Basics</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">Strategies</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span className="text-sm">Analysis</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <Video className="h-6 w-6" />
                <span className="text-sm">Tutorials</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function KnowledgePage() {
  return (
    <Suspense fallback={<KnowledgeSkeleton />}>
      <KnowledgeContent />
    </Suspense>
  )
}
