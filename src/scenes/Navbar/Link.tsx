import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}   

export const Link = (props: Props) => {
    const lowerCasePage = props.page as SelectedPage
    console.log(lowerCasePage + ' ' + props.page + ' ' + props.selectedPage);
    
  return (
    <AnchorLink onClick={() => props.setSelectedPage(lowerCasePage)} className={`${props.selectedPage === lowerCasePage ? "text-primary-500" : ''}  transition duration-500 hover:text-primary-300  `} href={`#${lowerCasePage}`}>{props.page}</AnchorLink>
  )
}
