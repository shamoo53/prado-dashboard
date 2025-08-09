import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Filter } from "lucide-react"
import { CampaignCard } from "@/components/campaign-card"
import { motion } from "framer-motion";

// Mock data for campaignsss
const campaigns = [
  {
    id: "1",
    title: "Clean Water Initiative - Rural Kenya",
    description:
      "Providing clean water access to 5,000 people in rural communities through sustainable well construction and water purification systems.",
    raised: 45000,
    goal: 75000,
    backers: 234,
    daysLeft: 12,
    category: "Water & Sanitation",
    milestones: [
      { id: 1, title: "Site Survey", completed: true, amount: 15000 },
      { id: 2, title: "Equipment", completed: true, amount: 25000 },
      { id: 3, title: "Installation", completed: false, amount: 35000 },
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Education for All - Bangladesh",
    description:
      "Building schools and providing educational resources for underprivileged children in rural Bangladesh communities.",
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
  {
    id: "3",
    title: "Medical Aid - Syria Relief",
    description: "Emergency medical supplies and healthcare services for displaced families in Syrian refugee camps.",
    raised: 67000,
    goal: 80000,
    backers: 445,
    daysLeft: 8,
    category: "Healthcare",
    milestones: [
      { id: 1, title: "Supply Procurement", completed: true, amount: 30000 },
      { id: 2, title: "Distribution Setup", completed: true, amount: 25000 },
      { id: 3, title: "Medical Team Deployment", completed: false, amount: 25000 },
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Disaster Relief - Philippines",
    description: "Emergency shelter and food supplies for typhoon victims in the Philippines archipelago.",
    raised: 15000,
    goal: 40000,
    backers: 89,
    daysLeft: 45,
    category: "Disaster Relief",
    milestones: [
      { id: 1, title: "Emergency Assessment", completed: true, amount: 10000 },
      { id: 2, title: "Supply Distribution", completed: false, amount: 20000 },
      { id: 3, title: "Shelter Construction", completed: false, amount: 10000 },
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-600 mt-2">
            Manage and monitor your crowdfunding campaigns
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filter & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search campaigns..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="water">Water & Sanitation</SelectItem>
                  <SelectItem value="disaster">Disaster Relief</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Campaign Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-green-600">+3 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-blue-600">75% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Raised
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.8M</div>
            <p className="text-xs text-green-600">+12% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-green-600">Above average</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Campaigns List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-y-4"
      >
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </motion.div>
    </div>
  );
}