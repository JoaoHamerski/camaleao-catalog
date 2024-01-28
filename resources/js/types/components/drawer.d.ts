export interface SidebarDrawerProps {
  id: string
  items?: SidebarDrawerListItemProps[]
  ariaLabelOverlay?: string
  toggleClass?: string | string[]
}

export type SidebarDrawerListItemProps = {
  label: string
  icon: string
  url: string
  active: boolean
}

export interface SidebarDrawerListProps {
  items: SidebarDrawerListItemProps[]
}
