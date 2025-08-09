import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Award, Star, Trophy, Medal, Gift, Zap } from "lucide-react"
import Image from "next/image"

// Mock NFT rewards data
const nftRewards = [
  {
    id: "1",
    name: "Humanitarian Hero",
    description: "Awarded for contributing to 5+ humanitarian campaigns",
    image: "/placeholder.svg?height=200&width=200",
    rarity: "Epic",
    earned: true,
    earnedDate: "2024-01-15",
    category: "Contribution",
    requirements: "Contribute to 5 humanitarian campaigns",
    progress: 5,
    maxProgress: 5,
  },
  {
    id: "2",
    name: "Water Guardian",
    description: "Champion of clean water initiatives worldwide",
    image: "/placeholder.svg?height=200&width=200",
    rarity: "Rare",
    earned: true,
    earnedDate: "2024-02-03",
    category: "Category Specialist",
    requirements: "Support 3 water & sanitation projects",
    progress: 3,
    maxProgress: 3,
  },
  {
    id: "3",
    name: "Education Advocate",
    description: "Dedicated supporter of educational causes",
    image: "/placeholder.svg?height=200&width=200",
    rarity: "Uncommon",
    earned: true,
    earnedDate: "2024-01-28",
    category: "Category Specialist",
    requirements: "Fund 2 education campaigns",
    progress: 2,
    maxProgress: 2,
  },
  {
    id: "4",
    name: "Milestone Master",
    description: "Expert at achieving campaign milestones",
    image: "/placeholder.svg?height=200&width=200",
    rarity: "Legendary",
    earned: false,
    earnedDate: null,
    category: "Achievement",
    requirements: "Complete 10 campaign milestones",
    progress: 7,
    maxProgress: 10,
  },
  {
    id: "5",
    name: "Community Builder",
    description: "Bringing people together for good causes",
    image: "/placeholder.svg?height=200&width=200",
    rarity: "Rare",
    earned: false,
    earnedDate: null,
    category: "Social",
    requirements: "Refer 15 new users to the platform",
    progress: 8,
    maxProgress: 15,
  },
  {
    id: "6",
    name: "Early Supporter",
    description: "One of the first to believe in new campaigns",
    image: "/placeholder.svg?height=200&width=200",
    rarity: "Epic",
    earned: false,
    earnedDate: null,
    category: "Timing",
    requirements: "Be among first 10 backers in 5 campaigns",
    progress: 3,
    maxProgress: 5,
  },
]

const rewardStats = {
  totalEarned: 3,
  totalAvailable: 6,
  rarityPoints: 850,
  nextReward: "Milestone Master",
  communityRank: 127,
}

function getRarityColor(rarity: string) {
  switch (rarity) {
    case "Common":
      return "bg-gray-500"
    case "Uncommon":
      return "bg-green-500"
    case "Rare":
      return "bg-blue-500"
    case "Epic":
      return "bg-purple-500"
    case "Legendary":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

function getRarityIcon(rarity: string) {
  switch (rarity) {
    case "Common":
      return Medal
    case "Uncommon":
      return Award
    case "Rare":
      return Star
    case "Epic":
      return Trophy
    case "Legendary":
      return Zap
    default:
      return Medal
  }
}

export default function RewardsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">NFT Rewards</h1>
          <p className="text-gray-600 mt-2">Earn unique NFT badges for your contributions and achievements</p>
        </div>
        <Button variant="outline">
          <Gift className="h-4 w-4 mr-2" />
          Claim Rewards
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Earned NFTs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rewardStats.totalEarned}</div>
            <p className="text-xs text-gray-500">of {rewardStats.totalAvailable} available</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Rarity Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rewardStats.rarityPoints}</div>
            <p className="text-xs text-green-600">+125 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Community Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{rewardStats.communityRank}</div>
            <p className="text-xs text-blue-600">Top 15%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Next Reward</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold">{rewardStats.nextReward}</div>
            <p className="text-xs text-gray-500">3 milestones away</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Collection Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 XLM</div>
            <p className="text-xs text-purple-600">Estimated value</p>
          </CardContent>
        </Card>
      </div>

      {/* NFT Collection */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your NFT Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftRewards.map((nft) => {
            const RarityIcon = getRarityIcon(nft.rarity)
            const progressPercentage = (nft.progress / nft.maxProgress) * 100

            return (
              <Card key={nft.id} className={`overflow-hidden ${nft.earned ? "ring-2 ring-green-200" : "opacity-75"}`}>
                <div className="relative">
                  <Image
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={`${getRarityColor(nft.rarity)} text-white`}>
                      <RarityIcon className="h-3 w-3 mr-1" />
                      {nft.rarity}
                    </Badge>
                  </div>
                  {nft.earned && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-green-600 text-white">
                        <Award className="h-3 w-3 mr-1" />
                        Earned
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{nft.name}</CardTitle>
                  <CardDescription>{nft.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Category:</span>
                      <Badge variant="outline">{nft.category}</Badge>
                    </div>

                    {nft.earned ? (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Earned:</span>
                        <span className="font-medium">{nft.earnedDate}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress:</span>
                          <span className="font-medium">
                            {nft.progress}/{nft.maxProgress}
                          </span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                        <p className="text-xs text-gray-500">{nft.requirements}</p>
                      </div>
                    )}

                    <Button
                      size="sm"
                      className="w-full"
                      variant={nft.earned ? "outline" : "default"}
                      disabled={!nft.earned}
                    >
                      {nft.earned ? "View Details" : `${Math.ceil(nft.maxProgress - nft.progress)} more needed`}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Community Leaderboard</CardTitle>
          <CardDescription>Top NFT collectors this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { rank: 1, name: "Alex Chen", nfts: 12, points: 2450, badge: "🥇" },
              { rank: 2, name: "Sarah Johnson", nfts: 10, points: 2180, badge: "🥈" },
              { rank: 3, name: "Mike Rodriguez", nfts: 9, points: 1950, badge: "🥉" },
              { rank: 4, name: "Emma Wilson", nfts: 8, points: 1720, badge: "" },
              { rank: 5, name: "You", nfts: 3, points: 850, badge: "", highlight: true },
            ].map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-3 rounded-lg ${user.highlight ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold">
                    {user.badge || user.rank}
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.nfts} NFTs collected</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{user.points} points</p>
                  <p className="text-xs text-gray-500">Rank #{user.rank}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
