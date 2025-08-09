import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Eye } from "lucide-react"

//mockdata
const insights = [
  {
    id: "1",
    type: "optimization",
    title: "Campaign Performance",
    message: 'Your "Clean Water Initiative" is performing 23% above average. Consider increasing visibility.',
    severity: "info",
    icon: TrendingUp,
    iconColor: "text-green-600",
  },
  {
    id: "2",
    type: "fraud_detection",
    title: "Fraud Alert Resolved",
    message: "Suspicious activity detected and automatically blocked. $2,400 protected.",
    severity: "success",
    icon: CheckCircle,
    iconColor: "text-green-600",
  },
  {
    id: "3",
    type: "risk_assessment",
    title: "Risk Assessment",
    message: 'New campaign "Medical Aid" flagged for manual review due to high funding velocity.',
    severity: "warning",
    icon: AlertTriangle,
    iconColor: "text-yellow-600",
  },
]

export function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg flex items-center space-x-2">
              <Brain className="h-5 w-5 text-blue-600" />
              <span>AI Insights</span>
            </CardTitle>
            <CardDescription>Real-time fraud detection and optimization</CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="border rounded-lg p-3">
              <div className="flex items-start space-x-3">
                <div className={`p-1 rounded-full bg-gray-100 ${insight.iconColor}`}>
                  <insight.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium">{insight.title}</h4>
                    <Badge
                      variant={
                        insight.severity === "success"
                          ? "default"
                          : insight.severity === "warning"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {insight.type.replace("_", " ")}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{insight.message}</p>
                  <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                    <Eye className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
