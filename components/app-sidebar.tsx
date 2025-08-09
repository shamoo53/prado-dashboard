import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Target,
  Users,
  Wallet,
  Award,
  Shield,
  Settings,
  HelpCircle,
  TrendingUp,
  FileText,
  Bell,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

//mockdata

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Campaigns",
    url: "/dashboard/campaigns",
    icon: Target,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: TrendingUp,
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
    icon: Wallet,
  },
  {
    title: "NFT Rewards",
    url: "/dashboard/rewards",
    icon: Award,
    badge: "3",
  },
  {
    title: "Community",
    url: "/dashboard/community",
    icon: Users,
  },
]

const securityItems = [
  {
    title: "KYC Status",
    url: "/dashboard/kyc",
    icon: Shield,
  },
  {
    title: "AI Insights",
    url: "/dashboard/ai-insights",
    icon: FileText,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: Bell,
    badge: "2",
  },
]

const supportItems = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    url: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">Prado-dash</h1>
            <p className="text-xs text-gray-500">Stellar Crowdfunding</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Security & AI</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {securityItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="destructive" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button className="w-full" size="sm">
          Create Campaign
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
