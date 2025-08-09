import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, Shield, Award, CheckCircle } from "lucide-react"
import { CampaignCard } from "@/components/campaign-card"
import { RecentTransactions } from "@/components/recent-transactions"
import { AIInsights } from "@/components/ai-insights"

// Mock data
const dashboardStats = {
  totalRaised: 2847392,
  activeCampaigns: 24,
  completedMilestones: 156,
  fraudPrevented: 12,
  nftRewards: 89,
  trustScore: 98.5,
}

const recentCampaigns = [
  {
    id: "1",
    title: "Clean Water Initiative - Rural Kenya",
    description: "Providing clean water access to 5,000 people in rural communities",
    raised: 45000,
    goal: 75000,
    backers: 234,
    daysLeft: 12,
    category: "Water & Sanitation",
    milestones: [
      { id: 1, title: "Site Survey Complete", completed: true, amount: 15000 },
      { id: 2, title: "Equipment Procurement", completed: true, amount: 25000 },
      { id: 3, title: "Installation Phase", completed: false, amount: 35000 },
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Education for All - Bangladesh",
    description: "Building schools and providing educational resources",
    raised: 28000,
    goal: 50000,
    backers: 156,
    daysLeft: 25,
    category: "Education",
    milestones: [
      { id: 1, title: "Land Acquisition", completed: true, amount: 20000 },
      { id: 2, title: "Construction Phase 1", completed: false, amount: 30000 },
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Monitor your campaigns, track milestones, and manage your impact</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${dashboardStats.totalRaised.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.activeCampaigns}</div>
            <p className="text-xs text-muted-foreground">3 new this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Milestones</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.completedMilestones}</div>
            <p className="text-xs text-muted-foreground">Completed milestones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fraud Prevented</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.fraudPrevented}</div>
            <p className="text-xs text-muted-foreground">AI detections</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NFT Rewards</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.nftRewards}</div>
            <p className="text-xs text-muted-foreground">Earned rewards</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trust Score</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.trustScore}%</div>
            <p className="text-xs text-muted-foreground">Platform reliability</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Campaigns */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Campaigns</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {recentCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          <AIInsights />
          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}
