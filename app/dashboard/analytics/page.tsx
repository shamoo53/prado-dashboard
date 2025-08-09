"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Users, Target, DollarSign, Calendar, BarChart3, PieChart, Download } from "lucide-react"
import { motion } from "framer-motion";

// Mock analytics data
const analyticsData = {
  totalRaised: 2847392,
  totalCampaigns: 24,
  totalBackers: 1567,
  averageContribution: 182,
  monthlyGrowth: 12.5,
  campaignSuccessRate: 87,
  topCategories: [
    { name: "Education", amount: 1200000, percentage: 42 },
    { name: "Healthcare", amount: 850000, percentage: 30 },
    { name: "Water & Sanitation", amount: 500000, percentage: 18 },
    { name: "Disaster Relief", amount: 297392, percentage: 10 },
  ],
  monthlyData: [
    { month: "Jan", raised: 180000, campaigns: 3, backers: 120 },
    { month: "Feb", raised: 220000, campaigns: 4, backers: 145 },
    { month: "Mar", raised: 280000, campaigns: 5, backers: 189 },
    { month: "Apr", raised: 350000, campaigns: 6, backers: 234 },
    { month: "May", raised: 420000, campaigns: 4, backers: 267 },
    { month: "Jun", raised: 480000, campaigns: 2, backers: 312 },
  ],
}

export default function AnalyticsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">
            Track performance and insights across your campaigns
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="6months">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${analyticsData.totalRaised.toLocaleString()}
            </div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />+
              {analyticsData.monthlyGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Campaigns
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.totalCampaigns}
            </div>
            <div className="flex items-center text-xs text-blue-600">
              <Badge variant="secondary" className="text-xs">
                {analyticsData.campaignSuccessRate}% success rate
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Backers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.totalBackers.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Avg: ${analyticsData.averageContribution} per backer
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{analyticsData.monthlyGrowth}%
            </div>
            <p className="text-xs text-muted-foreground">Monthly growth</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Charts Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Monthly Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Monthly Performance</span>
            </CardTitle>
            <CardDescription>
              Funds raised and campaigns launched over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.monthlyData.map((data, index) => (
                <div
                  key={data.month}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 text-sm font-medium">{data.month}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>${data.raised.toLocaleString()}</span>
                        <span className="text-gray-500">
                          {data.campaigns} campaigns
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(data.raised / 500000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5" />
              <span>Category Breakdown</span>
            </CardTitle>
            <CardDescription>
              Funding distribution by campaign category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.topCategories.map((category, index) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index === 0
                          ? "bg-blue-500"
                          : index === 1
                          ? "bg-green-500"
                          : index === 2
                          ? "bg-yellow-500"
                          : "bg-purple-500"
                      }`}
                    ></div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      ${category.amount.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {category.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Performance Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
            <CardDescription>
              AI-powered insights and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Top Performer</span>
                </div>
                <p className="text-xs text-gray-600">
                  Education campaigns show 23% higher success rates. Consider
                  focusing on this category.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Optimal Timing</span>
                </div>
                <p className="text-xs text-gray-600">
                  Campaigns launched on Tuesdays receive 18% more initial
                  funding in the first 48 hours.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Engagement</span>
                </div>
                <p className="text-xs text-gray-600">
                  Campaigns with video content receive 34% more backers on
                  average.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
