import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupContent
} from "@/components/ui/sidebar"

import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar"
import { Package, Network, ArrowLeftRight, Truck, DollarSign } from "lucide-react"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="bg-blue-950 text-white">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<a href="/" />}>
                            <Avatar>
                                <AvatarImage src="https://thumbs.dreamstime.com/b/fundo-da-laranja-do-carrinho-de-compras-80754940.jpg" />
                                <AvatarFallback>Logo</AvatarFallback>
                            </Avatar>
                            <span>Mini Market Mix Plus</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <hr />
            <SidebarContent className="bg-blue-950 text-white">
                <SidebarGroup>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<a href="/" />}>
                            <Package />
                            <span>Produtos</span>
                        </SidebarMenuButton>
                        <SidebarMenuButton render={<a href="/estoque" />}>
                            <Network />
                            <span>Estoque</span>
                        </SidebarMenuButton>
                        <SidebarMenuButton render={<a href="/" />}>
                            <ArrowLeftRight />
                            <span>Movimentações</span>
                        </SidebarMenuButton>
                        <SidebarMenuButton render={<a href="/" />}>
                            <Truck />
                            <span>Fornecedores</span>
                        </SidebarMenuButton>
                        <SidebarMenuButton render={<a href="/" />}>
                            <DollarSign />
                            <span>Financeiro</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarGroupContent></SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}