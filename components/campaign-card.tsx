import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Target, CheckCircle, Clock } from "lucide-react"
import Image from "next/image"

interface Milestone {
  id: number
  title: string
  completed: boolean
  amount: number
}

interface Campaign {
  id: string
  title: string
  description: string
  raised: number
  goal: number
  backers: number
  daysLeft: number
  category: string
  milestones: Milestone[]
  image: string
}

interface CampaignCardProps {
  campaign: Campaign
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progressPercentage = (campaign.raised / campaign.goal) * 100
  const completedMilestones = campaign.milestones.filter((m) => m.completed).length

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex">
        <div className="w-48 h-32 relative flex-shrink-0">
          <Image src={campaign.image || "/placeholder.svg"} alt={campaign.title} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg line-clamp-1">{campaign.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-1">{campaign.description}</CardDescription>
              </div>
              <Badge variant="secondary">{campaign.category}</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">${campaign.raised.toLocaleString()}</span>
                  <span className="text-gray-500">of ${campaign.goal.toLocaleString()}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{campaign.backers} backers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4" />
                    <span>
                      {completedMilestones}/{campaign.milestones.length} milestones
                    </span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>

              {/* Milestones */}
              <div className="flex space-x-2">
                {campaign.milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${
                      milestone.completed ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {milestone.completed ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                    <span>{milestone.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
