import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft, Shield, Award } from "lucide-react"

const transactions = [
  {
    id: "1",
    type: "contribution",
    amount: 250,
    currency: "XLM",
    campaign: "Clean Water Initiative",
    status: "completed",
    timestamp: "2 hours ago",
    icon: ArrowUpRight,
    iconColor: "text-green-600",
  },
  {
    id: "2",
    type: "milestone_release",
    amount: 15000,
    currency: "XLM",
    campaign: "Education for All",
    status: "completed",
    timestamp: "5 hours ago",
    icon: Shield,
    iconColor: "text-blue-600",
  },
  {
    id: "3",
    type: "nft_reward",
    amount: 1,
    currency: "NFT",
    campaign: "Humanitarian Badge",
    status: "completed",
    timestamp: "1 day ago",
    icon: Award,
    iconColor: "text-purple-600",
  },
  {
    id: "4",
    type: "withdrawal",
    amount: 500,
    currency: "XLM",
    campaign: "Personal Wallet",
    status: "pending",
    timestamp: "2 days ago",
    icon: ArrowDownLeft,
    iconColor: "text-orange-600",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
        <CardDescription>Your latest blockchain activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full bg-gray-100 ${transaction.iconColor}`}>
                  <transaction.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.campaign}</p>
                  <p className="text-xs text-gray-500">{transaction.timestamp}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">
                  {transaction.type === "withdrawal" || transaction.type === "contribution" ? "-" : "+"}
                  {transaction.amount} {transaction.currency}
                </p>
                <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="text-xs">
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
